"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4100],{5858:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2886:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(6687),o=n(4923);const i="tabItem_EP2U";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},406:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(6428),o=n(6687),i=n(4923),r=n(3634),l=n(6844),s=n(3667),p=n(3107);const c="tabList_jxcF",m="tabItem_Lqs7";function u(e){var t,n,r=e.lazy,u=e.block,d=e.defaultValue,b=e.values,h=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,x=(0,o.useState)(y),C=x[0],O=x[1],S=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=w[h];null!=M&&M!==C&&k.some((function(e){return e.value===M}))&&O(M)}var P=function(e){var t=e.currentTarget,n=S.indexOf(t),a=k[n].value;a!==C&&(j(t),O(a),null!=h&&T(h,String(a)))},E=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,o=S.indexOf(e.currentTarget)+1;n=null!=(a=S[o])?a:S[0];break;case"ArrowLeft":var i,r=S.indexOf(e.currentTarget)-1;n=null!=(i=S[r])?i:S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onClick:P},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},5080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var a=n(6428),o=n(8920),i=n(6687),r=n(5858),l=n(406),s=n(2886),p=["components"],c={title:"Composition",description:"DOM composition from markup language content",sidebar_label:"Composition",sidebar_position:20},m=void 0,u={unversionedId:"docs/concepts/composition",id:"docs/concepts/composition",title:"Composition",description:"DOM composition from markup language content",source:"@site/docs/docs/concepts/composition.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/composition",permalink:"/docs/concepts/composition",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/composition.md",tags:[],version:"current",lastUpdatedBy:"Michel Murabito",sidebarPosition:20,frontMatter:{title:"Composition",description:"DOM composition from markup language content",sidebar_label:"Composition",sidebar_position:20},sidebar:"docs",previous:{title:"Separation of concerns",permalink:"/docs/concepts/separation-of-concerns"},next:{title:"Communication",permalink:"/docs/concepts/communication"}},d={},b=[{value:"How it works",id:"how-it-works",level:2},{value:"The complete process",id:"the-complete-process",level:3}],h={toc:b};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The key of ",(0,r.kt)("micro-lc",null)," flexibility lies \u2013 among others \u2013 in the built-in capacity of ",(0,r.kt)("strong",{parentName:"p"},"transforming")," a string or\na serialization markup language content, as JSON or YAML, into a valid, appendable DOM. "),(0,r.kt)("p",null,"This behaviour enables the possibility to dynamically instruct ",(0,r.kt)("micro-lc",null)," on the shape of a page by writing a\nconfiguration file to be loaded at runtime, and can be applied both on ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," and content\nwhen using ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"compose integration")," strategy."),(0,r.kt)("p",null,"Let us take a look at a working example. The frame below shows a simple use case where the page is divided into layout\nand content and both are constructed dynamically from a textual configuration."),(0,r.kt)(i.Fragment,null),(0,r.kt)("example-frame",{base:"../../frames/concepts/composition",height:"550px",sourceTabs:[{filePath:"/index.html"},{filePath:"/config.yaml",isDefault:!0}],src:"/",title:"Composition"}),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The composition functionality is exposed though ",(0,r.kt)("micro-lc",null)," ",(0,r.kt)("a",{parentName:"p",href:"/api/composer-api"},"composer API"),".")),(0,r.kt)("p",null,"At height level, this feature is achieved by leveraging\n",(0,r.kt)("a",{parentName:"p",href:"https://lit.dev/docs/libraries/standalone-templates/"},"lit-html library")," APIs combined with a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lexical_analysis"},"lexer")," and a ",(0,r.kt)("em",{parentName:"p"},"non-eval")," interpolation library."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"One of the main feature of ",(0,r.kt)("micro-lc",null)," composition is, actually, that it does not exploit any kind of unsafe\nruntime evaluation (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),") which are strongly discouraged on websites and mitigated via\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions"},"omission in ",(0,r.kt)("inlineCode",{parentName:"a"},"Content-Security-Policy")),".")),(0,r.kt)("p",null,"Almost any HTML element can be seen, from the point of view of the DOM, as the combination of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a tag (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<header>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<aside>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<img>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<micro-lc>"),"),"),(0,r.kt)("li",{parentName:"ul"},"a list of attributes (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},'style="margin: 10px;"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'class="my-css-class"'),"),"),(0,r.kt)("li",{parentName:"ul"},"a list of boolean attributes (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),"),"),(0,r.kt)("li",{parentName:"ul"},"a list of properties injected by JavaScript on the DOM counterpart of the given element,"),(0,r.kt)("li",{parentName:"ul"},"a content inside of the tag, (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello, World!"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>My Paragraph</p>"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML element"',title:'"HTML','element"':!0},"<p \u2b05 Tag\n  id=\"my-awesome-paragraph\" \u2b05 Attribute\n  disabled \u2b05 Boolean attribute\n>\n  Hello, World! \u2b05 Content\n</p>\n\n<script>\n  const element = document.getElementById('my-awesome-paragraph')\n  element.className = 'my-custom-dynamic-class' \u2b05 Property\n<\/script>\n")),(0,r.kt)("p",null,"HTML elements can be full represented in JavaScript with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"lit-html")," ES6\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"tagged templates"),",\nthat evaluate attributes, boolean attributes and properties. The example above would translate in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Lit HTML element rappresentation"',title:'"Lit',HTML:!0,element:!0,'rappresentation"':!0},"import {html} from 'lit-html'\n\nconst customClassName = 'my-custom-dynamic-class'\n\nconst template = html`\n  <p \u2b05 Tag\n    id=\"my-awesome-paragraph\" \u2b05 Attribute\n    disabled=\"\" \u2b05 Boolean attribute\n    .className=${customClassName} \u2b05 Property\n  >\n    Hello, World! \u2b05 Content\n  </p>\n`\n")),(0,r.kt)("p",null,"Now that the desired HTML tree is described in JavaScript, a ",(0,r.kt)("strong",{parentName:"p"},"render function")," attaches the template to a provided\ncontainer (i.e., another HTML element) by interpreting non-dotted keys (e.g, ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled"),") as attributes, and dotted\nkeys (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),") as JavaScript properties."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In ",(0,r.kt)("micro-lc",null)," composition api, properties can be any combination of numbers, strings, arrays or JSON\nequivalent objects.")),(0,r.kt)("p",null,"Before doing this, however, we need to address the fact that we do not know the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"customClassName")," at compile\ntime, and we would like to inject it at runtime (without using ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),", of course!). To solve this issue,\n",(0,r.kt)("micro-lc",null)," provides a ",(0,r.kt)("strong",{parentName:"p"},"lexer")," and an ",(0,r.kt)("strong",{parentName:"p"},"interpolation API")," to plug a\n",(0,r.kt)("a",{parentName:"p",href:"https://lit.dev/docs/templates/expressions/#well-formed-html"},"fully compliant")," template literal to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lit-html"),"\nlibrary."),(0,r.kt)("p",null,"Together, these tools make the ",(0,r.kt)("a",{parentName:"p",href:"/api/composer-api"},"composition API"),", the flow of which is fully visualized in the\nexample below."),(0,r.kt)("h3",{id:"the-complete-process"},"The complete process"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"0",label:"Starting point",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Let us consider the following JSON file describing what we would like out DOM to be."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON DOM description"',title:'"JSON',DOM:!0,'description"':!0},'{\n  "tag": "div",\n  "attributes": {\n    "style": "margin: 10px;"\n  },\n  "content": [\n    {\n      "tag": "p",\n      "content": "Some Text"\n    },\n    {\n      "tag": "button",\n      "booleanAttributes": ["disabled"],\n      "properties": {\n        "myProp": { "foo": "bar" },\n        "special": "special.[0]"\n      },\n      "content": "Click Me!"\n    }\n  ]\n}\n'))),(0,r.kt)(s.Z,{value:"1",label:"First step",mdxType:"TabItem"},(0,r.kt)("p",null,"The first step consists in parsing the JSON file into JavaScript object (and \u2013 ",(0,r.kt)("em",{parentName:"p"},"if in development mode")," \u2013 checking it\nagainst a provided ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON schema"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JavaScript parsed object"',title:'"JavaScript',parsed:!0,'object"':!0},"const obj = {\n  tag: 'div',\n  attributes: {\n    style: 'margin: 10px;'\n  },\n  content: [\n    {\n      tag: 'p',\n      content: 'Some Text',\n    },\n    {\n      tag: 'button',\n      booleanAttributes: ['disabled'],\n      properties: {\n        myProp: { foo: 'bar' },\n        special: 'special.[0]'\n      },\n      content: 'Click Me!'\n    },\n  ],\n}\n"))),(0,r.kt)(s.Z,{value:"2",label:"Second step",mdxType:"TabItem"},(0,r.kt)("p",null,"The second step consists in transforming the JavaScript object into a template literal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Template literal"',title:'"Template','literal"':!0},"const literals = [\n  '<div style=\"margin: 10px;\"><p>Some Text</p><button disabled .myProp=',\n  ' .special=',\n  '>Click Me!</button></div>'\n]\n\nconst values = [\"{\\\"foo\\\":\\\"bar\\\"}\", 'special.[0]']\n"))),(0,r.kt)(s.Z,{value:"3",label:"Third step",mdxType:"TabItem"},(0,r.kt)("p",null,"The third step consists in parsing values associated with properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Template literal with parsed values"',title:'"Template',literal:!0,with:!0,parsed:!0,'values"':!0},"const literals = [\n  '<div style=\"margin: 10px;\"><p>Some Text</p><button disabled .myProp=',\n  ' .special=',\n  '>Click Me!</button></div>'\n]\n\nconst values = [{ foo: 'bar' }, 'special.[0]']\n"))),(0,r.kt)(s.Z,{value:"4",label:"Fourth step",mdxType:"TabItem"},(0,r.kt)("p",null,"The fourth step consists in interpolating values with any previously provided context (similar to\n",(0,r.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"handlebars"),", without the usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Interpolated context"',title:'"Interpolated','context"':!0},"const context = { special: [1, 'string'] }\ninterpolate(values, context)\n\n// Output: [{ foo: 'bar' }, 1]\n"))),(0,r.kt)(s.Z,{value:"5",label:"Final result",mdxType:"TabItem"},(0,r.kt)("p",null,"Finally, the result is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"lit-html")," render."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Final HTML result"',title:'"Final',HTML:!0,'result"':!0},"<div style=\"margin: 10px;\">\n  <p>Some Text</p>\n  <button disabled>\n    Click Me!\n  </button>\n</div>\n\n<script>\n  const buttonElement = document.querySelector('button')\n  \n  console.log(buttonElement.myProp, button.special)\n  // Output: { foo: 'bar' }, 1\n<\/script>\n")))))}f.isMDXComponent=!0}}]);