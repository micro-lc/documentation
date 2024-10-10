"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(34334);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),o=n(34334),i=n(12466),l=n(16550),p=n(91980),s=n(67392),u=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,p._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,p=void 0!==l&&l,s=e.groupId,c=d(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),b=h[0],v=h[1],g=f({queryString:p,groupId:s}),k=g[0],y=g[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=C[0],w=C[1],x=function(){var e=null!=k?k:N;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){x&&v(x)}),[x]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,c]),tabValues:c}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,n=e.block,l=e.selectedValue,p=e.selectValue,s=e.tabValues,u=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==l&&(c(t),p(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function C(e){var t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(74866),l=n(85162),p=["components"],s={title:"Composer API",description:"micro-lc composer API",sidebar_label:"Composer API",sidebar_position:30},u=void 0,c={unversionedId:"api/composer-api",id:"api/composer-api",title:"Composer API",description:"micro-lc composer API",source:"@site/docs/api/composer-api.md",sourceDirName:"api",slug:"/api/composer-api",permalink:"/api/composer-api",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/composer-api.md",tags:[],version:"current",lastUpdatedBy:"epessina",sidebarPosition:30,frontMatter:{title:"Composer API",description:"micro-lc composer API",sidebar_label:"Composer API",sidebar_position:30},sidebar:"api",previous:{title:"Extensions",permalink:"/api/micro-lc-api/extensions"}},d={},m=[{value:"<code>premount</code>",id:"premount",level:3},{value:"<code>createComposerContext</code>",id:"createcomposercontext",level:3},{value:"<code>render</code>",id:"render",level:3},{value:"Standalone usage",id:"standalone-usage",level:2}],f={toc:m},h="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any HTML element mounted in ",(0,o.kt)("micro-lc",null)," via ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout"},"layout")," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/layout#mount-point"},"mount point"),", or any\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose"},"composable application")," is provided with the property ",(0,o.kt)("inlineCode",{parentName:"p"},"composerApi"),", which\nprovides the same dynamic capability for ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"mounting HTML subtrees")," ",(0,o.kt)("micro-lc",null),"\nitself uses under the hood."),(0,o.kt)("p",null,"The composer API is an object with two methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"premount")," which flattens polymorphic configurations and injects import maps, and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createComposerContext")," which builds an appender that can be called by assigning a root HTML DOM appending the\ndynamically configured HTML DOM as subtree of the root."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"render")," wraps ",(0,o.kt)("inlineCode",{parentName:"li"},"lit-html")," ",(0,o.kt)("inlineCode",{parentName:"li"},"render")," method and injects a ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/applications/compose#properties-injection"},"context"))),(0,o.kt)("h3",{id:"premount"},(0,o.kt)("inlineCode",{parentName:"h3"},"premount")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  premount: (\n    config: PluginConfiguration,\n    proxyWindow?: ImportShimContext,\n    reporter?: (err: unknown) => void\n  ) => Promise<ResolvedConfig>\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"premount")," allows to reduce the\n",(0,o.kt)("a",{parentName:"p",href:"localhost:3000/docs/guides/applications/compose#plugin-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"PluginConfiguration")," type")," to the following\n",(0,o.kt)("inlineCode",{parentName:"p"},"ResolvedConfig")," type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ResolvedConfig {\n  content: Content\n  sources: {\n    importmap?: ImportMap\n    uris: string[]\n  }\n}\n")),(0,o.kt)("p",null,"the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyWindow")," which defaults to the current ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"importShim")," interface, allows\nto override the importmap features, namely to set a no-op behaviour or select an iframe window. Notice that the\ninterface is equivalent to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ImportShimContext {\n  importShim<D, E extends Record<string, unknown>>(\n    uri: string, parentUrl?: string\n  ): Promise<{ default: D } & E>\n}\n")),(0,o.kt)("p",null,"After being called, ",(0,o.kt)("inlineCode",{parentName:"p"},"premount")," ensures all import maps declared are available and ",(0,o.kt)("inlineCode",{parentName:"p"},"uris")," sources have been fetched and\ntheir code run. If there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginConfiguration"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"premount")," is a no-operation.\nMoreover an error reporter can be injected since ",(0,o.kt)("inlineCode",{parentName:"p"},"premount")," will not throw on errors."),(0,o.kt)("h3",{id:"createcomposercontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"createComposerContext")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  createComposerContext: (\n    content: Content,\n    options: ComposerOptions\n  ) => Promise<ComposerContextAppender>\n}\n")),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"premount")," has been run, if needed, ",(0,o.kt)("inlineCode",{parentName:"p"},"createComposerContext")," provides a callback for appending the DOM\nconfigured in ",(0,o.kt)("inlineCode",{parentName:"p"},"content"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ComposerContextAppender = (container: HTMLElement | DocumentFragment, options?: RenderOptions) => void\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," is the root element that will be used to append the composed subtree and ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),"\nrefer to optional features provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://lit.dev/docs/api/templates/#render"},(0,o.kt)("inlineCode",{parentName:"a"},"lit-html")," ",(0,o.kt)("inlineCode",{parentName:"a"},"render")," method"),"."),(0,o.kt)("p",null,"Finally, ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"createComposerContext")," is the object to interact with when the compiler needs to be\ninstructed to recognize some properties as special context. This feature allows to inject JS context avoiding eval and\nworks according to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#interpolated-properties"},"composability principles"),"."),(0,o.kt)("h3",{id:"render"},(0,o.kt)("inlineCode",{parentName:"h3"},"render")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ComposerApi {\n  // ... rest of the API\n  render: (\n    config: ResolvedConfig,\n    container: HTMLElement,\n    context: Record<string, unknown> = {}\n  ) => Promise<ComposerContextAppender>\n}\n")),(0,o.kt)("p",null,"Alternatively, if the use case requires to append a ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolvedConfig")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"container")," html element\nand inject a ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," of properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," provides a useful shortcut."),(0,o.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,o.kt)("p",null,"The composer API can be directly injected in your browser as a module by adding a script import from CDN source\nor in your code as a ",(0,o.kt)("inlineCode",{parentName:"p"},"dependency"),"."),(0,o.kt)("p",null,"To add it to your codebase: "),(0,o.kt)(i.Z,{groupId:"pkg-manager",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @micro-lc/composer\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @micro-lc/composer\n")))),(0,o.kt)("p",null,"Otherwise, add to your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <script type="importmap">\n    {\n      "imports": {\n        "@micro-lc/composer": "https://cdn.jsdelivr.net/npm/@micro-lc/composer@latest/dist/bundle/index.min.js"\n      }\n    }\n  <\/script>\n')),(0,o.kt)("p",null,"and then use it in your scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n  <div id="root"></div>\n  <script type="module">\n    import {render} from \'@micro-lc/composer\'\n\n    (async function () {\n      const root = document.getElementById(\'root\')\n\n      render({content: "Hello \ud83d\udc4b"}, root)\n    })()\n  <\/script>\n</body>\n')),(0,o.kt)("p",null,"in case your browser does not support modules we recommend to add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/guybedford/es-module-shims"},"es-module-shims"),"."))}b.isMDXComponent=!0}}]);