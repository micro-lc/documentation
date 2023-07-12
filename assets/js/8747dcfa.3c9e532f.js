"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8149],{55858:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>N});var a=r(76687);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),d=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=d(r),s=n,N=c["".concat(m,".").concat(s)]||c[s]||k[s]||i;return r?a.createElement(N,o(o({ref:e},p),{},{components:r})):a.createElement(N,o({ref:e},p))}));function N(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[c]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6439:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>p,toc:()=>k});var a=r(79501),n=r(42624),i=r(76687),o=r(55858),l=["components"],m={title:"\ud83d\uddbc mlc-antd-theme-manager",description:"Adapter for Ant Design dynamic theme",sidebar_label:"\ud83d\uddbc mlc-antd-theme-manager",sidebar_position:30},d=void 0,p={unversionedId:"add-ons/components/mlc-antd-theme-manager",id:"add-ons/components/mlc-antd-theme-manager",title:"\ud83d\uddbc mlc-antd-theme-manager",description:"Adapter for Ant Design dynamic theme",source:"@site/docs/add-ons/components/mlc-antd-theme-manager.md",sourceDirName:"add-ons/components",slug:"/add-ons/components/mlc-antd-theme-manager",permalink:"/add-ons/components/mlc-antd-theme-manager",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/add-ons/components/mlc-antd-theme-manager.md",tags:[],version:"current",lastUpdatedBy:"Paola",sidebarPosition:30,frontMatter:{title:"\ud83d\uddbc mlc-antd-theme-manager",description:"Adapter for Ant Design dynamic theme",sidebar_label:"\ud83d\uddbc mlc-antd-theme-manager",sidebar_position:30},sidebar:"add-ons",previous:{title:"\ud83d\uddbc mlc-loading-animation",permalink:"/add-ons/components/mlc-loading-animation"},next:{title:"Backend solutions",permalink:"/add-ons/backend/"}},c={},k=[{value:"How it works",id:"how-it-works",level:2},{value:"Usage",id:"usage",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Multiple prefixes",id:"multiple-prefixes",level:3},{value:"Properties &amp; attributes",id:"properties--attributes",level:2},{value:"CSS custom properties",id:"css-custom-properties",level:2}],s={toc:k},N="wrapper";function g(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)(N,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Logical web component that can be included in applications layout to inject an ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),"\ncompatible theme."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It only works on components using ",(0,o.kt)("a",{parentName:"p",href:"https://4x.ant.design/docs/react/customize-theme-variable"},"Ant Design Dynamic Theme"),".")),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/components/mlc-antd-theme-manager",height:"550px",showSource:!1,src:"/",title:"Overview"}),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The web component calculates the CSS variables needed by\n",(0,o.kt)("a",{parentName:"p",href:"https://4x.ant.design/docs/react/customize-theme-variable"},"Ant Design Dynamic Theme")," from a set of base colors\n(namely, primary, info, success, processing, error, and warning colors). These variables are then injected globally\nthrough ",(0,o.kt)("micro-lc",null)," API ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/extensions#csssetstyle"},"setStyle method"),". "),(0,o.kt)("p",null,"Variables can be scoped using one or more prefixes. For example, the following configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'layout:\n  content:\n    tag: mlc-antd-theme-manager\n    properties:\n      varsPrefix:\n        - prefix-1\n        - prefix-2\n      primaryColor: "#25B864"\n')),(0,o.kt)("p",null,"inject in the Document the following set of variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},":host {\n  --prefix-1-primary-1: #e9f7ec;\n  --prefix-1-primary-2: #c5ebd0;\n  /* ... */\n  --prefix-2-primary-1: #e9f7ec;\n  --prefix-2-primary-2: #c5ebd0;\n  /* ... */\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This component is intended to be used inside ",(0,o.kt)("micro-lc",null),", since it makes use of ",(0,o.kt)("micro-lc",null),"\n",(0,o.kt)("a",{parentName:"p",href:"../../api/micro-lc-api"},"API"),"."),(0,o.kt)("p",{parentName:"admonition"},"You ",(0,o.kt)("strong",{parentName:"p"},"can")," use it standalone, but you will have to manually provide a matching API with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"microlcApi"),".")),(0,o.kt)("p",null,"The component can be sourced from\n",(0,o.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@micro-lc/layout@0.1.4/dist/mlc-antd-theme-manager.js"},"jsDelivr CDN"),"."),(0,o.kt)("p",null,"To use the component in ",(0,o.kt)("micro-lc",null),", declare it as part of the application layout with its\n",(0,o.kt)("a",{parentName:"p",href:"#properties-and-attributes"},"properties and attributes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"layout:\n  sources: https://cdn.jsdelivr.net/npm/@micro-lc/layout@0.1.4/dist/mlc-antd-theme-manager.js\n  content:\n    - tag: mlc-antd-theme-manager\n      properties:\n        varsPrefix: my-prefix\n        primaryColor: '#25B864'\n")),(0,o.kt)("h2",{id:"showcase"},"Showcase"),(0,o.kt)("h3",{id:"multiple-prefixes"},"Multiple prefixes"),(0,o.kt)(i.Fragment,null),(0,o.kt)("example-frame",{base:"/frames/components/mlc-antd-theme-manager/multiple-prefixes",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.json"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"Multiple prefixes"}),(0,o.kt)("h2",{id:"properties--attributes"},"Properties & attributes"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"All color properties can be Hex, 8-digit Hex, RGB, RGBA HSL, HSLA, HSV, HSVA, or CSS color name string.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"varsPrefix")),(0,o.kt)("td",{parentName:"tr",align:"center"},"-"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string ","|"," string[]")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"micro-lc")),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix to apply to the generated set of variables. If more thant one is specified, a set for each prefix will be generated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"primaryColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"primary-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#1890FF")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design primary color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"infoColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"info-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#1890FF")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design info color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"successColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"success-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#52C41A")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design success color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"processingColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"processing-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#1890FF")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design processing color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"errorColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"error-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#FF4D4F")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design error color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"warningColor")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"warning-color")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"#FAAD14")),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design warning color.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"font-family")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',  Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'")),(0,o.kt)("td",{parentName:"tr",align:null},"Font family CSS property.")))),(0,o.kt)("h2",{id:"css-custom-properties"},"CSS custom properties"),(0,o.kt)("p",null,"The component ",(0,o.kt)("strong",{parentName:"p"},"sets")," the following CSS variables:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-4"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-5"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-7"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-8"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-9"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-10"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-active"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-active-deprecated-d-02"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-active-deprecated-f-30"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-bg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-border"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-f-12"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-l-20"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-l-35"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-t-20"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-deprecated-t-50"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-hover"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-primary-color-outline"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-active"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-deprecated-bg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-deprecated-border"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-hover"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-success-color-outline"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-active"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-deprecated-bg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-deprecated-border"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-hover"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-info-color-outline"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-active"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-deprecated-bg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-deprecated-border"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-hover"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-warning-color-outline"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-active"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-deprecated-bg"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-deprecated-border"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-disabled"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-hover"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-error-color-outline"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--micro-lc-font-family"))))))}g.isMDXComponent=!0}}]);