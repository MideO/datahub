import logging
import shutil
import tempfile
from typing import Optional

import click

from datahub import __package_name__
from datahub.cli.json_file import check_mce_file
from datahub.emitter.mce_builder import DEFAULT_ENV
from datahub.ingestion.graph.client import get_default_graph
from datahub.ingestion.run.pipeline import Pipeline
from datahub.ingestion.sink.sink_registry import sink_registry
from datahub.ingestion.source.source_registry import source_registry
from datahub.ingestion.transformer.transform_registry import transform_registry
from datahub.telemetry import telemetry

logger = logging.getLogger(__name__)


@click.group()
def check() -> None:
    """Helper commands for checking various aspects of DataHub."""
    pass


@check.command()
@click.argument("json-file", type=click.Path(exists=True, dir_okay=False))
@click.option(
    "--rewrite",
    default=False,
    is_flag=True,
    help="Rewrite the JSON file to it's canonical form.",
)
@click.option(
    "--unpack-mces", default=False, is_flag=True, help="Converts MCEs into MCPs"
)
@telemetry.with_telemetry()
def metadata_file(json_file: str, rewrite: bool, unpack_mces: bool) -> None:
    """Check the schema of a metadata (MCE or MCP) JSON file."""

    if not rewrite:
        report = check_mce_file(json_file)
        click.echo(report)

    else:
        with tempfile.NamedTemporaryFile() as out_file:
            pipeline = Pipeline.create(
                {
                    "source": {
                        "type": "file",
                        "config": {"filename": json_file},
                        "extractor": "generic",
                        "extractor_config": {
                            "set_system_metadata": False,
                            "unpack_mces_into_mcps": unpack_mces,
                        },
                    },
                    "sink": {
                        "type": "file",
                        "config": {"filename": out_file.name},
                    },
                }
            )

            pipeline.run()
            pipeline.raise_from_status()

            shutil.copy(out_file.name, json_file)


@check.command()
@click.option(
    "--verbose",
    "-v",
    type=bool,
    is_flag=True,
    default=False,
    help="Include extra information for each plugin.",
)
@telemetry.with_telemetry()
def plugins(verbose: bool) -> None:
    """List the enabled ingestion plugins."""

    click.secho("Sources:", bold=True)
    click.echo(source_registry.summary(verbose=verbose))
    click.echo()
    click.secho("Sinks:", bold=True)
    click.echo(sink_registry.summary(verbose=verbose))
    click.echo()
    click.secho("Transformers:", bold=True)
    click.echo(transform_registry.summary(verbose=verbose, col_width=30))
    click.echo()
    if not verbose:
        click.echo("For details on why a plugin is disabled, rerun with '--verbose'")
    click.echo(
        f"If a plugin is disabled, try running: pip install '{__package_name__}[<plugin>]'"
    )


@check.command()
@click.option(
    "--sql",
    type=str,
    required=True,
    help="The SQL query to parse",
)
@click.option(
    "--platform",
    type=str,
    required=True,
    help="The SQL dialect e.g. bigquery or snowflake",
)
@click.option(
    "--platform-instance",
    type=str,
    help="The specific platform_instance the SQL query was run in",
)
@click.option(
    "--env",
    type=str,
    default=DEFAULT_ENV,
    help=f"The environment the SQL query was run in, defaults to {DEFAULT_ENV}",
)
@click.option(
    "--default-db",
    type=str,
    help="The default database to use for unqualified table names",
)
@click.option(
    "--default-schema",
    type=str,
    help="The default schema to use for unqualified table names",
)
@telemetry.with_telemetry()
def sql_lineage(
    sql: str,
    platform: str,
    default_db: Optional[str],
    default_schema: Optional[str],
    platform_instance: Optional[str],
    env: str,
) -> None:
    """Parse the lineage of a SQL query.

    This performs schema-aware parsing in order to generate column-level lineage.
    If the relevant tables are not in DataHub, this will be less accurate.
    """

    graph = get_default_graph()

    lineage = graph.parse_sql_lineage(
        sql,
        platform=platform,
        platform_instance=platform_instance,
        env=env,
        default_db=default_db,
        default_schema=default_schema,
    )

    logger.debug("Sql parsing debug info: %s", lineage.debug_info)

    click.echo(lineage.json(indent=4))
