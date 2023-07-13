"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3095],{55858:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>N});var a=i(76687);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(i),s=n,N=k["".concat(o,".").concat(s)]||k[s]||d[s]||l;return i?a.createElement(N,r(r({ref:t},u),{},{components:i})):a.createElement(N,r({ref:t},u))}));function N(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:n,r[1]=p;for(var m=2;m<l;m++)r[m]=i[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},56702:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=i(79501),n=i(42624),l=(i(76687),i(55858)),r=["components"],p={id:"core_configuration",title:"Core configuration",sidebar_label:"Core configuration"},o=void 0,m={unversionedId:"docs/core_configuration",id:"version-1.0.0/docs/core_configuration",title:"Core configuration",description:"To compose the application, micro-lc needs to consume a configuration at runtime. When loaded, the",source:"@site/versioned_docs/version-1.0.0/docs/core_configuration.md",sourceDirName:"docs",slug:"/docs/core_configuration",permalink:"/1.0.0/docs/core_configuration",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/versioned_docs/version-1.0.0/docs/core_configuration.md",tags:[],version:"1.0.0",lastUpdatedBy:"dependabot[bot]",frontMatter:{id:"core_configuration",title:"Core configuration",sidebar_label:"Core configuration"},sidebar:"docs",previous:{title:"Base tag configuration",permalink:"/1.0.0/docs/base_tag_configuration"},next:{title:"General configuration",permalink:"/1.0.0/docs/general_configuration"}},u={},k=[{value:"Configuration structure",id:"configuration-structure",level:2},{value:"theming",id:"theming",level:3},{value:"shared",id:"shared",level:3},{value:"plugins",id:"plugins",level:3},{value:"internalPlugins",id:"internalplugins",level:3},{value:"analytics",id:"analytics",level:3},{value:"rightMenu",id:"rightmenu",level:3},{value:"Theming parameters",id:"theming-parameters",level:2},{value:"header",id:"header",level:3},{value:"pageTitle",id:"pagetitle",level:4},{value:"favicon",id:"favicon",level:4},{value:"logo",id:"logo",level:3},{value:"url_light_image",id:"url_light_image",level:4},{value:"url_dark_image",id:"url_dark_image",level:4},{value:"navigation_url",id:"navigation_url",level:4},{value:"alt",id:"alt",level:4},{value:"variables",id:"variables",level:3},{value:"primaryColor",id:"primarycolor",level:4},{value:"menuLocation",id:"menulocation",level:3},{value:"enableDarkMode",id:"enabledarkmode",level:3},{value:"Shared parameters",id:"shared-parameters",level:2},{value:"props",id:"props",level:3},{value:"Plugin parameters",id:"plugin-parameters",level:2},{value:"id",id:"id",level:3},{value:"aclExpression",id:"aclexpression",level:3},{value:"label",id:"label",level:3},{value:"icon",id:"icon",level:3},{value:"order",id:"order",level:3},{value:"integrationMode",id:"integrationmode",level:3},{value:"pluginRoute",id:"pluginroute",level:3},{value:"pluginUrl",id:"pluginurl",level:3},{value:"props",id:"props-1",level:3},{value:"category",id:"category",level:3},{value:"content",id:"content",level:3},{value:"externalLink",id:"externallink",level:3},{value:"url",id:"url",level:4},{value:"sameWindow",id:"samewindow",level:4},{value:"Internal plugin parameters",id:"internal-plugin-parameters",level:2},{value:"id",id:"id-1",level:3},{value:"aclExpression",id:"aclexpression-1",level:3},{value:"order",id:"order-1",level:3},{value:"integrationMode",id:"integrationmode-1",level:3},{value:"pluginRoute",id:"pluginroute-1",level:3},{value:"pluginUrl",id:"pluginurl-1",level:3},{value:"props",id:"props-2",level:3},{value:"externalLink",id:"externallink-1",level:3},{value:"url",id:"url-1",level:4},{value:"sameWindow",id:"samewindow-1",level:4},{value:"Analytics parameters",id:"analytics-parameters",level:2},{value:"privacyLink",id:"privacylink",level:3},{value:"disclaimer",id:"disclaimer",level:3},{value:"gtmId",id:"gtmid",level:3},{value:"Right menu parameters",id:"right-menu-parameters",level:2},{value:"entry",id:"entry",level:3},{value:"tag",id:"tag",level:3},{value:"attributes",id:"attributes",level:3},{value:"properties",id:"properties",level:3},{value:"Example",id:"example",level:2}],d={toc:k},s="wrapper";function N(e){var t=e.components,i=(0,n.Z)(e,r);return(0,l.kt)(s,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To compose the application, ",(0,l.kt)("inlineCode",{parentName:"p"},"micro-lc")," needs to consume a configuration at runtime. When loaded, the\n",(0,l.kt)("a",{parentName:"p",href:"/1.0.0/docs/introduction#front-end-container"},"fe-container")," performs a GET request to ",(0,l.kt)("inlineCode",{parentName:"p"},"/api/v1/microlc/configuration"),": the expected\nresponse is the configuration in JSON format. This endpoint is always called, even in parallel if necessary."),(0,l.kt)("h2",{id:"configuration-structure"},"Configuration structure"),(0,l.kt)("p",null,"The configuration is a JSON object with two root properties. It defines the theming of the application, and the\ncharacteristics of the plugins to render."),(0,l.kt)("h3",{id:"theming"},"theming"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the theming information. This property can be used to brand the application and to customize\nthe user experience.")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"#theming-parameters"},"theming parameters")," section for details."),(0,l.kt)("h3",{id:"shared"},"shared"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains shared properties to be injected into plugin elements. This property can be used to share HTTP headers/cookies and/or other amenities with underlying plugins.")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#shared-parameters"},"shared parameters")," section for details."),(0,l.kt)("h3",{id:"plugins"},"plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": array;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the list of the plugins to render. It contains information on how to integrate the plugins in ",(0,l.kt)("inlineCode",{parentName:"li"},"micro-lc"),".")),(0,l.kt)("p",null,"Each element of this array is an object correspondent to a plugin. The structure of the object is detailed in the\n",(0,l.kt)("a",{parentName:"p",href:"#plugin-parameters"},"plugin parameters")," section."),(0,l.kt)("h3",{id:"internalplugins"},"internalPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": array;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the list of the plugins that will be registered, but will not appear on the menu. It contains information on how to integrate the plugins in ",(0,l.kt)("inlineCode",{parentName:"li"},"micro-lc"),".")),(0,l.kt)("p",null,"Each element of this array is an object correspondent to an internal plugin. The structure of the object is detailed in the\n",(0,l.kt)("a",{parentName:"p",href:"#internal-plugin-parameters"},"internal plugin parameters")," section."),(0,l.kt)("h3",{id:"analytics"},"analytics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the analytics information. This property can be used to instantiate ",(0,l.kt)("a",{parentName:"li",href:"https://analytics.google.com/"},"Google Analytics"),"\nprevious user acceptance.")),(0,l.kt)("p",null,"For the details of its content, see the ",(0,l.kt)("a",{parentName:"p",href:"#analytics-parameters"},"analytics parameters")," section."),(0,l.kt)("h3",{id:"rightmenu"},"rightMenu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": array;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the list of web-components that will be injected in the right section of the topbar.")),(0,l.kt)("p",null,"For the details of its content, see the ",(0,l.kt)("a",{parentName:"p",href:"#right-menu-parameters"},"right menu parameters")," section."),(0,l.kt)("h2",{id:"theming-parameters"},"Theming parameters"),(0,l.kt)("p",null,"This bit of the configuration object enables the customization of some part of the user experience, as well as the\nbranding of the application."),(0,l.kt)("h3",{id:"header"},"header"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the properties that are usually applied in the HTML ",(0,l.kt)("inlineCode",{parentName:"li"},"header")," tag.")),(0,l.kt)("h4",{id:"pagetitle"},"pageTitle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the string that will be displayed on the browser tab;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Microlc"),".")),(0,l.kt)("h4",{id:"favicon"},"favicon"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the icon that will be displayed on the browser tab;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": Mia-Platform logo.")),(0,l.kt)("h3",{id:"logo"},"logo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the information needed to display the company logo.")),(0,l.kt)("h4",{id:"url_light_image"},"url_light_image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the logo image for light theme.")),(0,l.kt)("h4",{id:"url_dark_image"},"url_dark_image"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the logo image for dark theme.")),(0,l.kt)("h4",{id:"navigation_url"},"navigation_url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the site the users are redirected to when they click the logo.")),(0,l.kt)("h4",{id:"alt"},"alt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the alternative text to display if the logo is not found;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Logo"),".")),(0,l.kt)("h3",{id:"variables"},"variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the variables that will be used to brand the application, overriding the default style.")),(0,l.kt)("h4",{id:"primarycolor"},"primaryColor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the primary color of the application. Accepted values are 3, 6, or 8 digits Hex and ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords"},"CSS color keywords"),".",(0,l.kt)("br",{parentName:"li"}),"Its value is applied to the ",(0,l.kt)("inlineCode",{parentName:"li"},"--microlc-primary-color")," ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},(0,l.kt)("inlineCode",{parentName:"a"},"css variables")),",\nand is used to calculate the ",(0,l.kt)("strong",{parentName:"li"},"89% tint")," stored in the ",(0,l.kt)("inlineCode",{parentName:"li"},"--microlc-primary-color-tint-89")," variable;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"#1890FF"),".")),(0,l.kt)("h3",{id:"menulocation"},"menuLocation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the location on the page in which the menu will be rendered;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"sideBar"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"accepted values"),": ","[",(0,l.kt)("inlineCode",{parentName:"li"},"sideBar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"topBar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fixedSideBar"),"]",".")),(0,l.kt)("h3",{id:"enabledarkmode"},"enableDarkMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": boolean;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": indicate if your app supports the dark mode;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";")),(0,l.kt)("h2",{id:"shared-parameters"},"Shared parameters"),(0,l.kt)("p",null,"This bit of the configuration object enables the injection of common properties shared by plugins."),(0,l.kt)("h3",{id:"props"},"props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains an object with properties to inject on plugin components.")),(0,l.kt)("h2",{id:"plugin-parameters"},"Plugin parameters"),(0,l.kt)("p",null,"Information about the plugins to be embedded in the application are contained in these object."),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the unique identifier of the plugin.")),(0,l.kt)("h3",{id:"aclexpression"},"aclExpression"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": expression to evaluate the users that can access the plugin (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"groups.admin && groups.ceo")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"groups.admin && permissions.companies.view")," from version ",(0,l.kt)("inlineCode",{parentName:"li"},"0.9.0"),").")),(0,l.kt)("h3",{id:"label"},"label"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the label showed in the side menu.")),(0,l.kt)("h3",{id:"icon"},"icon"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the icon showed in the side menu. The supported icons are the\n",(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/icons?d=gallery&p=2&m=free"},"Font Awesome free")," ones. You have to specify all the needed\nclasses;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"example"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"fas fa-tag"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": no icon.")),(0,l.kt)("h3",{id:"order"},"order"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": integer;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the position in the side menu;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,l.kt)("h3",{id:"integrationmode"},"integrationMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"enum"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"href"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the way in which the plugin will be integrated in ",(0,l.kt)("inlineCode",{parentName:"li"},"micro-lc"),". See ",(0,l.kt)("a",{parentName:"li",href:"/1.0.0/docs/plugin_configuration"},"Plugin configuration")," section for mode details.")),(0,l.kt)("h3",{id:"pluginroute"},"pluginRoute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the path of the main application on which the plugin is rendered.")),(0,l.kt)("h3",{id:"pluginurl"},"pluginUrl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the entry point of the plugin (i.e., where the plugin is deployed).")),(0,l.kt)("h3",{id:"props-1"},"props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the properties injected during the boostrap of a plugin rendered with ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun"),".")),(0,l.kt)("h3",{id:"category"},"category"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": sub-menu category in which the plugin should be inserted;")),(0,l.kt)("h3",{id:"content"},"content"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": array;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": array of plugins to insert in sub-menu. This property makes the structure recursive;")),(0,l.kt)("h3",{id:"externallink"},"externalLink"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"href"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the details about the href integration.")),(0,l.kt)("h4",{id:"url"},"url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the external application.")),(0,l.kt)("h4",{id:"samewindow"},"sameWindow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": boolean;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": states if the link should be opened in a new window;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("h2",{id:"internal-plugin-parameters"},"Internal plugin parameters"),(0,l.kt)("p",null,"The information regarding the internal plugins to be embedded in the application are contained in these object."),(0,l.kt)("h3",{id:"id-1"},"id"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the unique identifier of the plugin.")),(0,l.kt)("h3",{id:"aclexpression-1"},"aclExpression"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": expression to evaluate the users that can access the plugin (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"groups.admin && groups.ceo"),").")),(0,l.kt)("h3",{id:"order-1"},"order"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": integer;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the position in the side menu;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,l.kt)("h3",{id:"integrationmode-1"},"integrationMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"enum"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"href"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the way in which the plugin will be integrated in ",(0,l.kt)("inlineCode",{parentName:"li"},"micro-lc"),". See ",(0,l.kt)("a",{parentName:"li",href:"/1.0.0/docs/plugin_configuration"},"Plugin configuration")," section for mode details.")),(0,l.kt)("h3",{id:"pluginroute-1"},"pluginRoute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the path of the main application on which the plugin is rendered.")),(0,l.kt)("h3",{id:"pluginurl-1"},"pluginUrl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"iframe"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the entry point of the plugin (i.e., where the plugin is deployed).")),(0,l.kt)("h3",{id:"props-2"},"props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the properties injected during the boostrap of a plugin rendered with ",(0,l.kt)("inlineCode",{parentName:"li"},"qiankun"),".")),(0,l.kt)("h3",{id:"externallink-1"},"externalLink"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"integrationMode")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"href"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": contains the details about the href integration.")),(0,l.kt)("h4",{id:"url-1"},"url"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": the url of the external application.")),(0,l.kt)("h4",{id:"samewindow-1"},"sameWindow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": boolean;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": states if the link should be opened in a new window;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"default"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"analytics-parameters"},"Analytics parameters"),(0,l.kt)("h3",{id:"privacylink"},"privacyLink"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": link used to redirect the user to the privacy policy.")),(0,l.kt)("h3",{id:"disclaimer"},"disclaimer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": disclaimer showed to the users, generally used to inform them about the cookies that will be used.")),(0,l.kt)("h3",{id:"gtmid"},"gtmId"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": container id for ",(0,l.kt)("a",{parentName:"li",href:"https://analytics.google.com/"},"Google Analytics"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"example"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"GTM-XXXXXX"),".")),(0,l.kt)("h2",{id:"right-menu-parameters"},"Right menu parameters"),(0,l.kt)("h3",{id:"entry"},"entry"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": link to the file containing the web-component declaration.")),(0,l.kt)("h3",{id:"tag"},"tag"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": string;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": name of the web-component (to be inserted in HTML tags).")),(0,l.kt)("h3",{id:"attributes"},"attributes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": generic object that contains the attributes to be injected for the web-component.")),(0,l.kt)("h3",{id:"properties"},"properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"type"),": object;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"required"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"description"),": generic object that contains the properties to be injected for the web-component.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "theming": {\n    "header": {\n      "pageTitle": "Mia-Platform",\n      "favicon": "https://favicon-url.com"\n    },\n    "logo": {\n      "url_light_image": "https://logo-url.com/light",\n      "url_dark_image": "https://logo-url.com/dark",\n      "alt": "My awesome logo"\n    },\n    "variables": {\n      "primaryColor": "red"\n    },\n    "menuLocation": "topBar"\n  },\n  "analytics": {\n    "privacyLink": "https://policies.google.com/",\n    "disclaimer": "We use analytics cookies for...",\n    "gtmId": "GTM-XXXXXX"\n  },\n  "rightMenu": [{\n    "entry": "https://test.it/my-web-components.es.js",\n    "tag": "my-web-component-name",\n    "attributes": {\n      "id": "abc"\n    },\n    "properties": {\n      "propA": true\n    }\n  }],\n  "plugins": [\n    {\n      "id": "plugin-1",\n      "aclExpression": "groups.admin || groups.superadmin",\n      "label": "Plugin number 1",\n      "icon": "fas fa-rocket",\n      "order": 0,\n      "integrationMode": "qiankun",\n      "pluginRoute": "/myAwesomePlugin",\n      "pluginUrl": "https://plugin-url.com",\n      "props": {}\n    },\n    {\n      "id": "plugin-2",\n      "label": "Plugin number 2",\n      "icon": "fas fa-tag",\n      "order": 1,\n      "integrationMode": "href",\n      "externalLink": {\n        "url": "https://external-site.com",\n        "sameWindow": false\n      }\n    }\n  ],\n  "internalPlugins": [\n    {\n      "id": "plugin-3",\n      "aclExpression": "groups.admin || groups.superadmin",\n      "order": 0,\n      "integrationMode": "qiankun",\n      "pluginRoute": "/myAwesomePlugin3",\n      "pluginUrl": "https://plugin-url.com",\n      "props": {}\n    }\n  ]\n}\n')))}N.isMDXComponent=!0}}]);