"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3122],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"Step 8: Webserver",description:"tutorial step to feed sources to micro-lc via backend",sidebar_label:"Step 8: Webserver",sidebar_position:60},s=void 0,c={unversionedId:"docs/compose-your-frontend/webserver",id:"docs/compose-your-frontend/webserver",title:"Step 8: Webserver",description:"tutorial step to feed sources to micro-lc via backend",source:"@site/docs/docs/compose-your-frontend/08-webserver.md",sourceDirName:"docs/compose-your-frontend",slug:"/docs/compose-your-frontend/webserver",permalink:"/docs/compose-your-frontend/webserver",draft:!1,editUrl:"https://github.com/micro-lc/documentation/edit/main/docs/docs/compose-your-frontend/08-webserver.md",tags:[],version:"current",lastUpdatedBy:"Paola Nicosia",sidebarPosition:60,frontMatter:{title:"Step 8: Webserver",description:"tutorial step to feed sources to micro-lc via backend",sidebar_label:"Step 8: Webserver",sidebar_position:60},sidebar:"docs",previous:{title:"Step 7: Cross Communication",permalink:"/docs/compose-your-frontend/communication"},next:{title:"Concepts",permalink:"/docs/concepts/"}},p={},d=[{value:"Reverse Proxying",id:"reverse-proxying",level:2},{value:"Integrating With An API",id:"integrating-with-an-api",level:2}],m={toc:d},u="wrapper";function k(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So far we've been up to the task without using any backend or webserver services."),(0,i.kt)("p",null,"Parcel applications rarely come in the form of a data protocol uri and their static might be\navailable on your backend somewhere."),(0,i.kt)("p",null,"If you'd like to serve your custom sources for applications and webcomponent libraries, integrate\nwith APIs, authentication, or backend services, frontend is not enough."),(0,i.kt)("p",null,"Let's briefly touch here on how you could get started configuring your frontend, orchestrated\nwith ",(0,i.kt)("micro-lc",null)," and integrated with a reverse proxy."),(0,i.kt)("p",null,"To serve ",(0,i.kt)("micro-lc",null)," we can use ",(0,i.kt)("a",{parentName:"p",href:"/add-ons/backend/middleware"},"middleware")," which is a\nsimple webserver that parses configurations and helps configuring advanced features like Content-Security-Policy\nheaders or preload links."),(0,i.kt)("p",null,"Let's add a service to a new ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose")," configuration."),(0,i.kt)("p",null,"First we need some environment variables. Create a new folder, move into it and create an ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:"title=.env",title:".env"},"LOG_LEVEL=debug\nHTTP_PORT=3000\nMICROSERVICE_GATEWAY_SERVICE_NAME=microservice-gateway\nUSERID_HEADER_KEY=miauserid\nGROUPS_HEADER_KEY=miausergroups\nCLIENTTYPE_HEADER_KEY=client-type\nBACKOFFICE_HEADER_KEY=isbackoffice\nUSER_PROPERTIES_HEADER_KEY=miauserproperties\n")),(0,i.kt)("p",null,"Then let's write down the entry point for our frontend in an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in the same folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>micro-lc :: Tutorial</title>\n  <link rel="icon" href="https://avatars.githubusercontent.com/u/92730708?s=200&v=4" />\n  <link href="/assets/style.css" rel="stylesheet" />\n\n  <script async type="module" src="https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator/dist/micro-lc.production.js"><\/script>\n</head>\n<body>\n  <mlc-loading-animation primary-color="#cd1c8c">\n    <micro-lc config-src="/configurations/config.json"></micro-lc>\n  </mlc-loading-animation>\n</body>\n</html>\n')),(0,i.kt)("p",null,"and then the latest config we wrote at step 7 can be copy/pasted in a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file in the same folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n  "version": 2,\n  "applications": {\n    "home": ...,\n    ...\n  },\n  ...\n}\n')),(0,i.kt)("p",null,"Middleware has a public directory for serving static files at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/static/public/"),"\nand a special folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/static/configurations/")," to serve JSON files. Let's mount\nthese files on a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the same folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"version: '3'\n\nservices:\n  micro-lc:\n    image: microlc/middleware\n    env_file:\n      - .env\n    ports:\n      - 3000:3000\n    networks:\n      - internal\n    volumes:\n      - ./index.html:/usr/static/public/index.html\n      - ./style.css:/usr/static/public/assets/style.css\n      - ./config.json:/usr/static/configurations/config.json\n\nnetworks:\n  internal:\n")),(0,i.kt)("p",null,"Let's momentarely expose the ",(0,i.kt)("inlineCode",{parentName:"p"},"3000")," port for testing and fire up ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,i.kt)("p",null,"Now reaching your ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/public/"},"localhost:3000")," you should\nnotice 2 weird things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("micro-lc",null)," auto pushed the URL to ",(0,i.kt)("inlineCode",{parentName:"li"},"/")),(0,i.kt)("li",{parentName:"ol"},"there's no ",(0,i.kt)("inlineCode",{parentName:"li"},"/assets/style.css")," (indeed is under ",(0,i.kt)("inlineCode",{parentName:"li"},"/public/assets/style.css"),")")),(0,i.kt)("h2",{id:"reverse-proxying"},"Reverse Proxying"),(0,i.kt)("p",null,"We need to reverse proxy our frontend. Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),". We can\ncreate a minimal config file which reverses ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"title=nginx.conf",title:"nginx.conf"},"worker_processes 1;\n\nevents {\n  worker_connections 2048;\n}\n\nhttp {\n  server {\n    location /configurations {\n      proxy_pass                      http://micro-lc:3000;\n    }\n\n    location / {\n      rewrite                         ^/?(.*) /public/$1 break;\n      proxy_pass                      http://micro-lc:3000;\n    }\n  }\n}\n")),(0,i.kt)("p",null,"and then we can create another service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"version: '3'\n\nservices:\n  micro-lc:\n    # .... middleware setup\n\n  reverse-proxy:\n    image: nginx\n    ports:\n      - 80:80\n    networks:\n      - internal\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n\nnetworks:\n  internal:\n")),(0,i.kt)("p",null,"Notice you could remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," directive on the ",(0,i.kt)("inlineCode",{parentName:"p"},"micro-lc")," service. Again run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,i.kt)("p",null,"to apply changes."),(0,i.kt)("p",null,"Now reaching ",(0,i.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," should\nprovide ",(0,i.kt)("micro-lc",null)," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," Url. Moreover the CSS has been correctly\ndownloaded."),(0,i.kt)("p",null,"Let's use the menu to navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Browser")," application. On entry the Url changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"/browser/"),". This should break our frontend the next time we force refresh with ",(0,i.kt)("inlineCode",{parentName:"p"},"F5"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+R"),", or on Mac ",(0,i.kt)("inlineCode",{parentName:"p"},"Cmd+R"),", but it does not. ",(0,i.kt)("micro-lc",null)," is still effectively\nloaded on ",(0,i.kt)("inlineCode",{parentName:"p"},"/browser/")," despite nothing is there on the ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," instance. This is due to the rewrite rule on ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Anything starting ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," (not matching ",(0,i.kt)("inlineCode",{parentName:"li"},"/configurations"),") is prepended with ",(0,i.kt)("inlineCode",{parentName:"li"},"/public/"),"."),(0,i.kt)("li",{parentName:"ol"},"Then on the ",(0,i.kt)("inlineCode",{parentName:"li"},"middleware")," service a file onto ",(0,i.kt)("inlineCode",{parentName:"li"},"/public/browser/")," cannot be found."),(0,i.kt)("li",{parentName:"ol"},"Then a file on ",(0,i.kt)("inlineCode",{parentName:"li"},"/public/browser/index.html")," cannot be found."),(0,i.kt)("li",{parentName:"ol"},"Finally ",(0,i.kt)("inlineCode",{parentName:"li"},"middleware")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"/public/index.html"),", which is ",(0,i.kt)("micro-lc",null)," entry point.")),(0,i.kt)("h2",{id:"integrating-with-an-api"},"Integrating With An API"),(0,i.kt)("p",null,"Now let's add a basic API on ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/"),". We could employ a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/hello-world-rest-json"},"rest API packed in a docker container")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"version: '3'\n\nservices:\n  micro-lc:\n    # .... middleware setup\n\n  reverse-proxy:\n    # .... nginx setup\n  \n  api:\n    image: thomaspoignant/hello-world-rest-json\n    networks:\n      - internal\n\nnetworks:\n  internal:\n")),(0,i.kt)("p",null,"and again reverse it on localhost"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"title=nginx.conf",title:"nginx.conf"},"# rest of the config\n\nhttp {\n  server {\n    location /api {\n      rewrite                         ^/api/?(.*) /$1 break;\n      proxy_pass                      http://api:8080;\n    }\n\n    # .... rest of the config\n  }\n}\n")),(0,i.kt)("p",null,"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,i.kt)("p",null,"to apply changes and test via ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl localhost/api # should reply {"message":"HelloWorld"}\n')),(0,i.kt)("p",null,"Let's create a client for this API as webcomponent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=client.js",title:"client.js"},"customElements.define(\n  'hello-world-client',\n  class extends HTMLElement {\n    connectedCallback() {\n      Object.assign(this.style, {\n        width: 'inherit',\n        height: 'inherit',\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'center'\n      })\n\n      const div = window.document.createElement('div')\n      Object.assign(div.style, {\n        textAlign: 'center'\n      })\n      this.appendChild(div)\n\n      fetch('/api/')\n        .then((res) => res.ok ? res : Promise.reject('Oops! Something went wrong'))\n        .then((res) => res.json())\n        .then(({message}) => {div.textContent = message})\n    }\n  }\n)\n")),(0,i.kt)("p",null,"This time we can serve it without the data protocol uri trick. Let's just\nadd this file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," volumes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"version: '3'\n\nservices:\n  micro-lc:\n    image: microlc/middleware\n    env_file:\n      - .env\n    networks:\n      - internal\n    volumes:\n      - ./index.html:/usr/static/public/index.html\n      - ./style.css:/usr/static/public/assets/style.css\n      - ./config.json:/usr/static/configurations/config.json\n      - ./client.js:/usr/static/public/assets/client.js # \ud83d\udc48 here\n\n  reverse-proxy:\n    # .... nginx setup\n\n  api:\n    # .... api setup\n\nnetworks:\n  internal:\n")),(0,i.kt)("p",null,"before to restart the environment let's add a new compose application in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n  "version": 2,\n  "applications": {\n    ...,\n    "hello": {\n      "integrationMode": "compose",\n      "route": "/hello",\n      "config": {\n        "sources": [\n          "/assets/client.js"\n        ],\n        "content": {\n          "tag": "hello-world-client"\n        }\n      }\n    }\n  },\n  "layout": {\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"and an entry in the menu"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n  "version": 2,\n  "applications": {\n    ...\n  },\n  "layout": {\n    "content": {\n      "tag": "bk-layout",\n      "properties": {\n        ...,\n        "menuItems": [\n          ...,\n          {\n            "icon": {\n              "library": "@fortawesome/free-solid-svg-icons",\n              "selector": "faHandPeace"\n            },\n            "id": "hello",\n            "label": "Hello",\n            "type": "application"\n          }\n        ]\n      }\n    },\n    "sources": [\n      ...\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up -d\n")),(0,i.kt)("p",null,"to update the service and refresh the browser tab."),(0,i.kt)("p",null,"That's all folks. For now! \ud83d\udc4d"))}k.isMDXComponent=!0}}]);