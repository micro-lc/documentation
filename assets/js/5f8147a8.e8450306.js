"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9764],{5858:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2886:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(6687),o=n(4923);const i="tabItem_EP2U";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},406:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(6428),o=n(6687),i=n(4923),r=n(3634),l=n(6844),c=n(3667),s=n(3107);const p="tabList_jxcF",m="tabItem_Lqs7";function u(e){var t,n,r=e.lazy,u=e.block,d=e.defaultValue,f=e.values,g=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,C=(0,o.useState)(y),x=C[0],j=C[1],I=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var _=w[g];null!=_&&_!==x&&v.some((function(e){return e.value===_}))&&j(_)}var E=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==x&&(O(t),j(a),null!=g&&T(g,String(a)))},M=function(e){var t,n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":var a,o=I.indexOf(e.currentTarget)+1;n=null!=(a=I[o])?a:I[0];break;case"ArrowLeft":var i,r=I.indexOf(e.currentTarget)-1;n=null!=(i=I[r])?i:I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:M,onClick:E},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},9074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=n(6428),o=n(8920),i=(n(6687),n(5858)),r=n(406),l=n(2886),c=["components"],s={title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",sidebar_label:"Migrating from V1",sidebar_position:60},p=void 0,m={unversionedId:"docs/migrating-from-v1",id:"docs/migrating-from-v1",title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",source:"@site/docs/docs/migrating-from-v1.md",sourceDirName:"docs",slug:"/docs/migrating-from-v1",permalink:"/docs/migrating-from-v1",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/migrating-from-v1.md",tags:[],version:"current",lastUpdatedBy:"Michel Murabito",sidebarPosition:60,frontMatter:{title:"Migrating from V1",description:"Migrate from version 1 to version 2 of micro-lc",sidebar_label:"Migrating from V1",sidebar_position:60},sidebar:"docs",previous:{title:"Reuse third party libraries",permalink:"/docs/guides/reuse-third-party-libraries"}},u={},d=[{value:"Main differences",id:"main-differences",level:2},{value:"Migration process",id:"migration-process",level:2},{value:"<code>authentication.json</code>",id:"authenticationjson",level:4},{value:"<code>configuration.json</code>",id:"configurationjson",level:4},{value:"Element composer configurations",id:"element-composer-configurations",level:4},{value:"Automated migration",id:"automated-migration",level:2},{value:"Config Mode",id:"config-mode",level:3},{value:"<code>dir (-d)</code>",id:"dir--d",level:4},{value:"<code>elementComposerUrlRegex (-e)</code>",id:"elementcomposerurlregex--e",level:4},{value:"Compose Mode",id:"compose-mode",level:3},{value:"<code>dir (-d)</code>",id:"dir--d-1",level:4}],f={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This doc guides you through migrating an existing ",(0,i.kt)("micro-lc",null)," 1 application to ",(0,i.kt)("micro-lc",null)," 2. We try\nto make this as easy as possible, and provide a migration CLI."),(0,i.kt)("h2",{id:"main-differences"},"Main differences"),(0,i.kt)("p",null,"<",(0,i.kt)("micro-lc",null)," 1 was a React application built as a ",(0,i.kt)("strong",{parentName:"p"},"vertical micro-frontend orchestrator")," (i.e., each\nmicro-frontend corresponded to a specific route), which leverages another React application (the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc-element-composer"},"element composer"),") to implement ",(0,i.kt)("strong",{parentName:"p"},"horizontal micro-frontend\norchestration")," (i.e., page composition). Moreover, ",(0,i.kt)("micro-lc",null)," 1 enforced a pre-defined and ever-present\ntop-bar/sidebar navigation layout."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," 2, rebuilt from the ground up, is a ",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component"},"web component")," that\nincludes both ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/routing"},"vertical")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"horizontal")," with a much lower footprint\nin terms of bundle size and loading speed. Moreover, ",(0,i.kt)("micro-lc",null)," 2 leaves complete flexibility when it comes\nto building ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layouts"),", and implements some really useful features like\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/communication"},"internal communication")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/reuse-third-party-libraries"},"dependencies sharing"),"."),(0,i.kt)("h2",{id:"migration-process"},"Migration process"),(0,i.kt)("p",null,"To obtain a fully functional ",(0,i.kt)("micro-lc",null)," 2 application, you firstly need to update ",(0,i.kt)("micro-lc",null),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/microlc/micro-lc"},"Docker image")," version. Remember that the container can now\n",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#deploy-docker-container"},"be tuned")," to cover some specific need."),(0,i.kt)("p",null,"Once the image has been updated, you need to adapt the configuration files to the new structure. Keep in mind that a\n",(0,i.kt)("a",{parentName:"p",href:"#automated-migration"},"CLI")," is provided to automate this migration, and that you can consult the new configuration\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/micro-lc/micro-lc/v2/main/packages/interfaces/schemas/v2/config.schema.json"},"JSON schema"),"\nfor reference."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We provide a ",(0,i.kt)("a",{parentName:"p",href:"/add-ons/backend/middleware"},"backend service")," to serve configurations with ACL and references resolution\nutilities.")),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," 1 needed two configuration files to define its registered micro-frontend, theming options, and\nlayout preferences. In addition to them, it needed a configuration file for each plugin implementing the element\ncomposer for dynamic page composition."),(0,i.kt)("h4",{id:"authenticationjson"},(0,i.kt)("inlineCode",{parentName:"h4"},"authentication.json")),(0,i.kt)("p",null,"This file contained instructions on how to retrieve current user information and handle logout operations. This file\nis not needed in ",(0,i.kt)("micro-lc",null)," 1 as its content can be moved in\n",(0,i.kt)("a",{parentName:"p",href:"/add-ons/components/mlc-layout#usermenu"},(0,i.kt)("inlineCode",{parentName:"a"},"userMenu"))," key of default layout configuration."),(0,i.kt)("h4",{id:"configurationjson"},(0,i.kt)("inlineCode",{parentName:"h4"},"configuration.json")),(0,i.kt)("p",null,"This file contained the core configuration of the application, namely its plugins, theming, and addons. Its content can\nbe transferred in ",(0,i.kt)("micro-lc",null)," 2 ",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#configuration"},"configuration file"),". The main\ndifferences can be roughly outlined as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 plugins became ",(0,i.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"application")," definitions and\n\u2013 possibly \u2013 layout ",(0,i.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#menuitem"},"menu items"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 internal plugins became ",(0,i.kt)("a",{parentName:"li",href:"/api/micro-lc-web-component#applications"},"application"),"\ndefinitions, but do not appear on the layout."),(0,i.kt)("li",{parentName:"ul"},"initial loading animation must be ",(0,i.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-loading-animation"},"added")," on your ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 right menu can be inserted in default layout ",(0,i.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#slots"},"slot"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 theming configurations are spread in default layout\n",(0,i.kt)("a",{parentName:"li",href:"/add-ons/components/mlc-layout#properties-and-attributes"},"properties"),".")),(0,i.kt)("h4",{id:"element-composer-configurations"},"Element composer configurations"),(0,i.kt)("p",null,"While you can still use the element composer registering it as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcel")," (in which\ncase configuration files stays the same), ",(0,i.kt)("micro-lc",null)," 2 offers\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"composition functionalities")," out of the box."),(0,i.kt)("p",null,"To use them, just register the applications as ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose")," and tweak the configuration\nfiles accordingly. The main differences can be roughly outlined as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"custom elements sources are put together in ",(0,i.kt)("inlineCode",{parentName:"li"},"sources")," properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 ",(0,i.kt)("inlineCode",{parentName:"li"},"busDiscriminator")," property is converted into a named\n",(0,i.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose#eventbus"},(0,i.kt)("inlineCode",{parentName:"a"},"eventBus")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("micro-lc",null)," 1 rows and columns are converted into ",(0,i.kt)("inlineCode",{parentName:"li"},"<div>")," with appropriate styling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$ref")," property becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"definitions")," to align to JSON schema standard notation, and references in content changes from",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$ref": {\n    "referencesString": "bar"\n  },\n  "foo": {\n    "$ref": "referencesString"\n  }\n}\n')),"to",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "definitions": {\n    "referencesString": "bar"\n  },\n  "foo": {\n    "$ref": "#/definitions/referencesString"\n  }\n}\n')))),(0,i.kt)("h2",{id:"automated-migration"},"Automated migration"),(0,i.kt)("p",null,"The migration CLI can be used to automatically translate an application configurations from ",(0,i.kt)("micro-lc",null)," 1 to\n",(0,i.kt)("micro-lc",null)," 2."),(0,i.kt)(r.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware <args>\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware <args>\n")))),(0,i.kt)("p",null,"The CLI operates in two modes, ",(0,i.kt)("a",{parentName:"p",href:"#config-mode"},"config")," to translate old ",(0,i.kt)("inlineCode",{parentName:"p"},"authentication.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.json"),"\nfiles to the new configuration file, and ",(0,i.kt)("a",{parentName:"p",href:"#compose-mode"},"compose")," to translate old element composer configuration\nfiles to new ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose applications")," configurations."),(0,i.kt)("p",null,"The mode can be specified with flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-m (--mode)")," which can have value ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," (default) or ",(0,i.kt)("inlineCode",{parentName:"p"},"compose"),"."),(0,i.kt)("h3",{id:"config-mode"},"Config Mode"),(0,i.kt)("p",null,"To invoke the CLI in this mode, it has to receive ",(0,i.kt)("strong",{parentName:"p"},"exactly two args"),", namely the absolute or relative path to\n",(0,i.kt)("inlineCode",{parentName:"p"},"authentication.json")," file ",(0,i.kt)("strong",{parentName:"p"},"followed")," by the absolute or relative path to ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.json")," file."),(0,i.kt)(r.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware --mode config <path_to_authentication.json_file> <configuration.json_file>\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware --mode config <path_to_authentication.json_file> <configuration.json_file>\n")))),(0,i.kt)("p",null,"Available options are the following."),(0,i.kt)("h4",{id:"dir--d"},(0,i.kt)("inlineCode",{parentName:"h4"},"dir (-d)")),(0,i.kt)("div",{style:{paddingLeft:"1em"}},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("p",null,"Absolute or relative path of the output directory. The output file will be called ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json"),". If the specified\ndirectory does not exist, ",(0,i.kt)("strong",{parentName:"p"},"it will be created"),"."),(0,i.kt)("p",null,"If no output dir is specified, the resulting file ",(0,i.kt)("strong",{parentName:"p"},"will be printed in standard output"),".")),(0,i.kt)("h4",{id:"elementcomposerurlregex--e"},(0,i.kt)("inlineCode",{parentName:"h4"},"elementComposerUrlRegex (-e)")),(0,i.kt)("div",{style:{paddingLeft:"1em"}},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"RegExp"))),(0,i.kt)("p",null,"This option can be used to identify ",(0,i.kt)("micro-lc",null)," 1 plugins the uses the element composer and have to be\nconverted in ",(0,i.kt)("micro-lc",null)," 2 compose applications."),(0,i.kt)("p",null,"The regex specified with this option will be run against the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginUrl")," of each plugin with integration mode ",(0,i.kt)("inlineCode",{parentName:"p"},"qiankun"),".\nSo, for example, if you have a plugin lke this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "id": "my-element-composer-plugin",\n  "integrationMode": "qiankun",\n  "pluginRoute": "/foo",\n  // highlight-next-line\n  "pluginUrl": "/element-composer/"\n}\n')),(0,i.kt)("p",null,"and you want it to be transformed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"compose")," application, the cli invocation would be"),(0,i.kt)(r.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'npx @micro-lc/middleware --m config -e "/element-composer/" <path_to_authentication.json_file> <configuration.json_file>\n'))),(0,i.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'yarn dlx @micro-lc/middleware --m config -e "/element-composer/" <path_to_authentication.json_file> <configuration.json_file>\n'))))),(0,i.kt)("p",null,"For compatibility reasons, the config URL of ",(0,i.kt)("inlineCode",{parentName:"p"},"compose")," applications is set to\n",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/configuration/${oldPlugin.props.configurationName}.json"),". After the conversion, remember to change it\naccordingly to your specific setup. "),(0,i.kt)("h3",{id:"compose-mode"},"Compose Mode"),(0,i.kt)("p",null,"The CLI invoked in this mode can receive as many arguments as you want, each of them being a relative or absolute path\n(",(0,i.kt)("strong",{parentName:"p"},"glob syntax can be used"),") resolving to one or more files to be converted."),(0,i.kt)(r.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npx @micro-lc/middleware --mode compose <paths_to_files...>\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"yarn 2+",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn dlx @micro-lc/middleware --mode compose <paths_to_files...>\n")))),(0,i.kt)("p",null,"Available options are the following."),(0,i.kt)("h4",{id:"dir--d-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"dir (-d)")),(0,i.kt)("div",{style:{paddingLeft:"1em"}},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("p",null,"Absolute or relative path of the output directory. The output files will be called as the respective input. If the\nspecified directory does not exist, ",(0,i.kt)("strong",{parentName:"p"},"it will be created"),"."),(0,i.kt)("p",null,"If no output dir is specified, the resulting files ",(0,i.kt)("strong",{parentName:"p"},"will be printed in standard output"),".")))}g.isMDXComponent=!0}}]);