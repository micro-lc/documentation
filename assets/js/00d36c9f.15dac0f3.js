"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2444],{55858:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(76687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(79501),o=n(42624),a=(n(76687),n(55858)),r=["components"],l={id:"setup",title:"Setup",sidebar_label:"Setup"},c=void 0,p={unversionedId:"docs/setup",id:"version-1.0.0/docs/setup",title:"Setup",description:"It is possible to integrate micro-lc inside the Mia-Platform Console with almost zero configurations.",source:"@site/versioned_docs/version-1.0.0/docs/setup.md",sourceDirName:"docs",slug:"/docs/setup",permalink:"/1.0.0/docs/setup",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/setup.md",tags:[],version:"1.0.0",lastUpdatedBy:"Umberto Toniolo",frontMatter:{id:"setup",title:"Setup",sidebar_label:"Setup"},sidebar:"docs",previous:{title:"SEO integration",permalink:"/1.0.0/docs/seo"}},s={},d=[{value:"Integration requirements",id:"integration-requirements",level:2},{value:"Integration steps",id:"integration-steps",level:2},{value:"1. Microservice creation for <code>fe-container</code>",id:"1-microservice-creation-for-fe-container",level:3},{value:"2. Microservice creation for <code>be-config</code>",id:"2-microservice-creation-for-be-config",level:3},{value:"3. Endpoint configuration for <code>fe-container</code>",id:"3-endpoint-configuration-for-fe-container",level:3},{value:"4. Endpoint configuration for <code>be-config</code>",id:"4-endpoint-configuration-for-be-config",level:3},{value:"Result",id:"result",level:2}],m={toc:d},u="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,r);return(0,a.kt)(u,(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is possible to integrate ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-lc")," inside the Mia-Platform Console with almost zero configurations."),(0,a.kt)("h2",{id:"integration-requirements"},"Integration requirements"),(0,a.kt)("p",null,"Follow the requirements below to integrate this functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"access to the Console into the desired project;"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"/1.0.0/docs/authentication"},"authentication configuration")," ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," and the ",(0,a.kt)("a",{parentName:"li",href:"/1.0.0/docs/core_configuration"},"core configuration")," ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON")," to expose.")),(0,a.kt)("h2",{id:"integration-steps"},"Integration steps"),(0,a.kt)("p",null,"Following steps must be made on Console, and will deploy a ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-lc")," configured instance."),(0,a.kt)("h3",{id:"1-microservice-creation-for-fe-container"},"1. Microservice creation for ",(0,a.kt)("inlineCode",{parentName:"h3"},"fe-container")),(0,a.kt)("p",null,"Here is the process to create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"fe-container"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microservices")," section;"),(0,a.kt)("li",{parentName:"ol"},"Create a new microservice using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microlc frontend")," plugin (available in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microfrontend")," section of the marketplace);"),(0,a.kt)("li",{parentName:"ol"},"Configure the microservice with a custom name and description;"),(0,a.kt)("li",{parentName:"ol"},"Complete the creation to deploy an instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"fe-container"),".")),(0,a.kt)("h3",{id:"2-microservice-creation-for-be-config"},"2. Microservice creation for ",(0,a.kt)("inlineCode",{parentName:"h3"},"be-config")),(0,a.kt)("p",null,"Here is the process to create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"be-config"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microservices")," section;"),(0,a.kt)("li",{parentName:"ol"},"Create a new microservice using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microlc backend")," plugin (available in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Microfrontend")," section of the marketplace);"),(0,a.kt)("li",{parentName:"ol"},"Configure the microservice with a custom name and description;"),(0,a.kt)("li",{parentName:"ol"},"Complete the creation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"be-container")," instance;"),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," section, edit the ",(0,a.kt)("a",{parentName:"li",href:"/1.0.0/docs/core_configuration#example"},(0,a.kt)("inlineCode",{parentName:"a"},"configuration.json"))," and the ",(0,a.kt)("a",{parentName:"li",href:"/1.0.0/docs/authentication#example"},(0,a.kt)("inlineCode",{parentName:"a"},"authentication.json")),",\naccording to your needs")),(0,a.kt)("p",null,"At the end of these 2 steps, the situation should be similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microservices configured",src:n(29511).Z,width:"1882",height:"737"})),(0,a.kt)("h3",{id:"3-endpoint-configuration-for-fe-container"},"3. Endpoint configuration for ",(0,a.kt)("inlineCode",{parentName:"h3"},"fe-container")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new endpoint;"),(0,a.kt)("li",{parentName:"ol"},"Define the ",(0,a.kt)("inlineCode",{parentName:"li"},"Base path")," where you want to expose ",(0,a.kt)("inlineCode",{parentName:"li"},"fe-container")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"/microlc"),");"),(0,a.kt)("li",{parentName:"ol"},"As type, use ",(0,a.kt)("inlineCode",{parentName:"li"},"Microservice"),";"),(0,a.kt)("li",{parentName:"ol"},"Select the microservice name used for ",(0,a.kt)("inlineCode",{parentName:"li"},"fe-container"),";"),(0,a.kt)("li",{parentName:"ol"},"Complete the creation.")),(0,a.kt)("p",null,"After that, the situation should be similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Endpoint configured",src:n(34900).Z,width:"1881",height:"726"})),(0,a.kt)("h3",{id:"4-endpoint-configuration-for-be-config"},"4. Endpoint configuration for ",(0,a.kt)("inlineCode",{parentName:"h3"},"be-config")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new endpoint;"),(0,a.kt)("li",{parentName:"ol"},"As ",(0,a.kt)("inlineCode",{parentName:"li"},"Base path"),", use ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/v1/microlc"),";",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The endpoints exposed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"be-container")," microservice must always be reachable at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/..."),":\nas in the microservice we defined the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVICE_PREFIX=/"),", here ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc")," is enough."))),(0,a.kt)("li",{parentName:"ol"},"As type, use ",(0,a.kt)("inlineCode",{parentName:"li"},"Microservice"),";"),(0,a.kt)("li",{parentName:"ol"},"Select the microservice name used for ",(0,a.kt)("inlineCode",{parentName:"li"},"be-container"),";"),(0,a.kt)("li",{parentName:"ol"},"Complete the creation.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"From the outside, the endpoints ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/configuration")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/authentication")," exposed by this microservice must be always reachable."),(0,a.kt)("p",{parentName:"admonition"},"So, if you set ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Base path"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVICE_PREFIX")," environment variable must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc"),".",(0,a.kt)("br",{parentName:"p"}),"\n","While, if you set ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Base path"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVICE_PREFIX")," environment variable must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/microlc"),";",(0,a.kt)("br",{parentName:"p"}),"\n","and so on...")),(0,a.kt)("p",null,"After that, the situation should be similar to the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Endpoint configured",src:n(90522).Z,width:"1889",height:"761"})),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"At the end of this, you should have a complete instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-lc")," up and running,\nexposed at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Base path")," provided for the ",(0,a.kt)("a",{parentName:"p",href:"/1.0.0/docs/setup#3-endpoint-configuration-for-fe-container"},"fe-container"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your-host.com/microlc"),"). "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Endpoint configured",src:n(16668).Z,width:"1888",height:"892"})))}f.isMDXComponent=!0},29511:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/microlc_ms_setup-496123d513c2c04e7913b9af763907f0.png"},90522:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/microlc_setup_endpoint_be-71a72018243a4ba2bc5c1d673fd9e267.png"},34900:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/microlc_setup_endpoint_fe-05c3231ba47a773e02edbf2f8f520748.png"},16668:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/microlc_up_running-e83f3e52ddd100e89febb290702f40fe.png"}}]);