"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3192],{55858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(48792),a=n(91219),i=(n(76687),n(55858)),o=["components"],l={slug:"/docs",title:"Introduction",description:"Introduction to micro-lc",sidebar_label:"Introduction",sidebar_position:10},s=void 0,p={unversionedId:"docs/introduction",id:"docs/introduction",title:"Introduction",description:"Introduction to micro-lc",source:"@site/docs/docs/introduction.md",sourceDirName:"docs",slug:"/docs",permalink:"/docs",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:10,frontMatter:{slug:"/docs",title:"Introduction",description:"Introduction to micro-lc",sidebar_label:"Introduction",sidebar_position:10},sidebar:"docs",next:{title:"Getting started",permalink:"/docs/getting-started"}},c={},d=[{value:"Rationale",id:"rationale",level:2},{value:"Features",id:"features",level:2},{value:"Browser compatibility",id:"browser-compatibility",level:2}],m={toc:d},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83c\udfbc ",(0,i.kt)("micro-lc",null)," is an open source ",(0,i.kt)("strong",{parentName:"p"},"micro-frontend orchestrator"),"."),(0,i.kt)("p",null,"\ud83e\uddf1 ",(0,i.kt)("micro-lc",null)," offers a solution for building ",(0,i.kt)("strong",{parentName:"p"},"flexible"),", ",(0,i.kt)("strong",{parentName:"p"},"multi-tenant")," frontend applications."),(0,i.kt)("p",null,"\ud83d\uddbc ",(0,i.kt)("micro-lc",null)," is well suited to build ",(0,i.kt)("strong",{parentName:"p"},"any type of web application"),", from classical top-bar/sidebar\nmulti-pages websites, to CMSs, blogs, or even applications with no layout at all."),(0,i.kt)("p",null,"\u26a1 ",(0,i.kt)("micro-lc",null)," aims to be as ",(0,i.kt)("strong",{parentName:"p"},"lightweight")," as possible and to improve ",(0,i.kt)("strong",{parentName:"p"},"web security"),". "),(0,i.kt)("p",null,"\ud83d\udd17 ",(0,i.kt)("micro-lc",null)," brings together ",(0,i.kt)("strong",{parentName:"p"},"different micro-frontend patterns")," inside the same application."),(0,i.kt)("p",null,"\ud83c\udfc3 ",(0,i.kt)("micro-lc",null)," consists of a core interface that loads, embeds, and orchestrates individual frontend applications\nat ",(0,i.kt)("strong",{parentName:"p"},"runtime"),", while providing ",(0,i.kt)("strong",{parentName:"p"},"configuration options")," and useful ",(0,i.kt)("strong",{parentName:"p"},"out-of-the-box features"),"."),(0,i.kt)("h2",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"In a world of frontend monoliths, the ",(0,i.kt)("a",{parentName:"p",href:"https://micro-frontends.org/"},"micro-frontend")," pattern brings to the frontend world\nthe benefits ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Microservices"},"microservice architecture")," brought to backend development.\nWe are talking about scalability, technological agnosticism, faster development and delivery time, maintainability, and\ngovernance complexity reduction, just to name a few."),(0,i.kt)("p",null,"One of the greatest challenges when taking this architectural approach is making sure that all the independent\nmicro-frontend application behave in a ",(0,i.kt)("strong",{parentName:"p"},"cohesive way"),", both in terms of user interface (e.g., styling, theming, branding)\nand user experience (e.g., state sharing, routing, error handling)."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," has been designed to help overcome this challenge, offering the stability and unity of a centralized\norchestrator, while maintaining the flexibility needed to mold the application to each unique use case."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," supports three different micro-frontend patterns at the same time:\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/iframes"},"iframes"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcels"),", and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"shadowed components"),"."),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"iframe")," is an external websites embedded into our application. A ",(0,i.kt)("strong",{parentName:"p"},"parcel")," instead is a fully-fledged (possibly\nsingle-page) application which lives within the context of the main application, but is JS-sandboxed and routed. Finally,\n",(0,i.kt)("strong",{parentName:"p"},"shadowed components")," refer to business logic encapsulation via web components which allows to protect from style leaks\nand to scope events using HTML5 elements Shadow DOM."),(0,i.kt)("p",null,"Orchestration happens at ",(0,i.kt)("strong",{parentName:"p"},"run-time")," so that a JSON (or YAML) configuration is all ",(0,i.kt)("micro-lc",null)," needs to add\na new micro-frontend application. Configurations can be ",(0,i.kt)("strong",{parentName:"p"},"hot-swapped")," or edited at run time, meaning a page refresh is\nenough to preview your application after config changes."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," provides a ",(0,i.kt)("strong",{parentName:"p"},"smooth navigation experience")," between different applications, SPAs, and iframes\nwhile wrapping them in a static layout."),(0,i.kt)("p",null,"It ships as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#import-from-cdn"},"CDN bundle")," that can be embedded into HTML pages or other scripts,\nand as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#deploy-docker-container"},"Docker container")," that can be configured with volumes."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," is heavily inspired by and based on micro-frontend orchestration tools such as\n",(0,i.kt)("a",{parentName:"p",href:"https://single-spa.js.org/"},"single-spa")," and ",(0,i.kt)("a",{parentName:"p",href:"https://qiankun.umijs.org/"},"qiankun"),"."),(0,i.kt)("p",null,"By orchestrating micro-frontend applications, ",(0,i.kt)("micro-lc",null)," achieves a fair amount of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"applications written in ",(0,i.kt)("strong",{parentName:"li"},"different frameworks")," can live together on the same page;"),(0,i.kt)("li",{parentName:"ul"},"applications can be deployed ",(0,i.kt)("strong",{parentName:"li"},"independently"),";"),(0,i.kt)("li",{parentName:"ul"},"applications can ",(0,i.kt)("strong",{parentName:"li"},"communicate")," through standard APIs leveraging also event-driven patterns.")),(0,i.kt)("p",null,"Compared to other tools, ",(0,i.kt)("micro-lc",null)," provides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"live configuration and preview;"),(0,i.kt)("li",{parentName:"ul"},"centralized styling APIs;"),(0,i.kt)("li",{parentName:"ul"},"HTML-like composition tools (",(0,i.kt)("em",{parentName:"li"},"lit-html"),");"),(0,i.kt)("li",{parentName:"ul"},"import map integration (",(0,i.kt)("em",{parentName:"li"},"es-module-shims"),").")),(0,i.kt)("h2",{id:"browser-compatibility"},"Browser compatibility"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"IE 11"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Edge 79+"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Firefox 67+"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Chrome 64+"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Safari 11.1+"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Opera 51+"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2716"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714")))))}g.isMDXComponent=!0}}]);