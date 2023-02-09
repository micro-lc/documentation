"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4855],{55858:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(76687);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return o?n.createElement(h,l(l({ref:t},s),{},{components:o})):n.createElement(h,l({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},77554:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=o(7375),r=o(38374),a=(o(76687),o(55858)),l=["components"],i={title:"Welcome to micro-lc v2.0",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",slug:"welcome-micro-lc-v2",authors:"paolomartinoli"},c=void 0,u={permalink:"/blog/welcome-micro-lc-v2",editUrl:"https://github.com/micro-lc/documentation/edit/main/blog/2022-12-12-hello-micro-lc-v2.md",source:"@site/blog/2022-12-12-hello-micro-lc-v2.md",title:"Welcome to micro-lc v2.0",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",date:"2022-12-12T00:00:00.000Z",formattedDate:"December 12, 2022",tags:[],readingTime:2.535,hasTruncateMarker:!1,authors:[{name:"Paolo Martinoli",title:"Tech Writer at Mia-Platform",url:"https://github.com/ugho16",imageURL:"https://github.com/ugho16.png",key:"paolomartinoli"}],frontMatter:{title:"Welcome to micro-lc v2.0",description:"micro-lc version 2.0 is out now! Take a look at all the new features and improvements.",slug:"welcome-micro-lc-v2",authors:"paolomartinoli"},nextItem:{title:"micro-lc: the new open-source project for micro frontend orchestration",permalink:"/blog/micro-lc-the-new-open-source-micro-fronted-orchestrator"}},s={authorsImageUrls:[void 0]},p=[{value:"A new live playground",id:"a-new-live-playground",level:2},{value:"<micro-lc></micro-lc> has never been lighter",id:"-has-never-been-lighter",level:2},{value:"New YAML integration",id:"new-yaml-integration",level:2},{value:"... and a lot of other cool stuff",id:"-and-a-lot-of-other-cool-stuff",level:2}],m={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Micro-frontends are very powerful, but you need to orchestrate them to provide a consistent experience. This is exactly the reason why we at ",(0,a.kt)("a",{parentName:"p",href:"https://mia-platform.eu/"},"Mia-Platform")," developed ",(0,a.kt)("micro-lc",null)," and released it as open-source.",(0,a.kt)("br",{parentName:"p"}),"\n","If you are not familiar with it, in a nutshell, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("micro-lc",null)," is an open-source micro-frontends orchestrator"),": you can find further information in the ",(0,a.kt)("a",{parentName:"p",href:"/docs"},"documentation introduction"),", or you can read this ",(0,a.kt)("a",{parentName:"p",href:"https://blog.mia-platform.eu/en/micro-lc-the-new-open-source-micro-fronted-orchestrator"},"blog post")," to get a more discursive overview."),(0,a.kt)("p",null,"We are proud to announce ",(0,a.kt)("micro-lc",null)," ",(0,a.kt)("strong",{parentName:"p"},"v2.0"),"! A lot of new features have been implemented and optimized, making the tool more powerful than ever. Micro-frontends keep evolving, and so does ",(0,a.kt)("micro-lc",null),"."),(0,a.kt)("p",null,"Let's take a closer look to what has changed."),(0,a.kt)("h2",{id:"a-new-live-playground"},"A new live playground"),(0,a.kt)("p",null,"One of the main news is the ",(0,a.kt)("strong",{parentName:"p"},"new ",(0,a.kt)("a",{parentName:"strong",href:"/playground/"},"playground")," available on the website"),". Here you can try ",(0,a.kt)("micro-lc",null)," live, without the need to install anything: in the box on the right you will directly see the result. You are free to do all the experiments you like and test the full potential of ",(0,a.kt)("micro-lc",null),"."),(0,a.kt)("p",null,"What are you waiting for? Unleash your creativity!"),(0,a.kt)("h2",{id:"-has-never-been-lighter"},(0,a.kt)("micro-lc",null)," has never been lighter"),(0,a.kt)("p",null,"If you are familiar with ",(0,a.kt)("micro-lc",null)," and you have already used it, you will love this new feature. If you are a new user, you will love it too, don't worry."),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," can now be used ",(0,a.kt)("strong",{parentName:"p"},"through a ",(0,a.kt)("a",{parentName:"strong",href:"/docs/getting-started#import-from-cdn"},"CDN")),": this means that the download will be much lighter and the interface will be easier. This because ",(0,a.kt)("micro-lc",null)," and ",(0,a.kt)("inlineCode",{parentName:"p"},"microlc-element-composer")," (which used to be a separated core plugin) are now tightened together.",(0,a.kt)("br",{parentName:"p"}),"\n","The bundle size is very low and so pages load faster, ensuring higher performances to your micro-frontends."),(0,a.kt)("p",null,"In addition, the code that makes ",(0,a.kt)("micro-lc",null)," run is available as a standalone library that you can download via ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),". Just run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @micro-lc/orchestrator\n")),(0,a.kt)("h2",{id:"new-yaml-integration"},"New YAML integration"),(0,a.kt)("p",null,"Besides the already supported JSON, we introduced the possibility to ",(0,a.kt)("strong",{parentName:"p"},"write ",(0,a.kt)("a",{parentName:"strong",href:"/api/micro-lc-web-component#configuration"},"configuration")," in YAML"),". Since YAML syntax is far more easily understandable for humans, this feature will boost you building your micro-frontends."),(0,a.kt)("p",null,"But, if you are a JSON lover, you can continue to use it as you have been doing until now. You can also use the converter available in the ",(0,a.kt)("a",{parentName:"p",href:"/playground/"},"Playground section")," to easily convert your YAML to JSON, and viceversa."),(0,a.kt)("h2",{id:"-and-a-lot-of-other-cool-stuff"},"... and a lot of other cool stuff"),(0,a.kt)("p",null,"Besides all the above, other new features and improvements have been added:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/communication"},"communication")," method between applications;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("micro-lc",null)," now supports centralized states from plugin;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("micro-lc",null)," is embeddable everywhere, so you can use it without downloading it;"),(0,a.kt)("li",{parentName:"ul"},"You can have custom ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/layout"},"layouts")," by default."),(0,a.kt)("li",{parentName:"ul"},"The documentation has been updated and fully restyled!")),(0,a.kt)("p",null,"That's it for now, but we will keep updating and improving ",(0,a.kt)("micro-lc",null),"."),(0,a.kt)("p",null,"If you want to ",(0,a.kt)("strong",{parentName:"p"},"contribute")," to the project, take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/micro-lc/micro-lc/issues"},"open issues"),", and feel free to open a new one if you don't find what you are looking for.",(0,a.kt)("br",{parentName:"p"}),"\n","Moreover, the ",(0,a.kt)("a",{parentName:"p",href:"/blog"},"blog section")," has been introduced on the website, so consider writing a post for sharing your experience building awesome micro-frontends!"))}d.isMDXComponent=!0}}]);