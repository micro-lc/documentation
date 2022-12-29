"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7411],{5599:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(1986),n=a(6687),l=a(4923),o=a(6187),i=a(9273),s=a(7899),c=a(9586);const m="sidebar_jpum",u="sidebarItemTitle_Kz1T",d="sidebarItemList_Izqi",g="sidebarItem_mTsU",p="sidebarItemLink_MbYH",v="sidebarItemLinkActive_QksM";function f(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:v},e.title))})))))}var h=a(846);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}function P(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(f,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,N),c=t&&t.items.length>0;return n.createElement(o.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(P,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},4047:(e,t,a)=>{a.d(t,{Z:()=>z});var r=a(6687),n=a(4923),l=a(1452),o=a(1646);function i(e){var t,a=e.children,n=e.className,i=(0,l.C)(),s=i.frontMatter,c=i.assets,m=(0,o.C)().withBaseUrl,u=null!=(t=c.image)?t:s.image;return r.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:m(u,{absolute:!0})}),a)}var s=a(7899);const c="title_sNvf";function m(e){var t=e.className,a=(0,l.C)(),o=a.metadata,i=a.isBlogPostPage,m=o.permalink,u=o.title,d=i?"h1":"h2";return r.createElement(d,{className:(0,n.Z)(c,t),itemProp:"headline"},i?u:r.createElement(s.Z,{itemProp:"url",to:m},u))}var u=a(9586),d=a(3704),g=["zero","one","two","few","many","other"];function p(e){return g.filter((function(t){return e.includes(t)}))}var v={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function f(){var e=(0,d.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:p(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),v}var t,a}),[e])}function h(){var e=f();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}const E="container_e9dD";function b(e){var t,a=e.readingTime,n=(t=h().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,n(a))}function P(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function N(){return r.createElement(r.Fragment,null," \xb7 ")}function _(e){var t=e.className,a=(0,l.C)().metadata,o=a.date,i=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,n.Z)(E,"margin-vert--md",t)},r.createElement(P,{date:o,formattedDate:i}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(N,null),r.createElement(b,{readingTime:s})))}function Z(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function k(e){var t=e.author,a=e.className,l=t.name,o=t.title,i=t.url,s=t.imageURL,c=t.email,m=i||c&&"mailto:"+c||void 0;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(Z,{href:m,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:l})),l&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(Z,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},l))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const T="authorCol_hSi8",C="imageOnlyAuthorRow_ODvb",y="imageOnlyAuthorCol_sGSD";function M(e){var t=e.className,a=(0,l.C)(),o=a.metadata.authors,i=a.assets;if(0===o.length)return null;var s=o.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?C:"row",t)},o.map((function(e,t){var a;return r.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?y:T),key:t},r.createElement(k,{author:Object.assign({},e,{imageURL:null!=(a=i.authorsImageUrls[t])?a:e.imageURL})}))})))}function w(){return r.createElement("header",null,r.createElement(m,null),r.createElement(_,null),r.createElement(M,null))}var I=a(3024),B=a(8020);function F(e){var t=e.children,a=e.className,o=(0,l.C)().isBlogPostPage;return r.createElement("div",{id:o?I.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},r.createElement(B.Z,null,t))}var D=a(1606),L=a(6982),x=a(4689),O=a(1986),R=["blogPostTitle"];function U(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function A(e){var t=e.blogPostTitle,a=(0,O.Z)(e,R);return r.createElement(s.Z,(0,x.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(U,null))}const S="blogPostFooterDetailsFull_bEg9";function j(){var e=(0,l.C)(),t=e.metadata,a=e.isBlogPostPage,o=t.tags,i=t.title,s=t.editUrl,c=t.hasTruncateMarker,m=!a&&c,u=o.length>0;return u||m||s?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",a&&S)},u&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},r.createElement(L.Z,{tags:o})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(D.Z,{editUrl:s})),m&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":u})},r.createElement(A,{blogPostTitle:i,to:t.permalink}))):null}function z(e){var t=e.children,a=e.className,o=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(i,{className:(0,n.Z)(o,a)},r.createElement(w,null),r.createElement(F,null,t),r.createElement(j,null))}},1452:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var r=a(6687),n=a(6017),l=r.createContext(null);function o(e){var t=e.children,a=e.content,n=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return r.createElement(l.Provider,{value:o},t)}function i(){var e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},457:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var n,l=e.split(/[#?]/)[0],o="/"===l||l===r?l:(n=l,a?function(e){return e.endsWith("/")?e:e+"/"}(n):function(e){return e.endsWith("/")?e.slice(0,-1):e}(n));return e.replace(l,o)}},3024:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var n=a(457);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}})}}]);