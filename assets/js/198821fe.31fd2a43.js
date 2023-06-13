"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[266],{59738:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(76687),a=n(64923),r=n(2367),o=n(32058),c=n(45149),l=n(54086);const s={cardContainer:"cardContainer_ofzN",cardTitle:"cardTitle_E7At",cardDescription:"cardDescription_idr0"};function p(e){var t=e.href,n=e.children;return i.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},n)}function d(e){var t=e.href,n=e.icon,r=e.title,o=e.description;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:r},n," ",r),o&&i.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function m(e){var t,n=e.item,a=(0,r.Wl)(n);return a?i.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function u(e){var t,n,a=e.item,o=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=a.docId)?t:void 0);return i.createElement(d,{href:a.href,icon:o,title:a.label,description:null!=(n=a.description)?n:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,r.jA)();return i.createElement(h,{items:n.items,className:t})}function h(e){var t=e.items,n=e.className;if(!t)return i.createElement(g,e);var o=(0,r.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},o.map((function(e,t){return i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e}))})))}},94020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=n(48792),a=n(91219),r=(n(76687),n(55858)),o=n(47998),c=n(50796),l=n(56940),s=n(59738),p=["components"],d={title:"Applications",description:"Dynamic portion of micro-lc"},m=void 0,u={unversionedId:"docs/guides/applications/index",id:"docs/guides/applications/index",title:"Applications",description:"Dynamic portion of micro-lc",source:"@site/docs/docs/guides/applications/index.md",sourceDirName:"docs/guides/applications",slug:"/docs/guides/applications/",permalink:"/docs/guides/applications/",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/applications/index.md",tags:[],version:"current",lastUpdatedBy:"epessina",frontMatter:{title:"Applications",description:"Dynamic portion of micro-lc"},sidebar:"docs",previous:{title:"Routing",permalink:"/docs/guides/routing"},next:{title:"iFrames",permalink:"/docs/guides/applications/iframes"}},f={},g=[{value:"Configuration",id:"configuration",level:2}],h={toc:g},k="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)(k,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Applications are micro-frontends rendered in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/separation-of-concerns"},"dynamic section")," of\n",(0,r.kt)("micro-lc",null),". Each application corresponds to a URL pathname, and ",(0,r.kt)("micro-lc",null)," is responsible to handle ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/routing"},"routing")," between them."),(0,r.kt)("p",null,(0,r.kt)("micro-lc",null)," supports three different micro-frontend patterns to integrate applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/applications/iframes"},(0,r.kt)("inlineCode",{parentName:"a"},"iframe")),", where applications are embedded in an iframe tag providing full strict encapsulation,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose"},(0,r.kt)("inlineCode",{parentName:"a"},"compose")),", where applications are dynamically composed of HTML5 elements or web components following a\nprovided configuration, and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/applications/parcels"},(0,r.kt)("inlineCode",{parentName:"a"},"parcel")),", where the orchestrator is provided with the full scope of assets needed to start the applications\n(most of the time either an HTML file or JS scripts).")),(0,r.kt)("p",null,"There also exists a particular type of applications, ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/applications/error-pages"},"error pages"),", which differ in that have a fixed\nrouting pattern."),(0,r.kt)(s.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Applications are registered in the context of ",(0,r.kt)("micro-lc",null)," through\nconfiguration key ",(0,r.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#applications"},(0,r.kt)("inlineCode",{parentName:"a"},"applications")),", a map linking application\n",(0,r.kt)("strong",{parentName:"p"},"unique identifiers")," to specific information needed for the ",(0,r.kt)("strong",{parentName:"p"},"integration"),"."),(0,r.kt)(l.Z,{language:"typescript",mdxType:"CodeBlock"},"interface Applications {","\n","  ","[unique_id: string]: ",(0,r.kt)("a",{href:"./iframes"},"IFrameApplication")," | ",(0,r.kt)("a",{href:"./compose"},"ComposableApplication")," | ",(0,r.kt)("a",{href:"./parcels"},"ParcelApplication"),"\n","}"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("div",null,(0,r.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"0",label:"YAML",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="micro-lc.config.yaml"',title:'"micro-lc.config.yaml"'},'applications:\n  iFrame:\n    integrationMode: iframe\n    route: ./my-iframe-application\n    src: https://www.wikipedia.org/\n    attributes:\n      title: Wikipedia\n      \n  compose:\n    integrationMode: compose\n    route: ./my-compose-application\n    config:\n      - tag: div\n        attributes:\n          style: "color: red;"\n        content: Hello World!\n  \n  parcel:\n    integrationMode: parcel\n    route: ./my-parcel-application\n    entry: https://my-static-server/my-parcel-entry.html\n'))),(0,r.kt)(c.Z,{value:"1",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="micro-lc.config.json"',title:'"micro-lc.config.json"'},'{\n  "applications": {\n    "iFrame": {\n      "integrationMode": "iframe",\n      "route": "./my-iframe-application",\n      "src": "https://www.wikipedia.org/",\n      "attributes": {\n        "title": "Wikipedia"\n      }\n    },\n    "compose": {\n      "integrationMode": "compose",\n      "route": "./my-compose-application",\n      "config": [\n        {\n          "tag": "div",\n          "attributes": {\n            "style": "color: red;"\n          },\n          "content": "Hello World!"\n        }\n      ]\n    },\n    "parcel": {\n      "integrationMode": "parcel",\n      "route": "./my-parcel-application",\n      "entry": "https://my-static-server/my-parcel-entry.html"\n    }\n  }\n}\n')))))))}y.isMDXComponent=!0}}]);