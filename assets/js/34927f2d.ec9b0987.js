"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9417],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=r,d=m["".concat(c,".").concat(u)]||m[u]||h[u]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},64219:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],l={title:"micro-lc: the new open-source project for micro frontend orchestration",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",slug:"micro-lc-the-new-open-source-micro-fronted-orchestrator"},c=void 0,s={permalink:"/blog/micro-lc-the-new-open-source-micro-fronted-orchestrator",editUrl:"https://github.com/micro-lc/documentation/edit/main/blog/2021-09-09-announcing-micro-lc.md",source:"@site/blog/2021-09-09-announcing-micro-lc.md",title:"micro-lc: the new open-source project for micro frontend orchestration",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",date:"2021-09-09T00:00:00.000Z",formattedDate:"September 9, 2021",tags:[],readingTime:4.105,hasTruncateMarker:!1,authors:[],frontMatter:{title:"micro-lc: the new open-source project for micro frontend orchestration",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",slug:"micro-lc-the-new-open-source-micro-fronted-orchestrator"},prevItem:{title:"Welcome to micro-lc v2.0",permalink:"/blog/welcome-micro-lc-v2"}},p={authorsImageUrls:[]},m=[{value:"Micro frontends: what are they and what do you need them for?",id:"micro-frontends-what-are-they-and-what-do-you-need-them-for",level:2},{value:"micro-lc: characteristics and benefits",id:"micro-lc-characteristics-and-benefits",level:2},{value:"The benefits of micro frontend orchestration with micro-lc",id:"the-benefits-of-micro-frontend-orchestration-with-micro-lc",level:2}],h={toc:m},u="wrapper";function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)(u,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Post originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator"},"Mia-Platform\u2019s blog"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This blog post refers to ",(0,a.kt)("a",{parentName:"p",href:"/1.x/docs/introduction"},(0,a.kt)("micro-lc",null)," v1.x")," and some information are outdated."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("micro-lc",null)," v2.0 is out now"),": read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/"},"updated documentation")," and the ",(0,a.kt)("a",{parentName:"p",href:"/blog/welcome-micro-lc-v2"},"presentation blog post"),".")),(0,a.kt)("p",null,"We are happy to announce the release of ",(0,a.kt)("micro-lc",null),", the new ",(0,a.kt)("strong",{parentName:"p"},"micro frontend orchestrator")," developed by ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu"},"Mia\u2011Platform"),"."),(0,a.kt)("p",null,"This project stems from our experience of recent years with micro frontend development. We know the challenges and needs of those who work with micro frontends and we want to give a concrete contribution to the developers who use them. For this reason, we have released the project in ",(0,a.kt)("strong",{parentName:"p"},"open\u2011source")," mode: it is already available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc"},"GitHub")," and all the community can freely contribute."),(0,a.kt)("p",null,"What is micro frontend orchestration? And, what are the benefits of ",(0,a.kt)("micro-lc",null),"? Read the article below to discover everything you need to know about it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"micro-lc architecture",src:o(42827).Z,width:"679",height:"382"})),(0,a.kt)("h2",{id:"micro-frontends-what-are-they-and-what-do-you-need-them-for"},"Micro frontends: what are they and what do you need them for?"),(0,a.kt)("p",null,"In the last decades, developers have been used to breaking down the most complex elements into small, independent, standardized components and therefore more easily manageable and reusable."),(0,a.kt)("p",null,"The microservices architectural pattern has become popular as it allows to simplify and speed up the development of applications; in the same way ",(0,a.kt)("strong",{parentName:"p"},"micro frontends")," were born and they ",(0,a.kt)("strong",{parentName:"p"},"apply to the frontend the same decoupling logic that microservices perform for the backend"),". The goal is to unpack a frontend application into a series of reusable and modular components. This also allows you to improve the agility of new frontend features releases."),(0,a.kt)("h2",{id:"micro-lc-characteristics-and-benefits"},"micro-lc: characteristics and benefits"),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is the component for micro frontend orchestration created by ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu"},"Mia\u2011Platform"),", which allows you ",(0,a.kt)("strong",{parentName:"p"},"to make the development experience consistent"),". ",(0,a.kt)("micro-lc",null)," simplifies the management of micro frontends through an application. It includes all the backend and frontend parts, and allows their extension via plugins, which is necessary to develop frontend applications, thus speeding up the time-to-market of new solutions."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is composed of two releasable entities: a frontend part and a backend part."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"frontend part")," consists of a container that provides a series of cross-application functionalities that can be used to configure each connected frontend."),(0,a.kt)("p",null,"Among the features you can find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basic elements of the layout, namely the top bar and the menu (of three types: sidebar menu, collapsible sidebar menu and top bar menu);"),(0,a.kt)("li",{parentName:"ul"},"Application colors;"),(0,a.kt)("li",{parentName:"ul"},"Logo and Favicon;"),(0,a.kt)("li",{parentName:"ul"},"Window title;"),(0,a.kt)("li",{parentName:"ul"},"Darkmode / lightmode;"),(0,a.kt)("li",{parentName:"ul"},"User data;"),(0,a.kt)("li",{parentName:"ul"},"Google analytics;"),(0,a.kt)("li",{parentName:"ul"},"Plugin Management.")),(0,a.kt)("p",null,"Mia\u2011Platform also provides a series of core and open\u2011source plugins for ",(0,a.kt)("micro-lc",null),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"microlc-element-composer"),", for example, allows you to compose the UI of the page dynamically, to create horizontal micro frontends."),(0,a.kt)("p",null,"From the ",(0,a.kt)("strong",{parentName:"p"},"backend")," section you can ",(0,a.kt)("strong",{parentName:"p"},"manage the configurations that define the elements of the frontend"),", the user authentication, and configurations in general.\n",(0,a.kt)("micro-lc",null)," does not manage or authenticate users directly, but allows you to configure authentication endpoints, which will then be managed by an Authentication Provider."),(0,a.kt)("p",null,"The frontends are designed with ",(0,a.kt)("strong",{parentName:"p"},"Qiankun"),", a framework that injects the frontends into the DOM. In this way it is as if they are organically inside your application and integrated with each other (as opposed to what happens with iframes, where the frontends are isolated)."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is integrated with ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu/platform/console/"},"Mia\u2011Platform Console"),": if you already use Mia\u2011Platform Console you can select the Plugin from the ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu/platform/mia-platform-marketplace/"},"Marketplace")," and start a frontend application in a few clicks."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"micro-lc communication",src:o(20380).Z,width:"680",height:"357"})),(0,a.kt)("h2",{id:"the-benefits-of-micro-frontend-orchestration-with-micro-lc"},"The benefits of micro frontend orchestration with micro-lc"),(0,a.kt)("p",null,"As anticipated, the use of a micro frontend orchestrator like ",(0,a.kt)("micro-lc",null)," allows you to ",(0,a.kt)("strong",{parentName:"p"},"improve the micro frontend development experience"),", simplifying the orchestration and abstracting the language used."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is a component integrated ",(0,a.kt)("strong",{parentName:"p"},"into the Runtime phase"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Unlike the Buildtime integration - which requires you to release all the elements every time a change is made - the Runtime integration allows you to ",(0,a.kt)("strong",{parentName:"p"},"simplify the release"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Once a new configuration has been released from the backend section, you need to simply reload the page to see the changes of the individual components, without releasing all the elements individually."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is so ",(0,a.kt)("strong",{parentName:"p"},"flexible")," that allows you not only to create new frontend applications, but also to migrate from a monolith frontend to a micro frontend architecture, which will be faster and more agile."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," ",(0,a.kt)("strong",{parentName:"p"},"is extremely configurable"),": the layout can be modified by inserting the brand's graphic assets, thus offering a personalized user experience."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," is an open\u2011source project: this means that anyone who is part of the community can give feedback and contribute to the evolution of the product. Try ",(0,a.kt)("micro-lc",null),", let us know what you think and contribute with your ideas!"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc"},"GitHub")," project or to the ",(0,a.kt)("a",{parentName:"p",href:"https://micro-lc.io/docs"},"documentation"),"."),(0,a.kt)("p",null,"If you want to learn more about ",(0,a.kt)("strong",{parentName:"p"},"all Mia\u2011Platform open\u2011source software"),", take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu/dev/open-source-projects-software/"},"this page")," on our website. Here you can find the full description of our culture, a brief overview of each project, and the link to their websites."))}d.isMDXComponent=!0},20380:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/microlc-communication-bdd70610fa9d91911d186e20f8904a83.png"},42827:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/microlc_architecture-4b6ba96e48e69c55b1e20d5533db382a.png"}}]);