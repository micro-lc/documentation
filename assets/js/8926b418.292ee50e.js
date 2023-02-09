"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7998],{4612:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ne});var r=n(76687),o=n(64039),i=n(20292),a=n(27739),s=n(68362),c=new URL("https://unpkg.com/@micro-lc/preview@latest/website/index.html"),l=function(e,t,n){return function(e){var r=new i.w0,o=e.currentTarget,l=o.contentWindow;if(function(e){var t=function(t){var n=t.data;if(null!==n&&"object"==typeof n&&"type"in n&&"string"==typeof n.type&&["mousedown","mousemove"].includes(n.type)&&"content"in n){var r=n.type,o=n.content;switch(r){case"mousemove":case"mousedown":var i=e.getBoundingClientRect(),a=o;e.dispatchEvent(new MouseEvent(r,Object.assign({},a,{clientX:a.clientX+i.left,clientY:a.clientY+i.right})))}}};window.addEventListener("message",t)}(o),null!==l){var u=function(e){var n;l.postMessage("new-configuration"!==(n=e).type?n:Object.assign({},n,{content:Object.assign({},n.content,{configuration:{content:{attributes:{style:"display: flex; flex-direction: column; height: 100%; width: 100%; gap: 0.5px"},content:[{attributes:{matcher:c.origin,origin:"https://my-domain",style:"\n                  position: sticky;\n                  top: 0;\n                  padding: 10px;\n                  background-color: #de1f9210;\n                  border-bottom: 1px solid #de1f92;\n                "},tag:"mlc-url"},{attributes:{style:"width: 100%; height: 100%; position: relative; overflow: hidden;"},content:{attributes:{"primary-color":"#de1f92",style:"width: 100%; height: 100%;"},content:{attributes:{style:"width: 100%; height: 100%; overflow: auto;"},properties:{config:n.content.configuration},tag:"micro-lc"},tag:"mlc-loading-animation"},tag:"div"}],tag:"div"},sources:["https://cdn.jsdelivr.net/npm/@micro-lc/layout@2.0.0/dist/mlc-iconic.js","https://cdn.jsdelivr.net/npm/@micro-lc/layout@2.0.0/dist/mlc-url.js","https://cdn.jsdelivr.net/npm/@micro-lc/layout@2.0.0/dist/mlc-loading-animation.js","https://cdn.jsdelivr.net/npm/@micro-lc/orchestrator@latest/dist/micro-lc.production.js"]}})}),t)};u({content:{disableOverlay:!0,redirectTo:"/"},type:"options"});var d=n.pipe((0,a.q)(1)),f=n.pipe((0,s.T)(1));r.add(d.subscribe((function(e){u({content:e,type:"new-configuration"})}))),r.add(f.subscribe((function(){r.unsubscribe(),function(e){e.src=String(e.src)}(o)})))}}},u=n(7375),d=n(38374),f=n(41616),m=n(22307),g=n(47287),p=n(43702),v=n(2605),h=n(50373),y=n(76517),w=n(39729),b=n(37244),C=n(8326),E=n(99067),x=n(79157),k=n(15171),M=n(64181),S=n(99855),j=n(67353),Z={applications:{about:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"About \ud83d\udcef",tag:"span"},{attributes:{href:"https://mia-platform.eu/",target:"_blank"},content:"Check out what we do at Mia-Platform!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/about"},home:{config:{content:{attributes:{style:"height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; row-gap: 24px"},content:[{content:"Welcome to the micro-lc playground! \ud83d\udc4b",tag:"span"},{attributes:{href:"https://micro-lc.io/",target:"_blank"},content:"Get started with the official documentation!",tag:"a"}],tag:"div"}},integrationMode:"compose",route:"/home"}},layout:{content:[{properties:{logo:{url:"https://avatars.githubusercontent.com/u/92730708?s=200&v=4"},menuItems:[{icon:{library:"@ant-design/icons-svg",selector:"HomeOutlined"},id:"home",label:"Home",type:"application"},{icon:{library:"@ant-design/icons-svg",selector:"ContactsOutlined"},id:"about",label:"About",type:"application"}],mode:"fixedSideBar"},tag:"mlc-layout"}],sources:"https://cdn.jsdelivr.net/npm/@micro-lc/layout@latest/dist/mlc-layout.js"},settings:{defaultUrl:"/home"},version:2},L=n(31055),O=n(45050),R=n(48532),P=n(68476);function N(e){var t=this;return{to:function(n){if(e===n)return{error:!1,messages:[],value:"json"===n?(0,P.Z)(t,{whitespace:!1}).trim():t};var r,o,i;try{if("jsonyaml"===""+e+n)i=t,r=R.ZP.dump(JSON.parse((0,P.Z)(i,{whitespace:!1}).trim()),{schema:R.ZP.JSON_SCHEMA});else o=t,r=JSON.stringify(R.ZP.load(o,{json:!0,schema:R.ZP.JSON_SCHEMA}));return{error:!1,messages:[],value:r}}catch(a){return{error:!0,messages:a instanceof Error?[a.message]:[],value:void 0}}}}}var W=function(e){return{from:N.bind(e)}},A={automaticLayout:!0,insertSpaces:!0,minimap:{autohide:!0},model:null,renderWhitespace:"boundary",scrollBeyondLastLine:!1,tabSize:2},I=function(){},D=function(e,t,n){return Promise.resolve(!0)};var K=function(){var e=(0,b.Z)((0,w.Z)().mark((function e(t,n,r){return(0,w.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,L.getWorker)(n).then((function(e){var n,o=new Promise((function(e){n=e})),i=t.onDidChangeModelContent((function(){i.dispose(),null==n||n(e)}));return t.setValue(r),o}),(function(){return t.setValue(r)})).then((function(e){return e?new Promise((function(e,n){var r=setTimeout((function(){var o;null==(o=t.getAction("editor.action.formatDocument"))||o.run().then((function(){var e;return null==(e=t.getAction("editor.foldAll"))?void 0:e.run()})).then((function(){var e;return null==(e=t.getAction("editor.unfold"))?void 0:e.run()})).then(e).catch(n).finally((function(){return clearTimeout(r)}))}),500)})):Promise.reject(new TypeError("Could not react worker for model "+n))})).catch(I));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),J=function(e,t,n,r,o){var i,a=n[r],s=e.editor,c=t.getModel(),l=null!=(i=a&&(s.getModel(a)||s.createModel(o,r,a)))?i:null,u=Promise.resolve();if(c!==l){var d=t.onDidChangeModel((function(){u=K(t,r,o),d.dispose()}));t.setModel(l)}else u=K(t,r,o);return u},T="@microlc:_content";function U(e,t,a){var s=(0,r.useRef)(),c=(0,r.useMemo)((function(){return new C.X(!0)}),[]),l=(0,r.useMemo)((function(){return c.pipe((0,E.e)(1e3)).subscribe((function(e){e.length>0&&a.loading(e[e.length-1])})),{lock:function(){return a.loading(!0)},release:function(){return c.next(!1)}}}),[]),u=l.lock,d=l.release,f=function(){var e=(0,r.useState)(),t=e[0],o=e[1];return(0,r.useEffect)((function(){Promise.resolve().then(n.bind(n,31055)).then(o).catch(I)}),[]),t}(),m=(0,r.useMemo)((function(){return{json:null==f?void 0:f.Uri.parse((0,O.GQ)(void 0,"*.config",O.Sf)),yaml:null==f?void 0:f.Uri.parse((0,O.GQ)(void 0,"*.config",O.b3))}}),[f]),g=(0,r.useCallback)((function(e){return function(e,t,n){var r=(void 0===n?{}:n).lintErrorIsError;if(e){var o=t.getModel();if(null!==o){var i=o.uri,a=e.editor,s=e.MarkerSeverity,c=a.getModelMarkers({resource:i}).reduce((function(e,t){var n=t.severity,o=t.message;return n===s.Error?(e.ok=!1,e.errors.push(o)):n===s.Warning&&(r&&(e.ok=!1),e.warnings.push(o)),e}),{errors:[],ok:!0,warnings:[]}),l=c.ok,u=c.warnings,d=c.errors,f=o.getLanguageId();if("json"!==f&&"yaml"!==f)return{error:!0,messages:["No available language"],value:void 0};if(!l)return{error:!0,messages:[].concat(d,r?u:[]),value:void 0};var m=W(t.getValue()).from(f).to("json");return Object.assign({},m,{messages:[].concat(u,m.messages)})}}}(f,e)}),[f]),p=(0,r.useState)(),v=p[0],h=p[1];(0,r.useEffect)((function(){var e=s.current;if(f&&e){var t=f.editor.create(e,A);!function(e,t,n){n.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.Enter,(function(){null==e||e.dispatchEvent(new KeyboardEvent("keypress",{ctrlKey:!0,key:"Enter"}))}))}(e.parentElement,f,t),function(e,t,n){n.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.Space,(function(){var t;null==e||null==(t=e.ownerDocument.defaultView)||t.dispatchEvent(new KeyboardEvent("keydown",{ctrlKey:!0,key:" "}))}))}(e.parentElement,f,t),function(e){var t=e.getContribution("editor.linkDetector");t&&(t.openerService._defaultExternalOpener.openExternal=D)}(t),h(t)}}),[f,s]);var y=(0,r.useState)(I),w=y[0],b=y[1],L=(0,r.useState)(I),P=L[0],N=L[1];(0,r.useEffect)((function(){var n=s.current;if(f&&v&&n){var r=new i.w0,c=new o.t(1);c.pipe((0,x.O)(function(e){var t;return null!=(t=e.localStorage.getItem(T))?t:JSON.stringify(Z)}(window))).subscribe((function(n){u();var r=Z;try{r=JSON.parse(n)}catch(s){console.error("local storage was corrupted")}var o,i=(o=r,{to:function(e){try{return{error:!1,messages:[],value:"yaml"===e?R.ZP.dump(o,{schema:R.ZP.JSON_SCHEMA}):JSON.stringify(o)}}catch(t){return{error:!0,messages:t instanceof Error?[t.message]:[],value:void 0}}}}).to(t);if(i.error)return a.errorMessage(i),d();J(f,v,m,t,i.value).finally((function(){e.next({configuration:JSON.parse(n),contexts:new Map,tags:[]}),d()}))}));var l=n.parentElement?(0,k.R)(n.parentElement,"keypress"):M.C,p=function(t){var n;if(void 0!==t)c.next(t),n={error:!1,messages:[],value:t};else if(n=g(v),console.log("res",n),!n||n.error)return void(n&&a.errorMessage(Object.assign({},n,{messages:["components.editor.error"]})));!function(e,t){e.localStorage.setItem(T,t)}(window,n.value),e.next({configuration:JSON.parse(n.value),contexts:new Map,tags:[]}),a.errorMessage(0===n.messages.length?"":Object.assign({},n,{messages:["components.editor.warning"]}))};return r.add(l.pipe((0,S.h)((function(e){return"Enter"===e.key&&e.ctrlKey})),(0,j.b)((function(e){e.stopPropagation()}))).subscribe((function(){return p()}))),b((function(){return function(){return p()}})),N((function(){return function(){return p(JSON.stringify(Z))}})),function(){var e,t;null==(e=(t={dispose:void 0}).dispose)||e.call(t),r.unsubscribe()}}}),[s,f,v]);var K=(0,r.useCallback)((function(e){if(u(),!v||!f)return d();var t=g(v);if(!t)return d();var n=t.error,r=t.value;if(n)return a.errorMessage({error:!0,messages:["components.editor.error.conversion"],value:void 0}),d();var o=W(r).from("json").to(e),i=o.error,s=o.value,c=o.messages;if(i)return a.errorMessage({error:i,messages:["components.editor.error.conversion"],value:s}),d();J(f,v,m,e,s).finally((function(){a.errorMessage(0===c.length?"":{error:i,messages:["components.editor.warning"],value:s}),d()}))}),[f,v]);return{dispatchReset:P,dispatchSubmit:w,editorRef:s,handleChangeModel:K}}var V=["id","onClick"],F={errorFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM9.42646 8.38289C9.13416 8.18039 8.73002 8.20932 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L10.9395 12L8.46967 14.4697L8.38289 14.5735C8.18039 14.8658 8.20932 15.27 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L12 13.0605L14.4697 15.5303L14.5735 15.6171C14.8658 15.8196 15.27 15.7907 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L13.0605 12L15.5303 9.53033L15.6171 9.42646C15.8196 9.13416 15.7907 8.73002 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L12 10.9395L9.53033 8.46967L9.42646 8.38289Z",successFilled:"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM17.0668 8.5088C16.7955 8.19579 16.3218 8.16195 16.0088 8.43323L9.576 14.007L7.99092 12.6348L7.88109 12.5557C7.57501 12.3747 7.17399 12.4325 6.93299 12.7109C6.66186 13.024 6.69593 13.4977 7.00908 13.7688L9.08601 15.567L9.19759 15.6471C9.47038 15.8072 9.82155 15.7805 10.0681 15.5668L16.9912 9.56677L17.0852 9.46934C17.308 9.19221 17.3079 8.78704 17.0668 8.5088Z",warningFilled:"M21.997 12.2337C21.997 17.7552 17.5209 22.2312 11.9995 22.2312C6.47799 22.2312 2.00195 17.7552 2.00195 12.2337C2.00195 6.71224 6.47799 2.23621 11.9995 2.23621C17.5209 2.23621 21.997 6.71224 21.997 12.2337ZM11.9995 16.9116C12.5173 16.9116 12.937 16.4918 12.937 15.9741C12.937 15.4563 12.5173 15.0366 11.9995 15.0366C11.4817 15.0366 11.062 15.4563 11.062 15.9741C11.062 16.4918 11.4817 16.9116 11.9995 16.9116ZM11.7495 7.55597C11.4734 7.55597 11.2495 7.77983 11.2495 8.05597V12.5552C11.2495 12.8313 11.4734 13.0552 11.7495 13.0552H12.2495C12.5257 13.0552 12.7495 12.8313 12.7495 12.5552V8.05597C12.7495 7.77983 12.5257 7.55597 12.2495 7.55597H11.7495Z"};function G(e){var t=e.id,n=e.onClick,o=(0,d.Z)(e,V);return r.createElement("svg",(0,u.Z)({onClick:n,role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o),r.createElement("path",{d:F[t],fill:"currentColor",fillRule:"evenodd"}))}var H=["style","render"],_=f.Z,z="@microlc:editorFormat",X={"components.editor.error":"Error while applying changes","components.editor.error.conversion":"Error while converting the model","components.editor.warning":"Configuration does not comply"},B=(0,m.Z)({palette:{primary:{dark:"#c81c83",light:"#e3349d",main:"#de1f92"}}});const Y=function(e){var t=e.style,n=e.render,o=(0,d.Z)(e,H),i=(0,r.useMemo)((function(){return function(e){var t,n=e.sessionStorage.getItem(z);return"string"==typeof(t=n)&&["json","yaml"].includes(t)?n:"json"}(window)}),[]),a=(0,r.useState)(!0),s=a[0],c=a[1],l=(0,r.useState)(""),f=l[0],m=U(n,i,{errorMessage:l[1],loading:c}),w=m.editorRef,b=m.dispatchSubmit,C=m.dispatchReset,E=m.handleChangeModel;return r.createElement("div",(0,u.Z)({},o,{style:Object.assign({display:"flex",flexDirection:"column"},t)}),r.createElement(g.Z,{theme:B},r.createElement(p.Z,{alignItems:"center",display:s?"flex":"none",flexDirection:"column",flexGrow:"1",justifyContent:"center",width:"100%"},r.createElement(v.Z,null)),r.createElement("div",{ref:function(e){w.current=e},style:{boxShadow:"0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",display:s?"none":"",flexGrow:1,width:"100%"}}),r.createElement("div",{style:{alignItems:"baseline",display:"flex",gap:"16px",padding:"16px 24px",textAlign:"center"}},r.createElement(_,{defaultValue:i,onChange:function(e){var t=e.target.value;E(t),function(e,t){e.sessionStorage.setItem(z,t)}(window,t)},size:"small"},r.createElement(h.Z,{value:"json"},"JSON"),r.createElement(h.Z,{value:"yaml"},"YAML")),r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{style:{alignItems:"center",display:"flex",gap:"10px"}},function(e){if(e)return"string"==typeof e?e:e.error?r.createElement(r.Fragment,null,r.createElement(G,{color:"var(--playground-color-red)",height:12,id:"errorFilled",width:12}),r.createElement("span",null,X[e.messages.join("\n")])):0!==e.messages.length?r.createElement(r.Fragment,null,r.createElement(G,{color:"var(--playground-color-orange)",height:12,id:"warningFilled",width:12}),r.createElement("span",null,X[e.messages.join("\n")])):void 0}(f)),r.createElement(y.Z,{onClick:b,variant:"contained"},"Apply"),r.createElement(y.Z,{onClick:C,variant:"contained"},"Reset"))))};var q=["children","tag","border","borderStyle"];function Q(e){var t=e.clientX-this.x;this.left.style.width=this.width+t+"px"}function $(e){var t=this.parent.ownerDocument.defaultView;if(t){var n=this.parent.getBoundingClientRect().x,r=t.getComputedStyle(this.left),o=t.getComputedStyle(this.right),i=parseInt(r.borderRightWidth,10)+parseInt(o.borderLeftWidth,10);this.x=e.clientX,this.width=parseInt(r.width,10);var a=Math.abs(e.clientX-n-this.width),s=Q.bind(this);a<i&&(t.addEventListener("mousemove",s),t.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",s)})))}}var ee=function(e,t){var n=$.bind(t);return e.addEventListener("mousedown",n),function(){e.removeEventListener("mousedown",n)}};const te=function(e){var t=e.children,n=e.tag,o=e.border,i=void 0===o?"both":o,a=e.borderStyle,s=(0,d.Z)(e,q),c=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(c.current){var e=Array.from(c.current.childNodes).filter((function(e){return"style"in e})),t=e[0],n=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.style.resize="horizontal",e.style.flexDirection="column"}))}(t,n),"right"!==i&&function(e,t){e.style.borderRight=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(t,a),"left"!==i&&function(e,t){e.style.borderLeft=null!=t?t:"6px solid rgba(0, 0, 0, 0.05)",e.style.cursor="col-resize",e.childNodes.forEach((function(e){return"style"in e&&(e.style.cursor="default")}))}(n,a),ee(c.current,{left:t,parent:c.current,right:n,width:parseInt(t.style.width,10),x:0})}}),[i,a,c]),(0,r.createElement)(null!=n?n:"div",Object.assign({ref:function(e){e&&(c.current=e)}},s),t)};const ne=function(){var e=(0,r.useMemo)((function(){return new o.t(1)}),[]),t=(0,r.useMemo)((function(){return l(window,c.origin,e.asObservable())}),[e]);return r.createElement(te,{border:"left",borderStyle:"12px solid var(--playground-color-grey)",className:"playground grow-first",tag:"main"},r.createElement(Y,{render:e,style:{minWidth:"400px",width:"40%"}}),r.createElement("div",{style:{display:"flex",flexGrow:1}},r.createElement("iframe",{onLoad:t,src:c.href,style:{border:"none",height:"100%",width:"100%"},title:"preview"},r.createElement("p",null,"Your browser does not support iframes"))))}},31055:(e,t,n)=>{n.r(t),n.d(t,{CancellationTokenSource:()=>a.CancellationTokenSource,Emitter:()=>a.Emitter,KeyCode:()=>a.KeyCode,KeyMod:()=>a.KeyMod,MarkerSeverity:()=>a.MarkerSeverity,MarkerTag:()=>a.MarkerTag,Position:()=>a.Position,Range:()=>a.Range,Selection:()=>a.Selection,SelectionDirection:()=>a.SelectionDirection,Token:()=>a.Token,Uri:()=>a.Uri,editor:()=>a.editor,getWorker:()=>l,languages:()=>a.languages});var r,o=n(39729),i=n(37244),a=n(46295),s=n(93948),c=(n(50359),n(66466),n(13008),n(50313),n(69328),n(18979),n(83567),n(95637),n(22390),n(19113),n(88530),n(72809),n(20978),n(2583),n(5263),n(21910),n(42645),n(83120),n(10542),n(93577),n(63868),n(46191),n(83671),n(10039),n(16830),n(54928),n(42585),n(59869),n(27473),n(83996),n(45075),n(73330),n(58684),n(72851),n(61785),n(28224),n(81521),n(13591),n(78375),n(46758),n(3488),n(77589),n(55187),n(88398),n(23046),n(44948),n(99342),n(25066),n(66127),n(64402),n(60080),n(14463),n(9447),n(68490),n(38310),n(4451),n(30325),n(3743),n(8465),n(28879),n(45908),n(82776),n(7345),n(70426),n(15203),n(45050));r={default:function(){return new Worker(new URL(n.p+n.u(7801),n.b))},json:function(){return new Worker(new URL(n.p+n.u(4352),n.b))},yaml:function(){return new Worker(new URL(n.p+n.u(1961),n.b))}},window.MonacoEnvironment={getWorker:function(e,t){return(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("json"!==t&&"yaml"!==t){e.next=2;break}return e.abrupt("return",Promise.resolve(r[t]()));case 2:return e.abrupt("return",Promise.resolve(r.default()));case 3:case"end":return e.stop()}}),e)})))()}},a.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0,enableSchemaRequest:!0,schemas:[c.OC["*.config"]],validate:!0}),(0,s.iV)({enableSchemaRequest:!0,schemas:[c.OC["*.config"]]});var l=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(n=window.MonacoEnvironment)||!n.getWorker){e.next=4;break}return"then"in(r=window.MonacoEnvironment.getWorker("",t))||(r=Promise.resolve(r)),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},45050:(e,t,n)=>{n.d(t,{GQ:()=>a,OC:()=>s,Sf:()=>r,b3:()=>o});var r="json",o="yaml",i={"*.config":{uri:"https://raw.githubusercontent.com/micro-lc/micro-lc/main/packages/interfaces/schemas/v2/config.schema.json#"}},a=function(e,t,n){return""+new URL(window.location.pathname.replace(/\/$/,""),window.location.href).href+t.replace("*",null!=e?e:"")+"."+n},s=Object.entries(i).reduce((function(e,t){var n,i=t[0],a=t[1];return e[i]=Object.assign({},a,{fileMatch:(n=i,["**/"+n+"."+r,"**/"+n+"."+o])}),e}),{})},1703:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(25589),o=n(10617),i=n(76687);function a(){return i.createElement(o.Z,{title:"Playground",wrapperClassName:"playground container"},i.createElement(r.Z,null,(function(){var e=n(4612).default;return i.createElement(e,null)})))}}}]);