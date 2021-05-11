(this["webpackJsonpair-conditioner"]=this["webpackJsonpair-conditioner"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=(n(104),n(105),n(139)),s=n(116),l=n(93),d=n(2);function u(e){var t=e.children,n=Object(i.a)("(prefers-color-scheme: dark)")?"dark":"light",a=Object(r.useMemo)((function(){return Object(l.a)({palette:{mode:n}})}),[n]);return Object(d.jsx)(s.a,{theme:a,children:t})}var j=n(150),b=n(92),h=n(14),g=n(152),m=n(151),f=n(142),p=n(145),x=n(86),O=n.n(x),w=Object(p.a)((function(e){return{root:{margin:e.spacing(3,0),display:"flex",justifyContent:"center",alignItems:"center"}}}));function v(){var e=w();return Object(d.jsxs)(m.a,{align:"center",className:e.root,color:"textSecondary",children:[Object(d.jsx)(O.a,{}),"Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]})}var y=n(32),k=n(143),C=n(153),S=n(90),N=n.n(S),I=n(91),E=n.n(I),T=n(88),B=n.n(T),L=n(87),R=n.n(L),Y=n(89),W=n.n(Y),J=n(60),A=n(52),F=function(){return Object(A.b)()},M=A.c,D=n(45),P=Object(D.b)({name:"toast",initialState:{open:!1,message:""},reducers:{setMessage:function(e,t){e.message=t.payload},setOpen:function(e,t){e.open=t.payload}}}),U=P.actions,_=U.setMessage,V=U.setOpen,z=P.reducer,G={status:"ac-status",mode:"ac-mode",temperature:"ac-temperature"},H={status:!1,mode:localStorage.getItem(G.mode)||"cold",temperature:parseInt(localStorage.getItem(G.temperature)||"")||20},$=Object(D.b)({name:"ac",initialState:H,reducers:{setStatus:function(e,t){e.status=t.payload},setTemperature:function(e,t){e.temperature=t.payload},increment:function(e){e.temperature+=1,localStorage.setItem(G.temperature,e.temperature.toString())},decrement:function(e){e.temperature-=1,localStorage.setItem(G.temperature,e.temperature.toString())},setMode:function(e,t){e.mode=t.payload,localStorage.setItem(G.mode,e.mode)},toggleStatus:function(e){e.status=!e.status,localStorage.setItem(G.status,e.status.toString())}}}),q=function(e){return e.ac.temperature},K=$.actions,Q=K.setTemperature,X=K.increment,Z=K.decrement,ee=K.setMode,te=K.toggleStatus,ne=K.setStatus,re=$.reducer;function ae(e){return"https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public"+e}var oe,ce,ie,se=Object(p.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}));function le(e){return Object(d.jsx)(C.a,Object(y.a)(Object(y.a)({},e),{},{onClick:function(){!function(){var e=document.getElementById("di");e&&e.play()}(),e.onClick()}}))}function de(){var e=document.getElementById("ac-work");e.load(),e.play(),oe=setTimeout((function(){!function(){var e=document.getElementById("air-extractor-fan");e.load(),e.play(),ce=setTimeout((function(){ie=setInterval((function(){e.currentTime=2}),56e3)}),2e3)}()}),8e3)}var ue=Object(l.a)({palette:{primary:J.a}}),je=ae("/assets/audio/di.mp3"),be=ae("/assets/audio/ac-work.mp3"),he=ae("/assets/audio/air-extractor-fan.mp3");function ge(){var e=se(),t=M((function(e){return e.ac})),n=F();return Object(d.jsxs)(f.a,{my:4,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(d.jsx)("audio",{id:"di",src:je,preload:"auto"}),Object(d.jsx)("audio",{id:"ac-work",src:be,preload:"auto"}),Object(d.jsx)("audio",{id:"air-extractor-fan",src:he,preload:"auto"}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(le,{color:"primary","aria-label":"cold",className:e.margin,onClick:function(){n(ee("cold"))},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(k.a,{theme:ue,children:Object(d.jsx)(le,{color:t.status?"secondary":"primary","aria-label":"add",className:e.margin,onClick:function(){!function(e,t){if(e){document.getElementById("ac-work").load();var n=document.getElementById("air-extractor-fan");oe&&clearTimeout(oe),ce&&clearTimeout(ce),ie&&clearInterval(ie),n.currentTime=58}else de();t(te())}(t.status,n)},style:{color:"white"},children:Object(d.jsx)(B.a,{})})}),Object(d.jsx)(le,{"aria-label":"hot",className:e.margin,style:{backgroundColor:"orange",color:"white"},onClick:function(){n(ee("hot"))},children:Object(d.jsx)(W.a,{})})]}),Object(d.jsx)(le,{"aria-label":"add",className:e.margin,onClick:function(){n((function(e,t){q(t())<31?e(X()):(e(_("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")),e(V(!0)))}))},children:Object(d.jsx)(N.a,{})}),Object(d.jsx)(le,{"aria-label":"reduce",className:e.margin,onClick:function(){n((function(e,t){q(t())>16?e(Z()):(e(_("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")),e(V(!0)))}))},children:Object(d.jsx)(E.a,{})})]})}var me=n(15),fe=n(149),pe=n(144),xe=n.p+"static/media/logo.5fb28574.svg",Oe=n(38),we=(n(111),"#e0e0e0"),ve="#cccccc",ye="#bbbbbb",ke=Object(p.a)((function(e){return{acBorder:{borderRadius:10,borderBottomLeftRadius:20,borderBottomRightRadius:20},acDisplay:{textShadow:"0px 0px 2px rgba(0, 0, 0, 0.3)"},acLogo:{width:12},acStatus:{backgroundColor:function(e){return e.backgroundColor||"transparent"}},energyLabel:{backgroundColor:"#4ea5f5"}}}));function Ce(e){return Object(d.jsx)(f.a,Object(y.a)({bgcolor:"background.paper",height:150,border:1,borderColor:we,borderRadius:10,boxShadow:3,position:"relative"},e))}function Se(){var e=M(q);return Object(d.jsxs)(m.a,{variant:"h4",align:"center",children:[Object(d.jsx)("span",{className:"font-digit ac-temperature",children:e}),Object(d.jsx)("small",{className:"font-digit",children:"\xb0C"})]})}var Ne=a.a.forwardRef((function(e,t){return Object(d.jsxs)(f.a,Object(y.a)(Object(y.a)({},e),{},{ref:t,position:"absolute",top:25,right:30,color:ve,children:[Object(d.jsxs)(m.a,{align:"left",variant:"subtitle2",children:[Object(d.jsx)("span",{children:"cold"===e.mode?"\u2744":"\u2600\ufe0f"}),"\ufe0f\ufe0f"]}),Object(d.jsx)(Se,{})]}))}));function Ie(e){return Object(d.jsx)(f.a,{textAlign:"center",mt:12,children:Object(d.jsx)("a",{href:Oe.c.url,title:Oe.b,target:"_blank",rel:"noreferrer noopener",children:Object(d.jsx)("img",{className:e.className,src:xe,alt:"logo"})})})}function Ee(){return Object(d.jsx)(f.a,{mt:1,border:1,borderColor:we})}function Te(e){var t={backgroundColor:e.status?"#38F709":we},n=ke(t);return Object(d.jsx)(f.a,{className:n.acStatus,position:"absolute",height:4,width:4,borderRadius:"50%",top:130,right:10})}function Be(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=Object(me.a)(new Array(e).keys()),c=o.map((function(e){return Object(d.jsx)(f.a,{mx:r,my:a,width:n,height:n,borderRadius:"50%",bgcolor:t},e)}));return Object(d.jsx)(f.a,{display:"flex",justifyContent:"center",children:c})}function Le(e){return Object(d.jsxs)(f.a,{className:e.className,position:"absolute",top:10,left:10,height:70,width:50,borderRadius:2,p:.5,children:[Be(6,"white",4,.25),Object(d.jsxs)(f.a,{my:.5,px:1,py:.25,height:28,width:"100%",bgcolor:"background.paper",children:[Object(d.jsxs)(fe.a,{container:!0,children:[Object(d.jsx)(f.a,{bgcolor:"green",height:3,width:"40%"}),Object(d.jsx)(f.a,{height:3,marginLeft:"40%",style:{borderTop:1.5,borderRight:2,borderBottom:1.5,borderLeft:0,borderTopColor:"transparent",borderRightColor:"green",borderBottomColor:"transparent",borderLeftColor:"transparent",borderStyle:"solid"}}),Object(d.jsx)(f.a,{bgcolor:"green",height:3,width:"10%"})]}),Object(d.jsx)(f.a,{mt:.25,bgcolor:"lightGreen",height:3,width:"50%"}),Object(d.jsx)(f.a,{mt:.25,bgcolor:"#ffc107",height:3,width:"60%"}),Object(d.jsx)(f.a,{mt:.25,bgcolor:"orange",height:3,width:"70%"}),Object(d.jsx)(f.a,{mt:.25,bgcolor:"red",height:3,width:"80%"})]}),Object(d.jsxs)(f.a,{mb:.25,pt:.1,height:20,width:"100%",bgcolor:"background.paper",children:[Be(11,"black",2,.1,.25),Object(d.jsx)(f.a,{my:.1,borderTop:1,height:0,width:"100%"}),Be(9,"black",1.5,.1,.25),Be(10,"black",1.2,.1,0)]}),Be(8,"white",2,.1)]})}var Re=a.a.forwardRef((function(e,t){return Object(d.jsxs)(f.a,Object(y.a)(Object(y.a)({},e),{},{ref:t,mt:3,display:"flex",justifyContent:"center",children:[Object(d.jsx)(f.a,{style:{transform:"rotate(10deg)"},bgcolor:ye,width:5,height:40}),Object(d.jsx)(f.a,{mx:10,bgcolor:ye,width:5,height:40}),Object(d.jsx)(f.a,{style:{transform:"rotate(-10deg)"},bgcolor:ye,width:5,height:40})]}))}));function Ye(e){var t=ke(e);return Object(d.jsxs)(f.a,{children:[Object(d.jsxs)(Ce,{className:t.acBorder,children:[Object(d.jsx)(pe.a,{in:e.status,children:Object(d.jsx)(Ne,{mode:e.mode})}),Object(d.jsx)(Ie,{className:t.acLogo}),Object(d.jsx)(Ee,{}),Object(d.jsx)(Te,{status:e.status}),Object(d.jsx)(Le,{className:t.energyLabel,titleLength:6})]}),Object(d.jsx)(pe.a,{in:e.status,timeout:{enter:2500,exit:1500},children:Object(d.jsx)(Re,{})})]})}var We=n(148),Je=n(146);function Ae(){var e=M((function(e){return e.toast})),t=F(),n=function(e,n){t(V(!1))};return Object(d.jsx)(We.a,{open:e.open,autoHideDuration:5e3,onClose:n,children:Object(d.jsx)(Je.a,{onClose:n,severity:"error",style:{width:"100%"},children:e.message})})}var Fe=n(155);var Me=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f.a,{children:Object(d.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["\xa9 ",Object(d.jsx)(Fe.a,{color:"inherit",href:Oe.c.url,target:"_blank",children:"Yun Air Conditioner"})," - ",Object(d.jsx)(Fe.a,{color:"inherit",href:Oe.a.url,target:"_blank",children:Oe.a.name})]})}),Object(d.jsx)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:" 2019 - "+(new Date).getFullYear()})]})};var De=function(){var e=M((function(e){return e.ac})),t=F();return Object(r.useEffect)((function(){function e(e){switch(e.key){case G.status:t(ne("true"===e.newValue));break;case G.temperature:t(Q(parseInt(e.newValue||"20")));break;case G.mode:t(ee(e.newValue||"cold"))}}return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[t]),Object(d.jsx)(u,{children:Object(d.jsxs)(j.a,{maxWidth:"sm",className:e.status?"hot"===e.mode?"hot-color":"cold-color":"",children:[Object(d.jsxs)(f.a,{sx:{pt:4},bgcolor:"transparent",children:[Object(d.jsx)(m.a,{color:"textPrimary",align:"center",variant:"h4",component:"h1",gutterBottom:!0,children:"\u4fbf\u643a\u5c0f\u7a7a\u8c03"}),Object(d.jsx)(v,{}),Object(d.jsx)(Ye,{status:e.status,temperature:e.temperature,mode:e.mode}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(f.a,{sx:{mt:2},children:Object(d.jsx)(g.a,{variant:"outlined",onClick:function(){window.open("/rc","_blank","width=300, height=400")},children:"\u72ec\u7acb\u9065\u63a7\u5668"})})}),Object(d.jsx)(ge,{}),Object(d.jsx)(Me,{})]}),Object(d.jsx)(Ae,{})]})})};function Pe(){return Object(d.jsx)(ge,{})}var Ue=function(){return Object(r.useEffect)((function(){console.log("%c \u2601\ufe0f air-conditioner %c https://github.com/YunYouJun/air-conditioner","color: white; background: #0078E7; padding:5px 0;","padding:4px;border:1px solid #0078E7;"),console.log("%c \u2601\ufe0f @YunYouJun %c https://www.yunyoujun.cn","color: white; background: #0078E7; padding:5px 0;","padding:4px;border:1px solid #0078E7;")}),[]),Object(d.jsx)(u,{children:Object(d.jsx)(j.a,{maxWidth:"sm",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/rc",children:Object(d.jsx)(Pe,{})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(De,{})})]})})})})},_e=Object(D.a)({reducer:{ac:re,toast:z}}),Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))},He=n(74);He.a.initialize("UA-121354150-10"),He.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(A.a,{store:_e,children:Object(d.jsx)(Ue,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ze(t,e)}))}}(),Ge()},38:function(e){e.exports=JSON.parse('{"b":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","a":{"url":"https://www.yunyoujun.cn","email":"me@yunyoujun.cn","name":"YunYouJun"},"c":{"type":"git","url":"https://github.com/YunYouJun/air-conditioner"}}')}},[[114,1,2]]]);
//# sourceMappingURL=main.b1290918.chunk.js.map