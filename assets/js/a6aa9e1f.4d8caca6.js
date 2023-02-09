"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3089],{84753:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(76687),r=n(64923),l=n(65327),c=n(86213),o=n(38104),i=n(87646),s=n(79229),u=n(96058);function m(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(u.Z,{permalink:n,title:a.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&a.createElement(u.Z,{permalink:r,title:a.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var d=n(73395),f=n(53105),E=n(50394);function g(e){var t=e.items,n=e.component,r=void 0===n?E.Z:n;return a.createElement(a.Fragment,null,t.map((function(e){var t=e.content;return a.createElement(f.n,{key:t.metadata.permalink,content:t},a.createElement(r,null,a.createElement(t,null)))})))}function b(e){var t=e.metadata,n=(0,l.Z)().siteConfig.title,r=t.blogDescription,o=t.blogTitle,i="/"===t.permalink?n:o;return a.createElement(a.Fragment,null,a.createElement(c.d,{title:i,description:r}),a.createElement(d.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,n=e.items,r=e.sidebar;return a.createElement(i.Z,{sidebar:r},a.createElement(g,{items:n}),a.createElement(m,{metadata:t}))}function v(e){return a.createElement(c.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(b,e),a.createElement(p,e))}},69097:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(50142),r=n(64923),l=n(76687);const c="browser-window_tmbm",o="browser-window-header_K85o",i="buttons_uHc7",s="browser-window-address-bar_pYY_",u="dot_giz1",m="browser-window-menu-icon_sffi",d="bar_rrRL",f="browser-window-body_Vexb";function E(e){var t=e.children,n=e.height,a=void 0===n?"700px":n,E=e.url,g=void 0===E?"http://localhost:3000":E;return l.createElement("div",{className:c,style:{height:a}},l.createElement("div",{className:o},l.createElement("div",{className:i},l.createElement("span",{className:u,style:{background:"#f25f58"}}),l.createElement("span",{className:u,style:{background:"#fbbe3c"}}),l.createElement("span",{className:u,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,r.Z)(s,"text--truncate")},g),l.createElement("div",{className:m},l.createElement("div",null,l.createElement("span",{className:d}),l.createElement("span",{className:d}),l.createElement("span",{className:d})))),l.createElement("div",{className:f},t))}var g=n(75621);function b(e){var t=e.base,n=e.filePath,a=(0,l.useState)(""),r=a[0],c=a[1];(0,l.useEffect)((function(){var e=[t,n].join(""),a=new AbortController;return fetch(e,{signal:a.signal}).then((function(e){return e.ok?e.text():Promise.reject(new TypeError("Cannot retrieve source code"))})).then((function(e){return c(e)})).catch((function(e){e instanceof DOMException&&"AbortError"===e.name||console.error(e)})),function(){a.abort()}}),[t,n]);var o=n.slice(2+(n.lastIndexOf(".")-1>>>0));return l.createElement(g.Z,{language:o},r)}var p=n(76080),v=n(74404);function h(e){var t=e.base,n=e.tabs,a=(0,l.useMemo)((function(){return n.map((function(e,n){var a=e.isDefault,r=e.filePath,c=e.label,o=null!=c?c:r.substring(r.lastIndexOf("/")+1);return l.createElement(p.Z,{default:a,key:n,label:o,value:n},l.createElement(b,{base:t,filePath:r}))}))}),[t,n]);return l.createElement(v.Z,null,a)}var w=n(93113);const N="micro_j8I5",Z="lc_Z5FW";const k="error_G822";var x=n(17303);const _=Object.assign({},x.Z,{"example-frame":function(e){var t=e.base,n=e.height,r=e.showSource,c=void 0===r||r,o=e.sourceTabs,i=e.src,s=e.title,u=(0,l.useRef)(),m=(0,l.useState)(!0),d=m[0],f=m[1],g=(0,l.useState)(void 0),p=g[0],v=g[1],N=(0,a.Z)("/img/loading.svg");return(0,l.useEffect)((function(){var e,t,n,a,r,l,c;u.current&&(e=u.current,t=function(e){return v(e)},r=function(n){var r,l;void 0===n&&(n=null==(l=e.contentWindow)?void 0:l.location.href);var c=null!=(r=n)?r:"";if(c!==a)return a=c,t(c)},l=function(){setTimeout(r)},c=function(){var t,n;null==(t=e.contentWindow)||t.removeEventListener("unload",l),null==(n=e.contentWindow)||n.addEventListener("unload",l)},e.addEventListener("load",(function(){c(),r()})),null==(n=e.contentWindow)||n.addEventListener("popstate",(function(e){var t,n=null!=(t=e.target)?t:window;r(n.location.href)})),c())}),[u,u.current]),l.createElement(l.Fragment,null,l.createElement(E,{height:n,url:p},d&&l.createElement("div",{style:{background:"#ffffff",height:"40px",left:"calc(50% - 20px)",position:"absolute",top:"calc(50% - 20px)",width:"40px"}},l.createElement("img",{alt:"Loading...",src:N})),l.createElement("iframe",{onLoad:function(){return f(!1)},ref:function(e){u.current=e},src:[t,i].join(""),style:{height:"100%",width:"100%"},title:s})),c&&l.createElement(w.Z,{summary:l.createElement("summary",null,"Source code")},o?l.createElement(h,{base:t,tabs:o}):l.createElement(b,{base:t,filePath:i})))},"source-tabs":h,"micro-lc":function(){return l.createElement(l.Fragment,null,l.createElement("span",{className:N},"micro"),l.createElement("span",{className:Z},"-lc"))},"console-error-line":function(e){var t=e.children;return l.createElement("p",{className:k},t)}})}}]);