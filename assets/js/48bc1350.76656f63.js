"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7365],{5858:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(6687);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2886:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(6687),r=t(4923);const i="tabItem_EP2U";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},406:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(6428),r=t(6687),i=t(4923),l=t(3634),o=t(6844),s=t(3667),p=t(3107);const u="tabList_jxcF",d="tabItem_Lqs7";function c(e){var n,t,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,k=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(n=null!=m?m:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,j=(0,r.useState)(N),E=j[0],x=j[1],T=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=w[k];null!=S&&S!==E&&v.some((function(e){return e.value===S}))&&x(S)}var M=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==E&&(O(n),x(a),null!=k&&C(k,String(a)))},P=function(e){var n,t=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;t=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var i,l=T.indexOf(e.currentTarget)-1;t=null!=(i=T[l])?i:T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:P,onClick:M},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function m(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},4251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var a=t(6428),r=t(8920),i=(t(6687),t(5858)),l=t(406),o=t(2886),s=["components"],p={title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},u=void 0,d={unversionedId:"add-ons/backend/middleware",id:"add-ons/backend/middleware",title:"\ud83d\udee0 Middleware",description:"Configurations service station",source:"@site/docs/add-ons/backend/middleware.md",sourceDirName:"add-ons/backend",slug:"/add-ons/backend/middleware",permalink:"/add-ons/backend/middleware",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/backend/middleware.md",tags:[],version:"current",lastUpdatedBy:"Michel Murabito",sidebarPosition:10,frontMatter:{title:"\ud83d\udee0 Middleware",description:"Configurations service station",sidebar_label:"\ud83d\udee0 Middleware",sidebar_position:10},sidebar:"add-ons",previous:{title:"Backend solutions",permalink:"/add-ons/backend/"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Serving from file system",id:"serving-from-file-system",level:3},{value:"Configurations parsing",id:"configurations-parsing",level:2},{value:"ACL application",id:"acl-application",level:3},{value:"Example",id:"example",level:4},{value:"References resolution",id:"references-resolution",level:3},{value:"Example",id:"example-1",level:4},{value:"SDK",id:"sdk",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>evaluateAcl(json, userGroups, userPermissions)</code>",id:"evaluateacljson-usergroups-userpermissions",level:4},{value:"<code>resolveReferences(json)</code>",id:"resolvereferencesjson",level:4}],f={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Middleware")," is a backend middleware responsible for serving ",(0,i.kt)("micro-lc",null)," configuration files, applying\nsome useful ",(0,i.kt)("a",{parentName:"p",href:"#configurations-parsing"},"parsing logic")," before returning their content. This logic is also distributed\nthrough an ",(0,i.kt)("a",{parentName:"p",href:"#sdk"},"SDK")," to ease the process of building custom configurations serves."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Middleware is available as a Docker image on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/middleware"},"Dockerhub"),"."),(0,i.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Middleware it built using Mia-Platform's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib"},"custom-plugin-lib"),", hence it\nneeds the environment variables outlined in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mia-platform/custom-plugin-lib#environment-variables-configuration"},"library documentation"),"."),(0,i.kt)("p",null,"On top of those, Middleware accepts the following environment variables:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"RESOURCES_DIRECTORY_PATH")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"Absolute path of the ",(0,i.kt)("a",{parentName:"td",href:"#serve-from-file-system"},"directory")," containing resources to be served")))),(0,i.kt)("h3",{id:"serving-from-file-system"},"Serving from file system"),(0,i.kt)("p",null,"Configuration files are loaded from file system. In particular, Middleware searches in the directory specified with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RESOURCES_DIRECTORY_PATH")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," for JSON (",(0,i.kt)("inlineCode",{parentName:"p"},".json"),") and YAML (",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".yml"),")\nfiles (even in subdirectories) and exposes a route for each of them."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Since routes are created at service startup, adding or removing files will ",(0,i.kt)("strong",{parentName:"p"},"not change the exposes routes")," until the\nservice is restarted."),(0,i.kt)("p",{parentName:"admonition"},"However, since Middleware reloads a file each time its corresponding route is called, any change to the content of a file\n",(0,i.kt)("strong",{parentName:"p"},"will be immediately reflected")," without need of restarting the service.")),(0,i.kt)("p",null,"For example, given a directory with the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 orders-config.yaml\n\u2514\u2500\u2500 user-pages\n    \u251c\u2500\u2500 customers-config.yml\n    \u2514\u2500\u2500 admin-config.json\n")),(0,i.kt)("p",null,"Middleware will expose the following routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"GET - /config.json\nGET - /orders-config.yaml\nGET - /user-pages/customers-config.yml\nGET - /user-pages/admin-config.json\n")),(0,i.kt)("p",null,"JSON files will be returned with ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header set to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),", while YAML files will have\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header set to ",(0,i.kt)("inlineCode",{parentName:"p"},"text/yaml"),"."),(0,i.kt)("h2",{id:"configurations-parsing"},"Configurations parsing"),(0,i.kt)("p",null,"Before returning a request file, Middleware applies some parsing logics to its content."),(0,i.kt)("h3",{id:"acl-application"},"ACL application"),(0,i.kt)("p",null,"Middleware allows you to implement ",(0,i.kt)("strong",{parentName:"p"},"access control limit")," on served files, removing sections of configurations based on\ncertain properties of the caller. Namely, Middleware considers caller's ",(0,i.kt)("strong",{parentName:"p"},"groups")," and ",(0,i.kt)("strong",{parentName:"p"},"permissions"),"."),(0,i.kt)("p",null,"Caller's ",(0,i.kt)("strong",{parentName:"p"},"groups")," are extracted from request headers, particularly from the header the key of which is specified through\n",(0,i.kt)("inlineCode",{parentName:"p"},"GROUPS_HEADER_KEY")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable"),". The value of the header should be a comma-separated\nlist of groups (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'"admin,user"'),")."),(0,i.kt)("p",null,"Caller's ",(0,i.kt)("strong",{parentName:"p"},"permissions")," are extracted from request headers too. Middleware takes the header the key of which is specified\nthrough ",(0,i.kt)("inlineCode",{parentName:"p"},"USER_PROPERTIES_HEADER_KEY")," ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variable")," and expects a stringified JSON\nobject containing a comma-separated list of permissions under the key ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},'"{\\"permissions\\":"api.users.get,api.users.post"}"'),")."),(0,i.kt)("p",null,"ACL expressions can be specified anywhere in configuration using the special key ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," having as value a\n",(0,i.kt)("strong",{parentName:"p"},"stringified boolean expression")," based on caller's groups and permissions (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"groups.admin || permissions.api.users.get"),")."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use any combination of groups, permissions and JavaScript operators in you ACL expressions."),(0,i.kt)("p",{parentName:"admonition"},"For example, the following expressions are all valid:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"groups.admin && permissions.api.users.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!groups.developer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"permissions.api.users.get || permissions.api.users.post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(groups.admin && !permissions.api.users.post) || permissions.api.users.count.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(groups.admin === true && permissions.api.users.post === true)")))),(0,i.kt)("p",null,"Middleware evaluates each ACL expression against caller's properties and, if the expression results in a ",(0,i.kt)("inlineCode",{parentName:"p"},"falsy value"),", it\nremoves from the configuration the ",(0,i.kt)("strong",{parentName:"p"},"whole object")," which the expression is a property of. It then proceeds to remove\nany ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," key left over to not leak server-side logic into the client."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider the following configuration file served under ",(0,i.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "aclExpression": "groups.admin",\n      "adminName": "John Doe"\n    },\n    "content": [\n      {\n        // highlight-next-line\n        "aclExpression": "groups.superadmin || permissions.api.users.get",\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The response of the following request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json' \\\n  -H 'user-groups: user' \\\n  -H 'user-properties: { \"permissions\": \"api.users.get\" }'\n")),(0,i.kt)("p",null,"will be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "tag": "div",\n    "content": [\n      {\n        "tag": "button"\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"references-resolution"},"References resolution"),(0,i.kt)("p",null,"In order to avoid writing repeating values multiple times in your configurations, Middleware supports references resolutions\nfollowing ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/structuring.html#ref"},"JSON schema specification"),". In\nparticular, if you need to repeat the same value in various places of your configuration, you can ",(0,i.kt)("strong",{parentName:"p"},"define it once")," in\nthe dedicated top-level key ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions"),", and then ",(0,i.kt)("strong",{parentName:"p"},"references it")," wherever you like using the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"$ref")," (e.g.,\n",(0,i.kt)("inlineCode",{parentName:"p"},'{ "dataSchema": { "$ref": "#/definitions/dataSchema" }}'),")."),(0,i.kt)("p",null,"Middleware will resolve references in files and will remove the key ",(0,i.kt)("inlineCode",{parentName:"p"},"definitions")," (if any) before serving them. Keep in mind\nthat Middleware ",(0,i.kt)("strong",{parentName:"p"},"will throw")," if some references cannot be resolved."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Let's consider the following configuration file served under ",(0,i.kt)("inlineCode",{parentName:"p"},"GET - /middleware/config.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      "clientKey": {\n        // highlight-next-line\n        "$ref": "#/definitions/clientKey"\n      }\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          "clientKey": {\n            // highlight-next-line\n            "$ref": "#/definitions/clientKey"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"The response of the following request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'https://*********/middleware/config.json'\n")),(0,i.kt)("p",null,"will be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "clientKey": "some-client-key"\n  },\n  "content": {\n    "tag": "div",\n    "properties": {\n      // highlight-next-line\n      "clientKey": "some-client-key"\n    },\n    "content": [\n      {\n        "tag": "button",\n        "properties": {\n          // highlight-next-line\n          "clientKey": "some-client-key"\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"sdk"},"SDK"),(0,i.kt)("p",null,"The logic under ",(0,i.kt)("a",{parentName:"p",href:"#acl-application"},"ACL application")," and ",(0,i.kt)("a",{parentName:"p",href:"#references-resolution"},"references resolution")," is conveniently\nshipped in a standalone SDK to ease the implementation of alternative backend solutions."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,"You can install the SDK from NPM"),(0,i.kt)(l.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @micro-lc/middleware/sdk\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @micro-lc/middleware/sdk\n")))),(0,i.kt)("p",null,"and import it in your files"),(0,i.kt)(l.Z,{groupId:"module",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"common-js",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const middlewareSdk = require('@micro-lc/middleware/sdk')\n"))),(0,i.kt)(o.Z,{value:"modules",label:"ECMAScript modules",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as middlewareSdk from '@micro-lc/middleware/sdk'\n")))),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("h4",{id:"evaluateacljson-usergroups-userpermissions"},(0,i.kt)("inlineCode",{parentName:"h4"},"evaluateAcl(json, userGroups, userPermissions)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = resolveReferences(json, userGroups, userPermissions)\n")),(0,i.kt)("p",null,"This method ",(0,i.kt)("a",{parentName:"p",href:"#acl-application"},"evaluates")," ",(0,i.kt)("inlineCode",{parentName:"p"},"aclExpression")," keys in input JSON. It does not modify the input object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,i.kt)("br",null),"Input JSON with ACL rules to be evaluated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userGroups: string[]"),(0,i.kt)("br",null),"List of caller's groups."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userPermissions: string[]"),(0,i.kt)("br",null),"List of caller's permissions.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,i.kt)("br",null),"JSON with ACL rules evaluated.")),(0,i.kt)("h4",{id:"resolvereferencesjson"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveReferences(json)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await resolveReferences(json)\n")),(0,i.kt)("p",null,"This method ",(0,i.kt)("a",{parentName:"p",href:"#references-resolution"},"resolves")," the references in a JSON object. It does not modify the input object."),(0,i.kt)("p",null,"The method ",(0,i.kt)("strong",{parentName:"p"},"throws")," if a reference cannot be found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json: string | number | boolean | object | unknown[] | null"),(0,i.kt)("br",null),"Input JSON with references to be resolved.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Promise<string | number | boolean | object | unknown[] | null>"),(0,i.kt)("br",null),"JSON with references resolved.")))}k.isMDXComponent=!0}}]);