"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5888],{5858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(6687);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9397:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(6687),o=n(4923);const r="tabItem_EP2U";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},9185:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4689),o=n(6687),r=n(4923),i=n(3634),l=n(6844),s=n(3667),c=n(3107);const u="tabList_jxcF",p="tabItem_Lqs7";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),O=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,o.useState)(w),T=E[0],D=E[1],S=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=O[h];null!=j&&j!==T&&g.some((function(e){return e.value===j}))&&D(j)}var C=function(e){var t=e.currentTarget,n=S.indexOf(t),a=g[n].value;a!==T&&(x(t),D(a),null!=h&&N(h,String(a)))},M=function(e){var t,n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":var a,o=S.indexOf(e.currentTarget)+1;n=null!=(a=S[o])?a:S[0];break;case"ArrowLeft":var r,i=S.indexOf(e.currentTarget)-1;n=null!=(r=S[i])?r:S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:M,onClick:C},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},5150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(4689),o=n(1986),r=n(6687),i=n(5858),l=(n(9185),n(9397),["components"]),s={title:"Separation of concerns",description:"micro-lc viewport and DOM management",sidebar_label:"Separation of concerns",sidebar_position:10},c=void 0,u={unversionedId:"docs/concepts/separation-of-concerns",id:"docs/concepts/separation-of-concerns",title:"Separation of concerns",description:"micro-lc viewport and DOM management",source:"@site/docs/docs/concepts/separation-of-concerns.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/separation-of-concerns",permalink:"/docs/concepts/separation-of-concerns",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/concepts/separation-of-concerns.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:10,frontMatter:{title:"Separation of concerns",description:"micro-lc viewport and DOM management",sidebar_label:"Separation of concerns",sidebar_position:10},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/concepts/"},next:{title:"Composition",permalink:"/docs/concepts/composition"}},p={},d=[{value:"DOM management",id:"dom-management",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," is a web-component meant to be embedded in any web page. Within its context, it splits the viewport\nin two parts, ",(0,i.kt)("strong",{parentName:"p"},"layout")," and ",(0,i.kt)("strong",{parentName:"p"},"content"),", which are technically independent of one another, but can\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/communication"},"communicate")," to fill the functional need of cohesion."),(0,i.kt)(r.Fragment,null),(0,i.kt)("example-frame",{base:"../../frames/concepts/separation-of-concerns",height:"550px",showSource:!1,src:"/",title:"Viewport separation"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The example above shows an application featuring a classic top bar/sidebar layout. Sometimes this might be neither the\ncase nor the best option, and that's why ",(0,i.kt)("micro-lc",null)," does not limit the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"shape and size of layout")," in any way.")),(0,i.kt)("p",null,"The main difference between layout and content is that layout is ",(0,i.kt)("strong",{parentName:"p"},"static"),", independent of the current window history\nstate (i.e., it does not refresh on URL changes), while content is ",(0,i.kt)("strong",{parentName:"p"},"dynamic"),", updating in response to useragent-driven\nURL changes."),(0,i.kt)("p",null,"This dual nature of ",(0,i.kt)("micro-lc",null)," is well-reflected on its\n",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#configuration"},"configuration"),", since there is no overlap between layout and content\ncomposition."),(0,i.kt)("h2",{id:"dom-management"},"DOM management"),(0,i.kt)("p",null,"Being ",(0,i.kt)("micro-lc",null)," a web component, it has access to the\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"Shadow DOM API"),", which\n",(0,i.kt)("a",{parentName:"p",href:"#disabling-shadow-dom"},"can be used")," to encapsulate the layout."),(0,i.kt)("p",null,"This behaviour enables a complete separation between content and layout ",(0,i.kt)("strong",{parentName:"p"},"business logic"),". Separation which gains\nimportance considering the static and unmoving nature of layout with respect to the dynamism of content: layout should\nbehave the same way regardless of the current state of content and should not leak any internal logic besides the ones\nelected as touch points. Moreover, Shadow DOM brings a complete ",(0,i.kt)("strong",{parentName:"p"},"style segregation")," and the possibility to use\n",(0,i.kt)("strong",{parentName:"p"},"slots")," in the layout, which greatly enhance its flexibility and re-usability."),(0,i.kt)("p",null,"Even if it brings all the benefits detailed above, there may be some use cases for which ",(0,i.kt)("micro-lc",null)," Shadow\nDOM is not suitable and should be ",(0,i.kt)("strong",{parentName:"p"},"turned off"),"."),(0,i.kt)("p",null,"Examples may include the need to use in layout components with listeners attached to ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," firing\n",(0,i.kt)("a",{parentName:"p",href:"https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/"},"not ",(0,i.kt)("inlineCode",{parentName:"a"},"composed")," events"),", global theming\nissues where CSS styles has to be accessible by both layout and content, desire to control the entire HTML in a single\nplace configuring both layout and content in the mount point."),(0,i.kt)("p",null,(0,i.kt)("micro-lc",null)," offers the possibility to disable Shadow DOM, rendering content and layout in a single root, with\n",(0,i.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},(0,i.kt)("inlineCode",{parentName:"a"},"disableShadowDom"))," property (or mirrored boolean attribute\n",(0,i.kt)("inlineCode",{parentName:"p"},"disable-shadow-dom"),")."),(0,i.kt)("p",null,"For an in-depth explanation on ",(0,i.kt)("micro-lc",null)," DOM management, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout section"),"."))}f.isMDXComponent=!0}}]);