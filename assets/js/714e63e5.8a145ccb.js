(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9923],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1883:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(2122),i=a(9756),o=(a(7294),a(4137)),s=["components"],r={title:"Tags",sidebar_label:"Tags",slug:"/rfc/active/tags",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/tags/README.md"},l=void 0,c={unversionedId:"docs/rfc/active/tags/README",id:"docs/rfc/active/tags/README",isDocsHomePage:!1,title:"Tags",description:"- Start Date: 2021-02-17",source:"@site/genDocs/docs/rfc/active/tags/README.md",sourceDirName:"docs/rfc/active/tags",slug:"/rfc/active/tags",permalink:"/docs/rfc/active/tags",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/tags/README.md",version:"current",frontMatter:{title:"Tags",sidebar_label:"Tags",slug:"/rfc/active/tags",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/tags/README.md"},sidebar:"overviewSidebar",previous:{title:"RBAC: Fine-grained Access Controls in DataHub",permalink:"/docs/rfc/active/access-control/access-control"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Extensibility",id:"extensibility",children:[]}]},{value:"Non-Requirements",id:"non-requirements",children:[]},{value:"Detailed design",id:"detailed-design",children:[{value:"<code>Tag</code> entity",id:"tag-entity",children:[]},{value:"<code>TagAttachment</code>",id:"tagattachment",children:[]},{value:"<code>Tags</code> container",id:"tags-container",children:[]}]},{value:"How we teach this",id:"how-we-teach-this",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[]},{value:"Future Work",id:"future-work",children:[]},{value:"Unresolved questions",id:"unresolved-questions",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start Date: 2021-02-17"),(0,o.kt)("li",{parentName:"ul"},"RFC PR: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/2112"},"https://github.com/linkedin/datahub/pull/2112")),(0,o.kt)("li",{parentName:"ul"},"Discussion Issue: (GitHub issue this was discussed in before the RFC, if any)"),(0,o.kt)("li",{parentName:"ul"},"Implementation PR(s): (leave this empty)")),(0,o.kt)("h1",{id:"tags"},"Tags"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"We suggest a generic, global tagging solution for Datahub. As the solution is quite generic and flexible, it can also\nhopefully serve as an stepping stone for new, cool features in the future."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Currently some entities, such as Datasets, can be tagged using strings, but unfortunately this solution is quite\nlimited."),(0,o.kt)("p",null,"A general tag implementation will allow us to define and attach a new and simple type of metadata to all type of\nentities. As the tags would be defined globally, tagging multiple objects with the same tag will give us the possibility\nto define and search based on a new kind of relationship, for example which datasets and ML Models that are tagged to\ninclude PII data. This allows for describing relationships between object that would otherwise not have a direct lineage\nrelationship. Moreover, tags would lower that bar to add simple metadata to any object in the Datahub instance and open\nthe door to crowd-sourcing metadata. Remembering that tags themselves are entities, it would also be possible to tag\ntags, enabling a hierarchy of sorts."),(0,o.kt)("p",null,"The solution is meant to be quite generic and flexible, and we're not trying to be too opinionated about how a user\nshould use the feature. We hope that this initial generic solution can serve as a stepping stone for cool futures in the\nfuture."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ability to associate tags with any type of entity, even other tags!"),(0,o.kt)("li",{parentName:"ul"},"Ability to tag the same entity with multiple tags."),(0,o.kt)("li",{parentName:"ul"},"Ability to tag multiple objects with the same tag instance."),(0,o.kt)("li",{parentName:"ul"},"To the point above, ability to make easy tag-based searches later on."),(0,o.kt)("li",{parentName:"ul"},"Metadata on tags is TBD")),(0,o.kt)("h3",{id:"extensibility"},"Extensibility"),(0,o.kt)("p",null,"The normal new-entity-onboarding work is obviously required."),(0,o.kt)("p",null,"Hopefully this can serve as a stepping stone to work on special cases such as the tag-based privacy tagging mentioned in\nthe roadmap."),(0,o.kt)("h2",{id:"non-requirements"},"Non-Requirements"),(0,o.kt)("p",null,"Let's leave the UI work required for this to another time."),(0,o.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,o.kt)("p",null,"We want to introduce some new under ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub/metadata-models/src/main/pegasus/com/linkedin/common/"),"."),(0,o.kt)("h3",{id:"tag-entity"},(0,o.kt)("inlineCode",{parentName:"h3"},"Tag")," entity"),(0,o.kt)("p",null,"First we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"TagMetadata")," entity, which defines the actual tag-object."),(0,o.kt)("p",null,"The edit property defines the edit rights of the tag, as some tags (like sensitivity tags) should be read-only for a\nmajority of users"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * Tag information\n */\nrecord TagMetadata {\n   /**\n   * Tag URN, e.g. urn:li:tag:<name>\n   */\n   urn: TagUrn\n\n   /**\n   * Tag value.\n   */\n   value: string\n\n   /**\n   * Optional tag description\n   */\n   description: optional string\n\n   /**\n   * Audit stamp associated with creation of this tag\n   */\n   createStamp: AuditStamp\n}\n")),(0,o.kt)("h3",{id:"tagattachment"},(0,o.kt)("inlineCode",{parentName:"h3"},"TagAttachment")),(0,o.kt)("p",null,"We define a ",(0,o.kt)("inlineCode",{parentName:"p"},"TagAttachment"),"-model, which describes the application of a tag to a entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/**\n * Tag information\n */\nrecord TagAttachment {\n\n  /**\n   * Tag in question\n   */\n  tag: TagUrn\n\n  /**\n   * Who has edit rights to this employment.\n   * WIP, pending access-control support in Datahub.\n   * Relevant for privacy tags at least.\n   * We might also want to add view rights?\n   */\n  edit: union[None, any, role-urn]\n\n   /**\n   * Audit stamp associated with employment of this tag to this entity\n   */\n   attachmentStamp: AuditStamp\n}\n")),(0,o.kt)("h3",{id:"tags-container"},(0,o.kt)("inlineCode",{parentName:"h3"},"Tags")," container"),(0,o.kt)("p",null,"Then we define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tags"),"-aspect, which is used as a container for tag employments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.common\n\n/**\n * Tags information\n */\nrecord Tags {\n\n   /**\n   * List of tag employments\n   */\n   elements: array[TagAttachment] = [ ]\n}\n")),(0,o.kt)("p",null,"This can easily be taken into use with wall entities that we want to be able to use tags, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets"),". As we see a\nlot of potential in tagging individual dataset fields as well, we can either add a reference to a Tags-object in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaField")," object, or alternative create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"DatasetFieldTags"),", similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"DatasetFieldMapping"),"."),(0,o.kt)("h2",{id:"how-we-teach-this"},"How we teach this"),(0,o.kt)("p",null,"We should create/update user guides to educate users for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Suggestions on how to use tags: low threshold metadata-addition, and the possibility of doing new types of searches")),(0,o.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("p",null,"This is definitely more complex than just adding strings to an array."),(0,o.kt)("h2",{id:"alternatives"},"Alternatives"),(0,o.kt)("p",null,"An array of string is a simple solution but does allow for the same functionality as suggested here."),(0,o.kt)("p",null,"Another alternative would be simplify the models by removing some of the metadata in the ",(0,o.kt)("inlineCode",{parentName:"p"},"TagMetadata")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"TagAttachment")," entities, such as the the edit/view permission field, the audit stamps, and the descriptions."),(0,o.kt)("p",null,'Apache Atlas uses a similar approach. The require you to create a Tag instance before it can be associated with an\n"asset", and the attachment is done using a dropdown list. The tags can also have attributes and a description. See\n',(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.5.3/bk_data-governance/content/ch_working_with_atlas_tags.html"},"here"),"\nfor an example. The tags are a central piece in the UI and readably searchable, as easily as datasets."),(0,o.kt)("p",null,"Atlas also has concept very closely related to tags, called ",(0,o.kt)("em",{parentName:"p"},"classification"),". Classifications are similar to tags in\nthat they need to be created separately, can have attributes (but no description?) and are attached to assets is done\nusing a dropdown list. Classifications have the added functionality of propagation, which means that they are\nautomatically applied to downstream assets, unless specifically set to not do so. Any change to a classification (say an\nattribute change) also flows downstream, and in downstream assets you're able to see from where the classification\npropagated from. See\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/HDPDocuments/HDP3/HDP-3.1.5/using-atlas/content/propagate_classifications_to_derived_entities.html"},"here"),"\nfor an example."),(0,o.kt)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),(0,o.kt)("p",null,"Using the functionality is optional and does not break other functionality as is. The solution is generic enough that\nthe users can easily take into use. It can be take into use as any other entity and aspect."),(0,o.kt)("h2",{id:"future-work"},"Future Work"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add ",(0,o.kt)("inlineCode",{parentName:"li"},"Tags")," to aspects for entities."),(0,o.kt)("li",{parentName:"ul"},"Implement relationship builders as needed."),(0,o.kt)("li",{parentName:"ul"},"The implementation of and need for access control to tags is an open question"),(0,o.kt)("li",{parentName:"ul"},"As this is first and foremost a tool for discovery, the UI work is extensible:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Creating tags in a way that makes duplication and spelling mistakes difficult."),(0,o.kt)("li",{parentName:"ul"},"Attaching tags to entities: autocomplete, dropdown, etc."),(0,o.kt)("li",{parentName:"ul"},"Visualizing existing tags, and which are most popular?"))),(0,o.kt)("li",{parentName:"ul"},'Explore the idea about a special "classification" type, that propagates downstream, as in Atlas.')),(0,o.kt)("h2",{id:"unresolved-questions"},"Unresolved questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do we want to map dataset fields to tags?"),(0,o.kt)("li",{parentName:"ul"},"Do we want to implement edit/view rights?")))}p.isMDXComponent=!0}}]);