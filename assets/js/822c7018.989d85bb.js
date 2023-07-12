"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8955],{55858:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=n(79501),a=n(42624),r=(n(76687),n(55858)),o=["components"],s={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},l=void 0,p={unversionedId:"docs/authentication",id:"version-1.0.0/docs/authentication",title:"Authentication",description:"Authentication configuration",source:"@site/versioned_docs/version-1.0.0/docs/authentication.md",sourceDirName:"docs",slug:"/docs/authentication",permalink:"/1.0.0/docs/authentication",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/authentication.md",tags:[],version:"1.0.0",lastUpdatedBy:"Paola",frontMatter:{id:"authentication",title:"Authentication",sidebar_label:"Authentication"},sidebar:"docs",previous:{title:"Overview",permalink:"/1.0.0/docs/introduction"},next:{title:"Analytics",permalink:"/1.0.0/docs/analytics"}},u={},c=[{value:"Authentication configuration",id:"authentication-configuration",level:2},{value:"Configuration structure",id:"configuration-structure",level:3},{value:"isAuthNecessary",id:"isauthnecessary",level:3},{value:"userInfoUrl",id:"userinfourl",level:3},{value:"userLogoutUrl",id:"userlogouturl",level:3},{value:"Example",id:"example",level:3},{value:"User authentication",id:"user-authentication",level:2},{value:"User info response",id:"user-info-response",level:3},{value:"Example",id:"example-1",level:4},{value:"Plugin ACL",id:"plugin-acl",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)(d,(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"authentication-configuration"},"Authentication configuration"),(0,r.kt)("p",null,"The endpoint that exposes the authentication configuration is ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/authentication"),"."),(0,r.kt)("h3",{id:"configuration-structure"},"Configuration structure"),(0,r.kt)("p",null,"The authentication configuration is a JSON object with two root properties which defines if the authentication process is expected\nand where the user information are provided."),(0,r.kt)("h3",{id:"isauthnecessary"},"isAuthNecessary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"type"),": boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"required"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"description"),": defines if the authentication process is expected.",(0,r.kt)("br",{parentName:"li"}),"This property can be used to avoid the authentication process, or to make a public instance of ",(0,r.kt)("inlineCode",{parentName:"li"},"micro-lc"),".")),(0,r.kt)("h3",{id:"userinfourl"},"userInfoUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"type"),": string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"required"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"description"),": defines which endpoint exposes the user information: it will be called using the ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," method.",(0,r.kt)("br",{parentName:"li"}),"If authentication is not expected, this should not be provided. Otherwise, it is mandatory.")),(0,r.kt)("h3",{id:"userlogouturl"},"userLogoutUrl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"type"),": string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"required"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"description"),": defines the page that will handle the user logout.",(0,r.kt)("br",{parentName:"li"}),"If authentication is not expected, this should not be provided. Otherwise, it is mandatory.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "isAuthNecessary": true,\n    "userInfoUrl": "https://example.com/your/authentication/api",\n    "userLogoutUrl": "https://example.com/your/logout/page"\n}\n')),(0,r.kt)("h2",{id:"user-authentication"},"User authentication"),(0,r.kt)("p",null,"The authentication process is optional and completely configurable.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/1.0.0/docs/authentication#authentication-configuration"},"authentication")," endpoint, that exposes the authentication configuration, is called first."),(0,r.kt)("p",null,"Then, the next endpoint to be called are different, depending on whether the authentication is required or not."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If authentication is not required (",(0,r.kt)("a",{parentName:"li",href:"/1.0.0/docs/authentication#isauthnecessary"},(0,r.kt)("inlineCode",{parentName:"a"},"isAuthNecessary = false")),"),\nthen only the ",(0,r.kt)("a",{parentName:"li",href:"/1.0.0/docs/core_configuration"},"configuration")," endpoint is called."),(0,r.kt)("li",{parentName:"ul"},"If authentication is required (",(0,r.kt)("a",{parentName:"li",href:"/1.0.0/docs/authentication#isauthnecessary"},(0,r.kt)("inlineCode",{parentName:"a"},"isAuthNecessary = true")),"),\nthen the endpoint provided in the ",(0,r.kt)("a",{parentName:"li",href:"/1.0.0/docs/authentication#userinfourl"},"userInfoUrl")," is called,\nin parallel with the ",(0,r.kt)("a",{parentName:"li",href:"/1.0.0/docs/core_configuration"},"configuration")," endpoint.")),(0,r.kt)("p",null,"The entire flow can be summarized with the following picture:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Authentication flow",src:n(29360).Z,width:"1492",height:"1326"})),(0,r.kt)("h3",{id:"user-info-response"},"User info response"),(0,r.kt)("p",null,"To be valid for ",(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc"),", the ",(0,r.kt)("a",{parentName:"p",href:"/1.0.0/docs/authentication#userinfourl"},"userInfoUrl")," response must adhere to the following JSON schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  type: 'object',\n  properties: {\n    avatar: {\n      type: 'string',\n    },\n    email: {\n      type: 'string',\n    },\n    groups: {\n      type: 'array',\n      items: {\n        type: 'string',\n      },\n    },\n    name: {\n      type: 'string',\n    },\n    nickname: {\n      type: 'string',\n    },\n  },\n  required: ['email', 'groups', 'name'],\n}\n")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "mocked.user@mia-platform.eu",\n  "groups": [\n    "users",\n    "admin"\n  ],\n  "name": "Mocked User",\n  "nickname": "mocked.user",\n  "avatar": "https://i2.wp.com/cdn.auth0.com/avatars/md.png?ssl=1"\n}\n')),(0,r.kt)("h2",{id:"plugin-acl"},"Plugin ACL"),(0,r.kt)("p",null,"Each plugin can optionally adhere to an ",(0,r.kt)("em",{parentName:"p"},"ACL"),",\nthat can be defined using the ",(0,r.kt)("a",{parentName:"p",href:"/1.0.0/docs/core_configuration#aclexpression"},(0,r.kt)("inlineCode",{parentName:"a"},"aclExpression"))," configuration."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To evaluate, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," is injected the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," object, take from the current user profiles (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"groups.admin && groups.ceo"),")")),(0,r.kt)("p",null,"The match between the ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," and the current user profiles is made by ",(0,r.kt)("strong",{parentName:"p"},"be-config"),".\n",(0,r.kt)("strong",{parentName:"p"},"be-config")," must receive the user profile in a header. Thanks to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUPS_HEADER_KEY"),", you can customize the names of the user profiles in ",(0,r.kt)("strong",{parentName:"p"},"be-config")," instance."),(0,r.kt)("p",null,"The only supported separator for the profiles injected in header is the comma ",(0,r.kt)("inlineCode",{parentName:"p"},",")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"admin,developer,owner"),")."),(0,r.kt)("p",null,"From version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.9.0"),", in addition to user profiles it is possible evaluate in the ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," also the user permissions required to access a specific resource.\n",(0,r.kt)("strong",{parentName:"p"},"be-config")," must receive the user's permissions in stringified additional properties object in a header. Thanks to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_PROPERTIES_HEADER_KEY"),", you can customize the header used in ",(0,r.kt)("strong",{parentName:"p"},"be-config")," instance. Though, the property that contains the user's permissions string array must be ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," as shown in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"{{USER_PROPERTIES_HEADER_KEY}}":"{\\"permissions\\":[\\"api.companies.view\\",\\"api.companies.create\\"]}"}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"From version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.9.0"),", in the ",(0,r.kt)("inlineCode",{parentName:"p"},"aclExpression")," is injected the ",(0,r.kt)("inlineCode",{parentName:"p"},"permissions")," object alongside the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," object, so it's possible to write them combining user profiles and permissions (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"groups.admin && permissions.api.companies.create"),")")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"micro-lc")," doesn't inject any header: they must be provided by external services.")))}h.isMDXComponent=!0},29360:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/microlc_auth_process-44835de68347569dc20fbade68ca20a7.png"}}]);