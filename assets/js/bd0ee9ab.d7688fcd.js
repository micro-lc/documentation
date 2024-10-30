"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var a=n(87462),r=n(63366),o=n(67294),i=n(3905),l=["components"],p={title:"\ud83d\uddbc microfrontend-loader",description:"Wrapper for Microfrontend Loader",sidebar_label:"\ud83d\uddbc microfrontend-loader",sidebar_position:5},d=void 0,c={unversionedId:"add-ons/components/microfrontend-loader",id:"add-ons/components/microfrontend-loader",title:"\ud83d\uddbc microfrontend-loader",description:"Wrapper for Microfrontend Loader",source:"@site/docs/add-ons/components/microfrontend-loader.md",sourceDirName:"add-ons/components",slug:"/add-ons/components/microfrontend-loader",permalink:"/add-ons/components/microfrontend-loader",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/components/microfrontend-loader.md",tags:[],version:"current",lastUpdatedBy:"Edoardo Pessina",sidebarPosition:5,frontMatter:{title:"\ud83d\uddbc microfrontend-loader",description:"Wrapper for Microfrontend Loader",sidebar_label:"\ud83d\uddbc microfrontend-loader",sidebar_position:5},sidebar:"add-ons",previous:{title:"Components",permalink:"/add-ons/components/"},next:{title:"\ud83d\uddbc mlc-layout",permalink:"/add-ons/components/mlc-layout"}},m={},s=[{value:"Usage",id:"usage",level:2},{value:"Properties &amp; attributes",id:"properties-and-attributes",level:2},{value:"Shared",id:"shared",level:4},{value:"when <code>&quot;integrationMode&quot;: &quot;iframe&quot;</code>",id:"when-integrationmode-iframe",level:4},{value:"when <code>&quot;integrationMode&quot;: &quot;compose&quot;</code>",id:"when-integrationmode-compose",level:4},{value:"when <code>&quot;integrationMode&quot;: &quot;parcel&quot;</code>",id:"when-integrationmode-parcel",level:4}],k={toc:s},u="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.2.0"))),(0,i.kt)("p",null,"Logical web component that encapsulates the ability to load a standalone\nmicrofrontend."),(0,i.kt)("p",null,"Microfrontends loaded via ",(0,i.kt)("inlineCode",{parentName:"p"},"microfrontend-loader")," are not controlled by\n",(0,i.kt)("inlineCode",{parentName:"p"},"micro-lc")," in terms of routing."),(0,i.kt)(o.Fragment,null),(0,i.kt)("example-frame",{base:"/frames/components/microfrontend-loader",height:"550px",showSource:!1,src:"/",title:"Overview"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This component is intended to be used inside ",(0,i.kt)("micro-lc",null)," either in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},(0,i.kt)("inlineCode",{parentName:"a"},"layout")," composable section")," or in a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},(0,i.kt)("inlineCode",{parentName:"a"},"compose")," microfrontend"),",\nsince it makes use of ",(0,i.kt)("micro-lc",null)," ",(0,i.kt)("a",{parentName:"p",href:"../../api/micro-lc-api"},"API")," and\nthe ",(0,i.kt)("a",{parentName:"p",href:"/api/composer-api"},(0,i.kt)("inlineCode",{parentName:"a"},"compose")," API"),"."),(0,i.kt)("p",{parentName:"admonition"},"You ",(0,i.kt)("strong",{parentName:"p"},"can")," use it standalone, but you will have to manually provide a matching API with the property ",(0,i.kt)("inlineCode",{parentName:"p"},"microlcApi"),".")),(0,i.kt)("p",null,"The component can be sourced from\n",(0,i.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/microfrontend-loader.js"},"jsDelivr CDN")," or from\n",(0,i.kt)("a",{parentName:"p",href:"https://cdn.mia-platform.eu/micro-lc/orchestrator/2.2.0/dist/microfrontend-loader.js"},"mia CDN")),(0,i.kt)("p",null,"To use the component in ",(0,i.kt)("micro-lc",null),", declare it as part of a ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},(0,i.kt)("inlineCode",{parentName:"a"},"compose")," application"),"\nincluding its ",(0,i.kt)("a",{parentName:"p",href:"#properties-and-attributes"},"properties and attributes"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=my-compose-application.config.json",title:"my-compose-application.config.json"},'{\n  "sources": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/microfrontend-loader.js",\n  "content": [\n    {\n      "tag": "microfrontend-loader",\n      "properties": {\n        // See properties & attributes table below\n        "application": {\n          "integrationMode": "parcel",\n          "entry": "/my-application/index.html"\n        }\n      },\n    },\n    {\n      "tag": "microfrontend-loader",\n      "booleanAttributes": ["disable-shadow-dom"],\n      "properties": {\n        // See properties & attributes table below\n        "application": {\n          "integrationMode": "compose",\n          "config": {\n            "content": "Hello!"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"properties-and-attributes"},"Properties & attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"application")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#routelessapplication"},"RoutelessApplication"))),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The microfrontend to be loaded configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"disable-shadow-dom")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether ","<","microfrontend-loader",">","<","/microfrontend-loader",">"," should mount its application in Shadow DOM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"disable-styling")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Disable ","<","microfrontend-loader",">","<","/microfrontend-loader",">"," preset styling.")))),(0,i.kt)("h3",{id:"routelessapplication"},(0,i.kt)("code",null,"RoutelessApplication")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"RoutelessApplication")," is any ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/"},(0,i.kt)("inlineCode",{parentName:"a"},"Application"))," without the\n",(0,i.kt)("inlineCode",{parentName:"p"},"route")," property since any microfrontend, loaded by another microfrontend controlled by ",(0,i.kt)("micro-lc",null),",\ndoes not acquire orchestration in terms of router."),(0,i.kt)("h4",{id:"shared"},"Shared"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"integrationMode")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"iframe ","|"," compose ","|"," parcel")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("strong",{parentName:"td"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"see ",(0,i.kt)("a",{parentName:"td",href:"/docs/guides/applications/"},(0,i.kt)("inlineCode",{parentName:"a"},"integrationMode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"..."),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},"extra properties related to the choice of an ",(0,i.kt)("inlineCode",{parentName:"td"},"integrationMode"))))),(0,i.kt)("h4",{id:"when-integrationmode-iframe"},"when ",(0,i.kt)("inlineCode",{parentName:"h4"},'"integrationMode": "iframe"')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"src")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"iframe")," source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"srcdoc")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"alternative to ",(0,i.kt)("inlineCode",{parentName:"td"},"src"),", the HTML injected into the ",(0,i.kt)("inlineCode",{parentName:"td"},"iframe"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,"Record<string, string>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"attributes to provide to the ",(0,i.kt)("inlineCode",{parentName:"td"},"iframe")," tag")))),(0,i.kt)("h4",{id:"when-integrationmode-compose"},"when ",(0,i.kt)("inlineCode",{parentName:"h4"},'"integrationMode": "compose"')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,(0,i.kt)("a",{href:"/docs/guides/applications/compose#plugin-configuration"},"PluginConfiguration"))),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"compose")," configuration")))),(0,i.kt)("h4",{id:"when-integrationmode-parcel"},"when ",(0,i.kt)("inlineCode",{parentName:"h4"},'"integrationMode": "parcel"')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"entry")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,(0,i.kt)("a",{href:"/docs/guides/applications/parcels#usage"},"Entry"))),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"the entry html or resources of the parcel application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"properties")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("code",null,(0,i.kt)("a",{href:"/docs/guides/applications/parcels#usage"},"Properties"))),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"must be serializable"),", a dictionary of properties to inject on application mount")))))}g.isMDXComponent=!0}}]);