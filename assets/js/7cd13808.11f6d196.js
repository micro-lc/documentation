"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6799],{55858:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(76687);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=t(79501),i=t(42624),o=(t(76687),t(55858)),r=["components"],s={title:"Extensions",description:"Built-in and custom API extensions",sidebar_label:"Extensions",sidebar_position:40},l=void 0,p={unversionedId:"api/micro-lc-api/extensions",id:"api/micro-lc-api/extensions",title:"Extensions",description:"Built-in and custom API extensions",source:"@site/docs/api/micro-lc-api/extensions.md",sourceDirName:"api/micro-lc-api",slug:"/api/micro-lc-api/extensions",permalink:"/api/micro-lc-api/extensions",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/api/micro-lc-api/extensions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",sidebarPosition:40,frontMatter:{title:"Extensions",description:"Built-in and custom API extensions",sidebar_label:"Extensions",sidebar_position:40},sidebar:"api",previous:{title:"Routing",permalink:"/api/micro-lc-api/routing"},next:{title:"Composer API",permalink:"/api/composer-api"}},c={},d=[{value:"Manipulating extensions",id:"manipulating-extensions",level:2},{value:"<code>getExtensions</code>",id:"getextensions",level:3},{value:"<code>setExtension</code>",id:"setextension",level:3},{value:"Base extension",id:"base-extension",level:2},{value:"<code>css.setStyle</code>",id:"csssetstyle",level:3},{value:"<code>head.setIcon</code>",id:"headseticon",level:3},{value:"<code>head.setTitle</code>",id:"headsettitle",level:3},{value:"<code>json.fetcher</code>",id:"jsonfetcher",level:3},{value:"<code>json.validator</code>",id:"jsonvalidator",level:3},{value:"<code>language.getLanguage</code>",id:"languagegetlanguage",level:3},{value:"<code>language.setLanguage</code>",id:"languagesetlanguage",level:3}],u={toc:d},g="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)(g,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extensions is a grouping for static (i.e., not event-driven) API. ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," accepts plugins as keys in a JavaScript\nobject. ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," are initialized with a set of default features."),(0,o.kt)("h2",{id:"manipulating-extensions"},"Manipulating extensions"),(0,o.kt)("p",null,"To get currently mounted extensions, API provides method ",(0,o.kt)("inlineCode",{parentName:"p"},"getExtensions")," which returns an immutable object which\ncontains extensions as properties of an object. Being an immutable object, there is no direct way to modify it. If\na component or application need to add an extension, the API provides method ",(0,o.kt)("inlineCode",{parentName:"p"},"setExtension"),", which takes the scoping\nkey of the new extension and its content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Application 1 \u2935\nmicrolcApi.setExtension({ getUserName: () => 'John Doe' })\n\n// Application 2 \u2935\nconst userNameGetter = microlcApi.getExtensions().getUserName\nconsole.log(userNameGetter())\n// output: \"John Doe\"\n")),(0,o.kt)("h3",{id:"getextensions"},(0,o.kt)("inlineCode",{parentName:"h3"},"getExtensions")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi<T extends BaseExtension> {\n  // highlight-next-line\n  readonly getExtensions: () => Readonly<Partial<T>>\n  // ...rest of the API\n}\n")),(0,o.kt)("h3",{id:"setextension"},(0,o.kt)("inlineCode",{parentName:"h3"},"setExtension")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface MicrolcApi<T extends BaseExtension> {\n  // highlight-next-line\n  readonly setExtension: (key: keyof T, value: T[keyof T]) => Readonly<T>\n  // ...rest of the API\n}\n")),(0,o.kt)("h2",{id:"base-extension"},"Base extension"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type BaseExtension = Record<string, unknown> & {\n  css: { /*...*/ }\n  head: { /*...*/ }\n  json: { /*...*/ }\n  language: { /*...*/ }\n}\n")),(0,o.kt)("h3",{id:"csssetstyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"css.setStyle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  css: {\n    // highlight-next-line\n    setStyle: (styles: CSSConfig) => void\n  }\n}\n\ninterface CSSConfig {\n  global?: Record<string, string | number>\n  nodes?: Record<string, Record<string, string | number>>\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"head.setIcon")," can be used to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/style"},"inject styling")," in ",(0,o.kt)("micro-lc",null)," applications."),(0,o.kt)("h3",{id:"headseticon"},(0,o.kt)("inlineCode",{parentName:"h3"},"head.setIcon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  head: {\n    // highlight-next-line\n    setIcon: (attrs: Partial<Pick<HTMLLinkElement, 'sizes' | 'href' | 'type'>>) => void\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"head.setIcon")," can be used to set a ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," tag for ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Favicon"},"favicon"),"\nrelation."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be aware that any application with integration mode ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcel")," can override this\nsetting.")),(0,o.kt)("h3",{id:"headsettitle"},(0,o.kt)("inlineCode",{parentName:"h3"},"head.setTitle")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  head: {\n    // highlight-next-line\n    setTitle: (title: string) => void\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"head.setTitle")," can be used to set a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"},(0,o.kt)("inlineCode",{parentName:"a"},"title")," tag"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be aware that any application with integration mode ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcel")," can override this\nsetting.")),(0,o.kt)("h3",{id:"jsonfetcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"json.fetcher")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  json: {\n    // highlight-next-line\n    fetcher: (url: string, init?: RequestInit) => Promise<unknown>\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"json.fetcher")," can be used to download a JSON or YAML resource. It performs a GET request including an ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept")," header\nwith the following value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Accept: application/json,text/x-json,application/yaml,application/x-yaml,text/yaml\n")),(0,o.kt)("p",null,"The response is interpreted according to ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," header vale and then parsed as a JSON or a YAML accordingly."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be aware that YAML parsing requires an extra ~38 KB of dynamic import to be added to the total bundle size.")),(0,o.kt)("p",null,"and an ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header matching either the browser current language or any language that has been set via\n",(0,o.kt)("micro-lc",null)," API using the ",(0,o.kt)("a",{parentName:"p",href:"#languagesetlanguage"},(0,o.kt)("inlineCode",{parentName:"a"},"setLanguage"))," method. When the required language is\nexpressed ad ",(0,o.kt)("inlineCode",{parentName:"p"},"aa-AA"),", an extra generic language is added with a quality factor. On ",(0,o.kt)("inlineCode",{parentName:"p"},"en-US")," the header would be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Accept-Language: en-US, en;q=0.5\n")),(0,o.kt)("p",null,"This header can be leveraged in server ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation"},"content negotiation"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestInit")," type is the standard ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts#L1534"},"fetch option type")," where\n",(0,o.kt)("inlineCode",{parentName:"p"},"Accept")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," headers cannot be overridden."),(0,o.kt)("h3",{id:"jsonvalidator"},(0,o.kt)("inlineCode",{parentName:"h3"},"json.validator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  json: {\n    // highlight-next-line\n    validator: <S>(json: unknown, schema: SchemaOptions, opts?: JsonCatcherOptions<S>) => Promise<S>\n  }\n}\n\ntype SchemaOptions = Ajv.SchemaObject | {\n  id: string\n  parts: Ajv.SchemaObject[]\n}\n\ninterface JsonCatcherOptions<S> {\n  defaultValue?: S\n  file?: string\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This method works ",(0,o.kt)("strong",{parentName:"p"},"only")," in development mode. In production mode, simply proxies of the provided JSON.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"json.validator")," can be used to validate a JSON value against a schema using ",(0,o.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"Ajv"),"."),(0,o.kt)("p",null,"In case validation goes wrong, the return value would be the input object itself or, if you like to override it, the\ndefault value provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"opts.defaultValue"),". To better understand validation errors, messages can be scoped with\n",(0,o.kt)("inlineCode",{parentName:"p"},"opts.file"),"."),(0,o.kt)("h3",{id:"languagegetlanguage"},(0,o.kt)("inlineCode",{parentName:"h3"},"language.getLanguage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  language: {\n    // highlight-next-line\n    getLanguage: () => string\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"language.getLanguage")," can be used to retrieve current application language according to\n",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5646"},"rfc5646 specification"),". "),(0,o.kt)("h3",{id:"languagesetlanguage"},(0,o.kt)("inlineCode",{parentName:"h3"},"language.setLanguage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type BaseExtension = Record<string, unknown> & {\n  language: {\n    // highlight-next-line\n    setLanguage: (lang: string) => void\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"language.setLanguage")," can be used to set current application language to a valid\n",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5646"},"rfc5646 specification")," tag."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Be aware that, given the static nature of ",(0,o.kt)("micro-lc",null)," APi extensions, ",(0,o.kt)("inlineCode",{parentName:"p"},"language.setLanguage")," can be used\nto dynamically change language, but it will trigger a full ",(0,o.kt)("micro-lc",null)," config reload and update. This feature\nis required to properly re-negotiate a translated configuration file."),(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/api/micro-lc-api/reactive-communication"},"reactive communication section")," for event-driven alternatives, but keep in mind\nthat ",(0,o.kt)("micro-lc",null)," will use ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," extension to perform any language-related operation. ")))}m.isMDXComponent=!0}}]);