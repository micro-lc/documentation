"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6103],{3383:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(6687),r=n(4923),l=n(4768),o=n(3949),i=n(1452),c=n(5599),s=n(4047),u=n(4689),m=n(9586),d=n(97);function f(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,u.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,u.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e,t=(0,i.C)(),n=t.assets,r=t.metadata,o=r.title,c=r.description,s=r.date,u=r.tags,m=r.authors,d=r.frontMatter,f=d.keywords,v=null!=(e=n.image)?e:d.image;return a.createElement(l.d,{title:o,description:c,keywords:f,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:m.map((function(e){return e.url})).filter(Boolean).join(",")}),u.length>0&&a.createElement("meta",{property:"article:tag",content:u.map((function(e){return e.label})).join(",")}))}var g=n(9458);function p(e){var t=e.sidebar,n=e.children,r=(0,i.C)(),l=r.metadata,o=r.toc,u=l.nextItem,m=l.prevItem,d=l.frontMatter,v=d.hide_table_of_contents,p=d.toc_min_heading_level,h=d.toc_max_heading_level;return a.createElement(c.Z,{sidebar:t,toc:!v&&o.length>0?a.createElement(g.Z,{toc:o,minHeadingLevel:p,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(u||m)&&a.createElement(f,{nextItem:u,prevItem:m}))}function h(e){var t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},9458:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(4689),r=n(1986),l=n(6687),o=n(4923),i=n(8065);const c="tableOfContents_kUOC";var s=["className"];function u(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},8065:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(4689),r=n(1986),l=n(6687),o=n(9824),i=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return u(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,o.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=m(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function v(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}const g=l.memo(v);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,o.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,x=null!=b?b:L.tableOfContents.maxHeadingLevel,w=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:x});return f((0,l.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:x}}),[m,v,N,x])),l.createElement(g,(0,a.Z)({toc:w,className:i,linkClassName:m},E))}},320:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(1646),r=n(4923),l=n(6687);const o="browser-window_tmbm",i="browser-window-header_K85o",c="buttons_uHc7",s="browser-window-address-bar_pYY_",u="dot_giz1",m="browser-window-menu-icon_sffi",d="bar_rrRL",f="browser-window-body_Vexb";function v(e){var t=e.children,n=e.height,a=void 0===n?"700px":n,v=e.url,g=void 0===v?"http://localhost:3000":v;return l.createElement("div",{className:o,style:{height:a}},l.createElement("div",{className:i},l.createElement("div",{className:c},l.createElement("span",{className:u,style:{background:"#f25f58"}}),l.createElement("span",{className:u,style:{background:"#fbbe3c"}}),l.createElement("span",{className:u,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,r.Z)(s,"text--truncate")},g),l.createElement("div",{className:m},l.createElement("div",null,l.createElement("span",{className:d}),l.createElement("span",{className:d}),l.createElement("span",{className:d})))),l.createElement("div",{className:f},t))}var g=n(3152);function p(e){var t=e.base,n=e.filePath,a=(0,l.useState)(""),r=a[0],o=a[1];(0,l.useEffect)((function(){var e=[t,n].join(""),a=new AbortController;return fetch(e,{signal:a.signal}).then((function(e){return e.ok?e.text():Promise.reject(new TypeError("Cannot retrieve source code"))})).then((function(e){return o(e)})).catch((function(e){e instanceof DOMException&&"AbortError"===e.name||console.error(e)})),function(){a.abort()}}),[t,n]);var i=n.slice(2+(n.lastIndexOf(".")-1>>>0));return l.createElement(g.Z,{language:i},r)}var h=n(9397),b=n(9185);function E(e){var t=e.base,n=e.tabs,a=(0,l.useMemo)((function(){return n.map((function(e,n){var a=e.isDefault,r=e.filePath,o=e.label,i=null!=o?o:r.substring(r.lastIndexOf("/")+1);return l.createElement(h.Z,{default:a,key:n,label:i,value:n},l.createElement(p,{base:t,filePath:r}))}))}),[t,n]);return l.createElement(b.Z,null,a)}var L=n(6249);const N="micro_j8I5",x="lc_Z5FW";const w="error_G822";var _=n(2746);const k=Object.assign({},_.Z,{"example-frame":function(e){var t=e.base,n=e.height,r=e.showSource,o=void 0===r||r,i=e.sourceTabs,c=e.src,s=e.title,u=(0,l.useRef)(),m=(0,l.useState)(!0),d=m[0],f=m[1],g=(0,l.useState)(void 0),h=g[0],b=g[1],N=(0,a.Z)("/img/loading.svg");return(0,l.useEffect)((function(){var e,t,n,a,r,l,o;u.current&&(e=u.current,t=function(e){return b(e)},r=function(n){var r,l;void 0===n&&(n=null==(l=e.contentWindow)?void 0:l.location.href);var o=null!=(r=n)?r:"";if(o!==a)return a=o,t(o)},l=function(){setTimeout(r)},o=function(){var t,n;null==(t=e.contentWindow)||t.removeEventListener("unload",l),null==(n=e.contentWindow)||n.addEventListener("unload",l)},e.addEventListener("load",(function(){o(),r()})),null==(n=e.contentWindow)||n.addEventListener("popstate",(function(e){var t,n=null!=(t=e.target)?t:window;r(n.location.href)})),o())}),[u,u.current]),l.createElement(l.Fragment,null,l.createElement(v,{height:n,url:h},d&&l.createElement("div",{style:{background:"#ffffff",height:"40px",left:"calc(50% - 20px)",position:"absolute",top:"calc(50% - 20px)",width:"40px"}},l.createElement("img",{alt:"Loading...",src:N})),l.createElement("iframe",{onLoad:function(){return f(!1)},ref:function(e){u.current=e},src:[t,c].join(""),style:{height:"100%",width:"100%"},title:s})),o&&l.createElement(L.Z,{summary:l.createElement("summary",null,"Source code")},i?l.createElement(E,{base:t,tabs:i}):l.createElement(p,{base:t,filePath:c})))},"source-tabs":E,"micro-lc":function(){return l.createElement(l.Fragment,null,l.createElement("span",{className:N},"micro"),l.createElement("span",{className:x},"-lc"))},"console-error-line":function(e){var t=e.children;return l.createElement("p",{className:w},t)}})}}]);