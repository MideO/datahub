"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1439],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8526:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/kafka-config.md"},s="How to configure Kafka?",u={unversionedId:"docs/how/kafka-config",id:"docs/how/kafka-config",isDocsHomePage:!1,title:"Configuring Kafka",description:"With the exception of KAFKABOOTSTRAPSERVER and KAFKASCHEMAREGISTRYURL, Kafka is configured via spring-boot, specifically with KafkaProperties. See Integration Properties prefixed with spring.kafka.",source:"@site/genDocs/docs/how/kafka-config.md",sourceDirName:"docs/how",slug:"/how/kafka-config",permalink:"/docs/how/kafka-config",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/kafka-config.md",tags:[],version:"current",frontMatter:{title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/kafka-config.md"},sidebar:"overviewSidebar",previous:{title:"Monitoring DataHub",permalink:"/docs/advanced/monitoring"},next:{title:"Deploying with Docker",permalink:"/docs/docker"}},p=[{value:"Configuring Topic Names",id:"configuring-topic-names",children:[{value:"datahub-gms",id:"datahub-gms",children:[],level:3},{value:"datahub-mce-consumer",id:"datahub-mce-consumer",children:[],level:3},{value:"datahub-mae-consumer",id:"datahub-mae-consumer",children:[],level:3}],level:2},{value:"Configuring Consumer Group Id",id:"configuring-consumer-group-id",children:[{value:"datahub-mce-consumer and datahub-mae-consumer",id:"datahub-mce-consumer-and-datahub-mae-consumer",children:[],level:3}],level:2},{value:"How to apply configuration?",id:"how-to-apply-configuration",children:[],level:2},{value:"SSL",id:"ssl",children:[{value:"Kafka",id:"kafka",children:[],level:3},{value:"Schema Registry",id:"schema-registry",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-configure-kafka"},"How to configure Kafka?"),(0,i.kt)("p",null,"With the exception of ",(0,i.kt)("inlineCode",{parentName:"p"},"KAFKA_BOOTSTRAP_SERVER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"KAFKA_SCHEMAREGISTRY_URL"),", Kafka is configured via ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"spring-boot"),", specifically with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/kafka/KafkaProperties.html"},"KafkaProperties"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Integration Properties")," prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"spring.kafka"),". "),(0,i.kt)("p",null,"Below is an example of how SASL/GSSAPI properties can be configured via environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export KAFKA_BOOTSTRAP_SERVER=broker:29092\nexport KAFKA_SCHEMAREGISTRY_URL=http://schema-registry:8081\nexport SPRING_KAFKA_PROPERTIES_SASL_KERBEROS_SERVICE_NAME=kafka\nexport SPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_PLAINTEXT\nexport SPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,i.kt)("p",null,"These properties can be specified via ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," files, or as command line switches, or as environment variables. See Spring's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"},"Externalized Configuration")," to see how this works."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/current/connect/security.html"},"Kafka Connect Security")," for more ways to connect."),(0,i.kt)("p",null,"DataHub components that connect to Kafka are currently:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mce-consumer-job"),(0,i.kt)("li",{parentName:"ul"},"mae-consumer-job"),(0,i.kt)("li",{parentName:"ul"},"gms"),(0,i.kt)("li",{parentName:"ul"},"Various ingestion example apps")),(0,i.kt)("h2",{id:"configuring-topic-names"},"Configuring Topic Names"),(0,i.kt)("p",null,"By default, ingestion relies upon the ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent_v4"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent_v4"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"FailedMetadataChangeEvent")," kafka topics by default for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"metadata events"),"."),(0,i.kt)("p",null,"We've included environment variables to customize the name each of these topics, if your company or organization has naming rules for your topics."),(0,i.kt)("h3",{id:"datahub-gms"},"datahub-gms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME"),": The name of the metadata change event topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME"),": The name of the metadata audit event topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME"),": The name of the failed metadata change event topic.")),(0,i.kt)("h3",{id:"datahub-mce-consumer"},"datahub-mce-consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_MCE_TOPIC_NAME"),": The name of the metadata change event topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_FMCE_TOPIC_NAME"),": The name of the failed metadata change event topic.")),(0,i.kt)("h3",{id:"datahub-mae-consumer"},"datahub-mae-consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_TOPIC_NAME"),": The name of the metadata audit event topic.")),(0,i.kt)("p",null,"Please ensure that these environment variables are set consistently throughout your ecosystem. DataHub has a few different applications running which communicate with Kafka (see above)."),(0,i.kt)("h2",{id:"configuring-consumer-group-id"},"Configuring Consumer Group Id"),(0,i.kt)("p",null,"Kafka Consumers in Spring are configured using Kafka listeners. By default, consumer group id is same as listener id."),(0,i.kt)("p",null,"We've included an environment variable to customize the consumer group id, if your company or organization has specific naming rules."),(0,i.kt)("h3",{id:"datahub-mce-consumer-and-datahub-mae-consumer"},"datahub-mce-consumer and datahub-mae-consumer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_CONSUMER_GROUP_ID"),": The name of the kafka consumer's group id.")),(0,i.kt)("h2",{id:"how-to-apply-configuration"},"How to apply configuration?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For quickstart, add these environment variables to the corresponding application's docker.env"),(0,i.kt)("li",{parentName:"ul"},"For helm charts, add these environment variables as extraEnvs to the corresponding application's chart.\nFor example, ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'extraEnvs:\n  - name: METADATA_CHANGE_EVENT_NAME\n    value: "MetadataChangeEvent"\n  - name: METADATA_AUDIT_EVENT_NAME\n    value: "MetadataAuditEvent"\n  - name: FAILED_METADATA_CHANGE_EVENT_NAME\n    value: "FailedMetadataChangeEvent"\n  - name: KAFKA_CONSUMER_GROUP_ID\n    value: "my-apps-mae-consumer"\n')),(0,i.kt)("h2",{id:"ssl"},"SSL"),(0,i.kt)("h3",{id:"kafka"},"Kafka"),(0,i.kt)("p",null,"We are using the Spring Boot framework to start our apps, including setting up Kafka. You can\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config-relaxed-binding-from-environment-variables"},"use environment variables to set system properties"),",\nincluding ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Kafka properties"),".\nFrom there you can set your SSL configuration for Kafka."),(0,i.kt)("h3",{id:"schema-registry"},"Schema Registry"),(0,i.kt)("p",null,"If Schema Registry is configured to use security (SSL), then you also need to set additional values."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job"},"MCE")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE")," consumers can set\ndefault Spring Kafka environment values, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/what/gms"},"GMS")," can set the following environment variables that will be passed as properties when creating the Schema Registry\nClient. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note")," In the logs you might see something like\n",(0,i.kt)("inlineCode",{parentName:"p"},"The configuration 'kafkastore.ssl.truststore.password' was supplied but isn't a known config.")," The configuration is\nnot a configuration required for the producer. These WARN message can be safely ignored. Each of Datahub services are\npassed a full set of configuration but may not require all the configurations that are passed to them. These warn\nmessages indicate that the service was passed a configuration that is not relevant to it and can be safely ignored.")))}m.isMDXComponent=!0}}]);