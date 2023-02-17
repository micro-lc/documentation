"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8356],{55858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(1943),a=n(21576),i=(n(76687),n(55858)),l=["components"],o={id:"core_plugins",title:"Core plugins",sidebar_label:"Core plugins"},p=void 0,m={unversionedId:"docs/core_plugins",id:"version-1.0.0/docs/core_plugins",title:"Core plugins",description:"To extend the potential of micro-lc, Mia-Platform created some configurable plugins called core plugins.",source:"@site/versioned_docs/version-1.0.0/docs/core_plugins.md",sourceDirName:"docs",slug:"/docs/core_plugins",permalink:"/1.0.0/docs/core_plugins",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/core_plugins.md",tags:[],version:"1.0.0",lastUpdatedBy:"Umberto Toniolo",frontMatter:{id:"core_plugins",title:"Core plugins",sidebar_label:"Core plugins"},sidebar:"docs",previous:{title:"Plugin configuration",permalink:"/1.0.0/docs/plugin_configuration"},next:{title:"SEO integration",permalink:"/1.0.0/docs/seo"}},u={},c=[{value:"microlc-element-composer",id:"microlc-element-composer",level:2},{value:"type",id:"type",level:4},{value:"tag",id:"tag",level:4},{value:"url",id:"url",level:4},{value:"attributes",id:"attributes",level:4},{value:"properties",id:"properties",level:4},{value:"busDiscriminator",id:"busdiscriminator",level:4},{value:"content",id:"content",level:4},{value:"Structure example",id:"structure-example",level:3}],s={toc:c},d="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To extend the potential of ",(0,i.kt)("inlineCode",{parentName:"p"},"micro-lc"),", Mia-Platform created some ",(0,i.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration#props"},"configurable")," plugins called ",(0,i.kt)("inlineCode",{parentName:"p"},"core plugins"),"."),(0,i.kt)("p",null,"These plugins are open source and can be deployed using the console with low effort."),(0,i.kt)("h2",{id:"microlc-element-composer"},"microlc-element-composer"),(0,i.kt)("p",null,"This plugin is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/microlc-element-composer"},"publicly available on GitHub")," and\ncan be used to compose the UI of your page, with the precondition that each piece has been made as ",(0,i.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements"},(0,i.kt)("inlineCode",{parentName:"a"},"custom-elements")),"."),(0,i.kt)("p",null,"The layout can be composed using rows and columns: it will be adaptive thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," layout."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In addition to the ",(0,i.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_plugins#config"},"properties that you can configure")," for each ",(0,i.kt)("inlineCode",{parentName:"p"},"custom-element"),",\nthe plugin ",(0,i.kt)("strong",{parentName:"p"},"always")," injects the 3 following properties:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eventBus"),": an ",(0,i.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/subject"},"RxJS's Subject")," used as communication channel between components;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"currentUser"),": an object which may represent the session currently authenticated user;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"headers"),": an object made of standard/custom HTTP headers, which may propagate cookies and other helpful settings to manage frontend HTTP calls.")))),(0,i.kt)("h4",{id:"type"},"type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": string;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"enum"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"row"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"column"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"element"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": type of object to render.")),(0,i.kt)("h4",{id:"tag"},"tag"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"This property is mandatory only for ",(0,i.kt)("inlineCode",{parentName:"strong"},"element")," type"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": string;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": tag of the custom element to render.  ")),(0,i.kt)("h4",{id:"url"},"url"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"This property is considered only for ",(0,i.kt)("inlineCode",{parentName:"strong"},"element")," type"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": string;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": URL of  the entry point used to register and boot the custom element.  ")),(0,i.kt)("h4",{id:"attributes"},"attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": object;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": attributes injection for the DOM element.")),(0,i.kt)("h4",{id:"properties"},"properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": object;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": properties injection for the DOM element.")),(0,i.kt)("h4",{id:"busdiscriminator"},"busDiscriminator"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"This property is considered only for ",(0,i.kt)("inlineCode",{parentName:"strong"},"element")," type"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": string;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": Event bus discriminator, used to create a dedicated communication channel.",(0,i.kt)("br",{parentName:"li"}),"By default, is injected the general communication channel.  ")),(0,i.kt)("h4",{id:"content"},"content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"type"),": object;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"required"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"description"),": the definition of the children components. This field makes this structure recursive.")),(0,i.kt)("h3",{id:"structure-example"},"Structure example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "row",\n  "content": [{\n    "type": "column",\n    "attributes": {\n      "style": "width: 89%",\n    },\n    "content": [{\n      "type": "element",\n      "tag": "button",\n      "url": "https://your-host.com/your/component/entry.js",\n      "properties": {\n        "property-a": "value-a"\n      }\n    }]\n  }]\n}\n')))}k.isMDXComponent=!0}}]);