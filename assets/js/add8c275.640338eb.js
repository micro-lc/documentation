"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6332],{82244:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var o=n(48792),i=n(91219),a=(n(76687),n(55858)),l=n(47998),r=n(50796),c=n(56940),s=["components"],d={title:"Layout",description:"Static portion of micro-lc",sidebar_label:"Layout",sidebar_position:20},m=void 0,p={unversionedId:"docs/guides/layout",id:"docs/guides/layout",title:"Layout",description:"Static portion of micro-lc",source:"@site/docs/docs/guides/layout.md",sourceDirName:"docs/guides",slug:"/docs/guides/layout",permalink:"/docs/guides/layout",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/guides/layout.md",tags:[],version:"current",lastUpdatedBy:"Umberto Toniolo",sidebarPosition:20,frontMatter:{title:"Layout",description:"Static portion of micro-lc",sidebar_label:"Layout",sidebar_position:20},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides/"},next:{title:"Routing",permalink:"/docs/guides/routing"}},u={},h=[{value:"Mount point",id:"mount-point",level:2},{value:"Composition",id:"composition",level:3},{value:"Build a layout",id:"build-a-layout",level:2},{value:"Slotting",id:"slotting",level:3},{value:"Two-level slotting",id:"two-level-slotting",level:4}],g={toc:h},k="wrapper";function y(t){var e=t.components,n=(0,i.Z)(t,s);return(0,a.kt)(k,(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A well-though, user-friendly layout is one of the most important aspect of a frontend application."),(0,a.kt)("p",null,"Whether we talk about classic top bar/sidebar navigation, peculiar layouts crafted around a specific need, or even no\nlayout at all, ",(0,a.kt)("micro-lc",null)," provides the flexibility to meet every requirement\n",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"dynamically composing")," applications layout at runtime on the basis of a user-supplied\n",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#layout"},"configuration"),"."),(0,a.kt)("h2",{id:"mount-point"},"Mount point"),(0,a.kt)("p",null,"To understand how layout works, it is important to talk about ",(0,a.kt)("micro-lc",null)," mount point, the place in DOM on\nwhich ",(0,a.kt)("micro-lc",null)," appends the dynamic content."),(0,a.kt)("p",null,"In its simplest (and default) form, ",(0,a.kt)("micro-lc",null)," mount point is a ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," tag with id ",(0,a.kt)("inlineCode",{parentName:"p"},"__micro_lc")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>"),"\ntag applying some base styling. The resulting tree depends on whether Shadow DOM is enabled, but regardless both the tags\nare rendered in the default DOM."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"0",label:"Tree with Shadow DOM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc>\n  #shadow-root (open)\n    <slot>\n      \u21aa\ufe0f <style>\n      \u21aa\ufe0f <div>\n    </slot>\n      \n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n    \n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }    \n  </style>\n      \n  <div id="__micro_lc">\n    \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n  </div>  \n</micro-lc>\n'))),(0,a.kt)(r.Z,{value:"1",label:"Tree without Shadow DOM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc disable-shadow-dom>\n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n    \n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n  </style>\n\n  <div id="__micro_lc">\n    \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n  </div>\n</micro-lc>\n')))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," ",(0,a.kt)("strong",{parentName:"p"},"is always rendered"),", since ",(0,a.kt)("micro-lc",null)," needs it to ensure content is correctly mounted. However,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," id ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},"can be changed"),", and the preset style\n",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#properties--attributes"},"can be disabled"),"."),(0,a.kt)("p",null,"Any application or page mounted here is recommended to have its highest HTML element equipped with a css that\nallows its own internal scrolling. A good fit could be, for ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/parcels"},"parcel applications"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".micro-lc-parcel-body {\n  height: inherit;\n  width: inherit;\n  overflow: auto;\n}\n")),(0,a.kt)("h3",{id:"composition"},"Composition"),(0,a.kt)("p",null,(0,a.kt)("micro-lc",null)," mount point can be personalized with the\nconfiguration key ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#mountpoint"},(0,a.kt)("inlineCode",{parentName:"a"},"mountPoint")),", which accepts a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#content-definition"},"content definition"),"."),(0,a.kt)(c.Z,{language:"typescript",mdxType:"CodeBlock"},"type MountPoint = string | number | ",(0,a.kt)("a",{href:"./applications/compose#component-representation"},"Component")," | (",(0,a.kt)("a",{href:"./applications/compose#component-representation"},"Component")," | number | string)[]"),(0,a.kt)("p",null,"The rationale behind a mount point personalization depends on Shadow DOM status:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if Shadow DOM is enabled, mount point allows to extend the layout with a portion outside Shadow DOM;"),(0,a.kt)("li",{parentName:"ul"},"if Shadow DOM is disabled, mount point is actually ",(0,a.kt)("strong",{parentName:"li"},"the only way")," to define a layout, since ",(0,a.kt)("inlineCode",{parentName:"li"},"layout")," key is not\nconsidered.")),(0,a.kt)("p",null,"In a customized mount point, the actual element in which ",(0,a.kt)("micro-lc",null)," should append the content likely needs\nto change. To instruct ",(0,a.kt)("micro-lc",null)," of the new mount point, use the\nconfiguration key ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#mountpointselector"},(0,a.kt)("inlineCode",{parentName:"a"},"mountPointSelector")),", which accepts a\nvalid ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#parameters"},"query selector")," to be run on\n",(0,a.kt)("micro-lc",null)," base ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," (i.e., the one with id ",(0,a.kt)("inlineCode",{parentName:"p"},"__micro_lc")," by default) subtree to find the new mount point."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Any content of the node referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"mountPointSelector")," will be ",(0,a.kt)("strong",{parentName:"p"},"substituted")," by ",(0,a.kt)("micro-lc",null)," content.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("inlineCode",{parentName:"p"},"mountPointSelector")," does not find a valid node, the ",(0,a.kt)("strong",{parentName:"p"},"whole mount point customization will be discarded")," and\n",(0,a.kt)("micro-lc",null)," will revert to its default settings.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example with Shadow DOM"),(0,a.kt)("div",null,(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"0",label:"Configuration",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'settings:\n  mountPoint:\n    tag: div\n    content:\n      - This is some addition to the layout outside micro-lc shadow-root\n      - tag: div\n        attributes:\n          id: custom_mount_point\n\n  mountPointSelector: "#custom_mount_point"\n\nlayout:\n  content:\n    tag: div\n    content:\n      - This is the layout\n      - tag: slot\n'))),(0,a.kt)(r.Z,{value:"1",label:"Resulting DOM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc>\n  #shadow-root (open)\n    <div>\n      This is the layout\n      <slot>\n        \u21aa\ufe0f <style>\n        \u21aa\ufe0f <div>\n      </slot>\n    </div>\n      \n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n    \n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }    \n  </style>\n      \n  <div id="__micro_lc">\n    <div>\n      This is some addition to the layout outside micro-lc shadow-root\n      <div id="custom_mount_point">\n        \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n      </div>\n    </div>\n  </div>  \n</micro-lc>\n')))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example without Shadow DOM"),(0,a.kt)("div",null,(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"0",label:"Configuration",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},'settings:\n  mountPoint:\n    tag: div\n    content:\n      - This is both layout and mount point, all outside micro-lc shadow-root\n      - tag: div\n        attributes:\n          id: custom_mount_point\n\n  mountPointSelector: "#custom_mount_point"\n'))),(0,a.kt)(r.Z,{value:"1",label:"Resulting DOM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc disable-shadow-dom>\n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n\n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }    \n  </style>\n\n  <div id="__micro_lc">\n    <div>\n      This is both layout and mount point, all outside micro-lc shadow-root\n      <div id="custom_mount_point">\n        \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n      </div>\n    </div>  \n  </div>\n</micro-lc>\n')))))),(0,a.kt)("h2",{id:"build-a-layout"},"Build a layout"),(0,a.kt)("p",null,"If ",(0,a.kt)("micro-lc",null)," ",(0,a.kt)("strong",{parentName:"p"},"Shadow DOM ",(0,a.kt)("a",{parentName:"strong",href:"/api/micro-lc-web-component#properties--attributes"},"is enabled")),", a\ncustom layout can be built using the configuration key ",(0,a.kt)("a",{parentName:"p",href:"/api/micro-lc-web-component#layout"},(0,a.kt)("inlineCode",{parentName:"a"},"layout")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Layout {\n  sources?:\n    | string\n    | string[]\n    | {\n        uris: string | string[]\n        importmap?: ImportMap\n      }\n  content: Content\n}\n")),(0,a.kt)("p",null,"Through this structure, ",(0,a.kt)("micro-lc",null)," is provided with a blueprint to follow to construct the desired DOM tree\ndynamically at runtime. The building blocks (",(0,a.kt)("inlineCode",{parentName:"p"},"content"),") are HTML5 elements or custom web components."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Take a look at ",(0,a.kt)("micro-lc",null)," ",(0,a.kt)("a",{parentName:"p",href:"../../add-ons/components"},"add-on components")," for ready-to-use layout solutions.")),(0,a.kt)("p",null,"The layout interface (and ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/composition"},"the engine")," behind its creation) has the same shape of the interface\nused to build composable applications. Hence, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/applications/compose#plugin-configuration"},"that section")," for\na detailed description of the subject."),(0,a.kt)("h3",{id:"slotting"},"Slotting"),(0,a.kt)("p",null,"When building custom layouts, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot"},(0,a.kt)("em",{parentName:"a"},"slots"))," can be used to\nmark placeholders to be filled with markup at runtime."),(0,a.kt)("p",null,"A ",(0,a.kt)("micro-lc",null)," layout ",(0,a.kt)("strong",{parentName:"p"},"needs one unnamed ",(0,a.kt)("inlineCode",{parentName:"strong"},"<slot>"))," (i.e., a ",(0,a.kt)("inlineCode",{parentName:"p"},"<slot>")," without the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot#attr-name"},"name attribute"),") to correctly mount the\ndynamic content."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"0",label:"Configuration",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"layout:\n  content:\n    - tag: div\n      attributes:\n        class: top-bar\n    - tag: div\n      attributes:\n        class: main-content\n      content:\n        - tag: div\n          attributes:\n            class: side-bar\n        # highlight-next-line\n        - tag: slot\n"))),(0,a.kt)(r.Z,{value:"1",label:"Resulting DOM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc>\n  #shadow-root (open)\n    <div class="top-bar"></div>\n    <div class="main-content">\n      <div class="side-bar"></div>\n      \x3c!-- highlight-start --\x3e\n      <slot>\n        \u21aa\ufe0f <style>\n        \u21aa\ufe0f <div>\n      </slot>\n      \x3c!-- highlight-end --\x3e  \n    </div>\n      \n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n    \n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }    \n  </style>\n      \n  <div id="__micro_lc">\n    \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n  </div>  \n</micro-lc>\n')))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"While ",(0,a.kt)("micro-lc",null)," requires an unnamed ",(0,a.kt)("inlineCode",{parentName:"p"},"<slot>"),", you can use as many named slots as you want to allow external\ninjection of content in specific spots of the layout.")),(0,a.kt)("h4",{id:"two-level-slotting"},"Two-level slotting"),(0,a.kt)("p",null,"If you build a custom web component to be used as layout, and you want it to be in Shadow DOM too, you will face the\nissue of mounting the content through two levels of shadow-root."),(0,a.kt)("p",null,"To make this work, you need to append a ",(0,a.kt)("inlineCode",{parentName:"p"},"<slot>")," as sibling of the layout web component Shadow DOM with the same name of\nthe inner content ",(0,a.kt)("inlineCode",{parentName:"p"},"<slot>")," so that any sibling of the layout is correctly mounted."),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"0",label:"Custom web component",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=my-awesome-component.js",title:"my-awesome-component.js"},"class MyAwesomeWebComponent extends HTMLElement {\n  constructor() {\n    super()\n\n    this._shadowRoot = this.attachShadow({ mode: 'open' })\n\n    this._container = this.ownerDocument.createElement('div')\n    // highlight-next-line\n    this._container.appendChild(this.ownerDocument.createElement('slot'))\n    this._shadowRoot.appendChild(this._container)\n\n    // highlight-next-line\n    this.appendChild(this.ownerDocument.createElement('slot'))\n  }\n}\n\ncustomElements.define('my-awesome-component', MyAwesomeWebComponent)\n"))),(0,a.kt)(r.Z,{value:"1",label:"Configuration",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=micro-lc.config.yaml",title:"micro-lc.config.yaml"},"layout:\n  sources: ./my-awesome-component.js\n  content:\n    - tag: my-awesome-component\n"))),(0,a.kt)(r.Z,{value:"2",label:"Resulting DOM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<micro-lc>\n  #shadow-root (open)\n    <my-awesome-component>\n      #shadow-root (open)\n      <div>\n        \x3c!-- highlight-start --\x3e\n        <slot>\n          \u21aa\ufe0f <slot>\n        </slot>\n        \x3c!-- highlight-end --\x3e\n      </div>\n      \x3c!-- highlight-start --\x3e\n      <slot>\n        \u21aa\ufe0f <style>\n        \u21aa\ufe0f <div>\n      </slot>\n      \x3c!-- highlight-end --\x3e\n    </my-awesome-component>\n      \n  <style>\n    div#__micro_lc {\n      width: 100%;\n      height: 100%;\n    }\n    \n    div#__micro_lc > :first-child {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }\n\n    div#__micro_lc > :first-child > div.composer-body {\n      width: inherit;\n      height: inherit;\n      overflow: hidden\n    }    \n  </slot>\n      \n  <div id="__micro_lc">\n    \x3c!-- Here micro-lc will mount the dynamic content --\x3e\n  </div>  \n</micro-lc>\n')))))}y.isMDXComponent=!0}}]);