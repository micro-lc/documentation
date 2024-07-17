"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(87462),i=n(63366),a=n(67294),r=n(3905),l=["components"],s={title:"Step 1: How To Compose",description:"tutorial step to review the process of html-to-json composition",sidebar_label:"Step 1: How To Compose",sidebar_position:10},p=void 0,c={unversionedId:"docs/compose-your-frontend/how-to-compose",id:"docs/compose-your-frontend/how-to-compose",title:"Step 1: How To Compose",description:"tutorial step to review the process of html-to-json composition",source:"@site/docs/docs/compose-your-frontend/01-how-to-compose.md",sourceDirName:"docs/compose-your-frontend",slug:"/docs/compose-your-frontend/how-to-compose",permalink:"/docs/compose-your-frontend/how-to-compose",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/compose-your-frontend/01-how-to-compose.md",tags:[],version:"current",lastUpdatedBy:"Paola Nicosia",sidebarPosition:10,frontMatter:{title:"Step 1: How To Compose",description:"tutorial step to review the process of html-to-json composition",sidebar_label:"Step 1: How To Compose",sidebar_position:10},sidebar:"docs",previous:{title:"Compose Your Frontend",permalink:"/docs/compose-your-frontend/"},next:{title:"Step 2: Compose Less By Reusing",permalink:"/docs/compose-your-frontend/compose-less-by-reusing"}},m={},d=[{value:"Blank Configuration",id:"blank-configuration",level:2},{value:"Add Some Compose Context",id:"add-some-compose-context",level:2}],u={toc:d},f="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"blank-configuration"},"Blank Configuration"),(0,r.kt)("p",null,"To begin, reset the configuration to the default and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2\n}\n')),(0,r.kt)(a.Fragment,null),(0,r.kt)("tutorial-frame",{configuration:{version:2}}),(0,r.kt)("p",null,"A prominent ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," will appear. No worries, this is expected because no microfrontend is mounted at the route ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),". At the top of the preview, you'll see the current window location as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my-domain/"),". ",(0,r.kt)("micro-lc",null)," is informing you that ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," is not configured to display anything."),(0,r.kt)("h2",{id:"add-some-compose-context"},"Add Some Compose Context"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"composition")," refers to the ability to build a microfrontend from a configuration that closely mirrors HTML. Let's prepare some composition context for ",(0,r.kt)("micro-lc",null)," to display at ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),". Trust this step for now; we'll delve into its details later. Paste the following config into the playground:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "applications": {\n    "home": {\n      "integrationMode": "compose",\n      "route": "/",\n      "config": {\n        "content": "Hello"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Upon pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply"),", you should see 'Hello' displayed."),(0,r.kt)("p",null,"Next, let's focus on the content key nested inside ",(0,r.kt)("inlineCode",{parentName:"p"},"applications.home.config.content")," - this is our current composition context. Imagine you want to start with a simple homepage at ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," that looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <img\n    alt="logo"\n    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"\n  ></img>\n  <a\n    href="https://micro-lc.io/"\n    target="_blank"\n  >Get started with the official documentation!</a>\n</div>\n')),(0,r.kt)("p",null,"This consists of an image followed by a link. Now, we need to create an equivalent JSON representation of this HTML using the rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},'"tag": "a"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'href="https://micro-lc.io/"')," -> ",(0,r.kt)("inlineCode",{parentName:"li"},'"attributes": {"href": "https://micro-lc.io/"}')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get started with the official documentation!")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},'"content": "Get started with the official documentation!"'))),(0,r.kt)("p",null,"For each HTML tag, we create a JSON object with ",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," fields representing the respective tag, its attributes, and its ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "a",\n  "attributes": {\n    "href": "https://micro-lc.io/",\n    "target": "_blank"\n  },\n  "content": "Go to official documentation"\n}\n')),(0,r.kt)("p",null,"Recursively applying these rules to the entire HTML, we get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "div",\n  "content": [\n    {\n      "tag": "img",\n      "attributes": {\n        "alt": "logo",\n        "src": "https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"\n      }\n    },\n    {\n      "tag": "a",\n      "attributes": {\n        "href": "https://micro-lc.io/",\n        "target": "_blank"\n      },\n      "content": "Go to official documentation"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Copy and paste this into the playground's composition context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 2,\n  "applications": {\n    "home": {\n      "integrationMode": "compose",\n      "route": "/",\n      "config": {\n        "content": \ud83d\udc48 right here\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Then press ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply"),"."),(0,r.kt)(a.Fragment,null),(0,r.kt)("tutorial-frame",{configuration:{version:2,applications:{home:{integrationMode:"compose",route:"/",config:{content:{tag:"div",attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"},content:[{tag:"img",attributes:{alt:"logo",src:"https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"}},{tag:"a",attributes:{href:"https://micro-lc.io/",target:"_blank"},content:"Go to official documentation"}]}}}}}}),(0,r.kt)("p",null,"The result might not look visually appealing, so let's enhance it with some styling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "div",\n  "attributes": {\n    "style": "height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px; font-family: Arial;"\n  },\n  "content": [\n    ...\n  ]\n}\n')),(0,r.kt)("p",null,"You can apply styles to any tag. For instance, on the a tag, we could add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tag": "a",\n  "attributes": {\n    "href": "https://micro-lc.io/",\n    "target": "_blank",\n    "style": "text-shadow: 2px 2px #aaa;"\n  },\n  "content": "Go to official documentation"\n}\n')),(0,r.kt)("p",null,"Inspecting the DOM, we should obtain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div\n  style="\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 24px;\n    font-family: Arial;\n  "\n>\n  <img\n    alt="logo"\n    src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/favicon.png"\n  ></img>\n  <a\n    href="https://micro-lc.io/"\n    target="_blank"\n    style="text-shadow: 2px 2px #aaa;"\n  >Get started with the official documentation!</a>\n</div>\n')),(0,r.kt)("p",null,"Sounds tedious, right? \ud83d\udc80"),(0,r.kt)("p",null,"Indeed, it can be quite tedious. That's mainly because composition isn't intended to help you build your webpage from standard HTML tags (that's what HTML is for). The primary goal is to facilitate the layout of complex and reusable HTML5 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components"},"web components"),"."))}g.isMDXComponent=!0}}]);