"use strict";(self.webpackChunkgameown_website=self.webpackChunkgameown_website||[]).push([[8283],{99445:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(89164),o=t(72791),i=t(74165),a=t(15861),c=t(29439),s=t(68870),l=t(27391),u=t(85523),d=t(94454),f=t(36151),p=t(13239),m=t(61889),h=t(50533),x=t(4708),Z=t(20890),v=t(25867),j=t(55432),g=t(84501),b=t(7565),y=t(57689),w=t(80184);function k(){var e=(0,y.s0)(),n=(0,o.useState)(!1),t=(0,c.Z)(n,2),k=t[0],C=t[1],O=(0,o.useState)(0),P=(0,c.Z)(O,2),S=P[0],D=P[1],M=(0,o.useState)(""),W=(0,c.Z)(M,2),N=W[0],A=W[1],E=(0,o.useState)(""),T=(0,c.Z)(E,2),L=T[0],R=T[1],V=(0,o.useState)(""),_=(0,c.Z)(V,2),I=_[0],H=_[1],F=(0,o.useState)(""),z=(0,c.Z)(F,2),B=z[0],q=z[1],G=(0,o.useState)(!0),U=(0,c.Z)(G,2),Y=U[0],K=U[1],X=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t={email:N},C(!0),e.next=5,g.Z.auth.sendCodeForRegister(t);case 5:C(!1),D(1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){var r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r={email:N,password:L,passwordConfirm:I,newsletterSubscription:Y,verificationCode:parseInt(B)},C(!0),n.next=5,g.Z.auth.register(r);case 5:C(!1),e(j.Z.HOME);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Q=(0,w.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:X,sx:{mt:3},children:[(0,w.jsx)(l.Z,{className:"mt-5",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return A(e.target.value)},autoFocus:!0,inputProps:{style:{padding:14}}}),(0,w.jsx)(l.Z,{className:"mt-1",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",onChange:function(e){return R(e.target.value)},inputProps:{style:{padding:14}}}),(0,w.jsx)(l.Z,{className:"mt-1",margin:"normal",required:!0,fullWidth:!0,name:"confirm-password",label:"Confirm your Password",type:"password",id:"confirm-password",autoComplete:"confirm-password",onChange:function(e){return H(e.target.value)},inputProps:{style:{padding:14}}}),(0,w.jsx)(u.Z,{className:"mt-2",control:(0,w.jsx)(d.Z,{value:"newsletter",checked:Y,color:"primary",onChange:function(e){return K(e.target.checked)}}),label:"I want to receive new game release and updates via email."}),(0,w.jsxs)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:(0,b.isEmpty)(N)||(0,b.isEmpty)(L)||(0,b.isEmpty)(I)||L!=I,children:["Sign Up",k&&(0,w.jsx)(p.Z,{color:"inherit"})]}),(0,w.jsx)(m.ZP,{container:!0,justifyContent:"flex-end",children:(0,w.jsx)(m.ZP,{item:!0,children:(0,w.jsx)(h.Z,{href:j.Z.LOGIN,variant:"body2",children:"Already have an account? Sign in"})})})]}),$=(0,w.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:J,sx:{mt:3},children:[(0,w.jsx)(l.Z,{className:"mt-5",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Verification code",name:"code",type:"number",autoComplete:"code",onChange:function(e){return q(e.target.value)},autoFocus:!0,inputProps:{style:{padding:14}}}),(0,w.jsxs)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:(0,b.isEmpty)(B),children:["Confirm Email",k&&(0,w.jsx)(p.Z,{color:"inherit"})]})]});return(0,w.jsxs)(r.Z,{maxWidth:"xs",children:[(0,w.jsx)(x.ZP,{}),(0,w.jsxs)(s.Z,{sx:{marginTop:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)("img",{className:"w-16 h-auto",src:v.T,alt:"logo"}),(0,w.jsx)(Z.Z,{component:"h1",variant:"h5",children:"Signup"}),0===S?Q:$]})]})}var C=t(9112),O=t(85623);function P(){return(0,w.jsxs)("div",{children:[(0,w.jsx)(C.Z,{}),(0,w.jsx)(r.Z,{component:"main",children:(0,w.jsx)(k,{})}),(0,w.jsx)(O.Z,{})]})}},84501:function(e,n,t){var r=t(21026),o=t(74619);var i=new r.Client(!1,void 0,(function(){return o.Z.getSession()||{jwt:null,refreshToken:null,user:null}}),(function(e,n,t){o.Z.storeSession({jwt:e,refreshToken:n,user:t})}));n.Z=i},85623:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(89164),o=t(36314),i=t(20890),a=t(68870),c=t(56310),s=t(74668),l=t(83854),u=t(42093),d=t(80184);function f(){return(0,d.jsx)("footer",{className:"fixed bottom-0 w-full",style:{borderTop:"0.1rem solid #DCDEDD"},children:(0,d.jsx)(r.Z,{children:(0,d.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",height:"50px",children:[(0,d.jsx)(i.Z,{children:"\xa9 Padium, 2023 "}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(u.Z,{}),(0,d.jsx)(c.Z,{}),(0,d.jsx)(s.Z,{}),(0,d.jsx)(l.Z,{})]})]})})})}},9112:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(29439),o=t(36314),i=t(36151),a=t(68870),c=t(89164),s=t(61889),l=t(15473),u=t(55432),d=t(72791),f=t(57689),p=t(74619),m=t(25867),h=t(74165),x=t(15861),Z=t(13400),v=t(93044),j=t(31976),g=t(23786),b=t(20890),y=t(54879),w=t(84501),k=t(80184);function C(){var e=(0,d.useState)(null),n=(0,r.Z)(e,2),t=n[0],o=n[1],i=(0,f.s0)(),c=function(){var e=(0,x.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Z.auth.logout();case 2:i(u.Z.HOME);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(Z.Z,{onClick:function(e){return o(e.currentTarget)},sx:{p:0},children:(0,k.jsx)(v.Z,{sx:{bgcolor:y.Z[500]},children:"OP"})}),(0,k.jsxs)(j.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:null!=t,onClose:function(){return o(null)},children:[(0,k.jsx)(g.Z,{onClick:function(){return i(u.Z.DASHBOARD_PROFILE)},children:(0,k.jsx)(b.Z,{textAlign:"left",children:"Profile"})}),(0,k.jsx)(g.Z,{onClick:function(){return i(u.Z.DASHBOARD_WALLET)},children:(0,k.jsx)(b.Z,{textAlign:"left",children:"Wallet"})}),(0,k.jsx)(g.Z,{onClick:function(){return i(u.Z.DASHBOARD_PUBLISHER)},children:(0,k.jsx)(b.Z,{textAlign:"left",children:"Publisher"})}),(0,k.jsx)(g.Z,{onClick:c,children:(0,k.jsx)(b.Z,{textAlign:"left",children:"Logout"})})]})]})}function O(){var e=(0,f.s0)(),n=(0,d.useState)(null),t=(0,r.Z)(n,2),h=t[0],x=t[1],Z=(0,k.jsxs)(o.Z,{direction:"row",spacing:1,justifyContent:"end",children:[(0,k.jsx)(i.Z,{variant:"outlined",onClick:function(){return e(u.Z.LOGIN)},children:"Login"}),(0,k.jsx)(i.Z,{variant:"contained",onClick:function(){return e(u.Z.REGISTER)},children:"Register"})]}),v=(0,k.jsx)(o.Z,{direction:"row",spacing:1,justifyContent:"end",children:(0,k.jsx)(C,{})});return(0,k.jsx)(a.Z,{sx:{marginTop:1,borderBottom:"0.1rem solid #DCDEDD",paddingBottom:1},children:(0,k.jsx)(c.Z,{children:(0,k.jsxs)(s.ZP,{container:!0,children:[(0,k.jsx)(s.ZP,{item:!0,xs:!0,children:(0,k.jsxs)(i.Z,{variant:"text",onClick:function(){return e(u.Z.HOME)},children:[(0,k.jsx)("img",{className:"w-8 h-auto mr-1",src:m.T,alt:"logo"}),(0,k.jsx)("span",{className:"text-xl",children:"Padium"})]})}),(0,k.jsxs)(s.ZP,{item:!0,xs:!0,children:[(0,k.jsx)(i.Z,{variant:"text",onClick:function(){return e(u.Z.STORE)},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Store"})}),(0,k.jsx)(i.Z,{"aria-describedby":"market",variant:"text",onClick:function(e){return x(e.currentTarget)},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Market"})}),(0,k.jsx)(l.ZP,{id:"market",open:null!=h,anchorEl:h,onClose:function(){return x(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(i.Z,{"aria-describedby":"market",variant:"text",onClick:function(){return e(u.Z.MARKETPLACE)},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Second hand marketplace"})}),(0,k.jsx)(i.Z,{"aria-describedby":"market",variant:"text",onClick:function(){return window.open("https://market.immutable.com/","_blank")},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Decentralized marketplace on ImmutableX"})})]})}),(0,k.jsx)(i.Z,{variant:"text",onClick:function(){return e(u.Z.INVENTORY)},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Inventory"})}),(0,k.jsx)(i.Z,{variant:"text",onClick:function(){return e(u.Z.COMMUNITY)},children:(0,k.jsx)("span",{className:"text-lg text-black",children:"Community"})})]}),(0,k.jsx)(s.ZP,{item:!0,xs:!0,children:p.Z.hasSession()?v:Z})]})})})}},25867:function(e,n,t){t.d(n,{k:function(){return o},T:function(){return r}});var r=t.p+"static/media/logo.351b0d8980d78fd03c65.png",o={Google:t.p+"static/media/google_ico.f29ec93d35b0fd1f2213.png"}},42093:function(e,n,t){var r=t(64836);n.Z=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,t&&t.set(e,r)}(t(72791));var o=r(t(45649)),i=t(80184);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}var c=(0,o.default)((0,i.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");n.Z=c},56310:function(e,n,t){var r=t(64836);n.Z=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,t&&t.set(e,r)}(t(72791));var o=r(t(45649)),i=t(80184);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}var c=(0,o.default)((0,i.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");n.Z=c},74668:function(e,n,t){var r=t(64836);n.Z=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,t&&t.set(e,r)}(t(72791));var o=r(t(45649)),i=t(80184);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}var c=(0,o.default)((0,i.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");n.Z=c},83854:function(e,n,t){var r=t(64836);n.Z=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,t&&t.set(e,r)}(t(72791));var o=r(t(45649)),i=t(80184);function a(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:n})(e)}var c=(0,o.default)((0,i.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube");n.Z=c},50533:function(e,n,t){t.d(n,{Z:function(){return S}});var r=t(93433),o=t(29439),i=t(4942),a=t(63366),c=t(87462),s=t(72791),l=t(28182),u=t(94419),d=t(14036),f=t(66934),p=t(31402),m=t(68221),h=t(42071),x=t(20890),Z=t(75878),v=t(21217);function j(e){return(0,v.Z)("MuiLink",e)}var g=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=t(18529),y=t(12065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=function(e){var n=e.theme,t=e.ownerState,r=function(e){return w[e]||e}(t.color),o=(0,b.DW)(n,"palette.".concat(r),!1)||t.color,i=(0,b.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,y.Fq)(o,.4)},C=t(80184),O=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],P=(0,f.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,c.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:k({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),S=s.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiLink"}),i=t.className,f=t.color,x=void 0===f?"primary":f,Z=t.component,v=void 0===Z?"a":Z,g=t.onBlur,b=t.onFocus,y=t.TypographyClasses,k=t.underline,S=void 0===k?"always":k,D=t.variant,M=void 0===D?"inherit":D,W=t.sx,N=(0,a.Z)(t,O),A=(0,m.Z)(),E=A.isFocusVisibleRef,T=A.onBlur,L=A.onFocus,R=A.ref,V=s.useState(!1),_=(0,o.Z)(V,2),I=_[0],H=_[1],F=(0,h.Z)(n,R),z=(0,c.Z)({},t,{color:x,component:v,focusVisible:I,underline:S,variant:M}),B=function(e){var n=e.classes,t=e.component,r=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,d.Z)(o)),"button"===t&&"button",r&&"focusVisible"]};return(0,u.Z)(i,j,n)}(z);return(0,C.jsx)(P,(0,c.Z)({color:x,className:(0,l.Z)(B.root,i),classes:y,component:v,onBlur:function(e){T(e),!1===E.current&&H(!1),g&&g(e)},onFocus:function(e){L(e),!0===E.current&&H(!0),b&&b(e)},ref:F,ownerState:z,variant:M,sx:[].concat((0,r.Z)(Object.keys(w).includes(x)?[]:[{color:x}]),(0,r.Z)(Array.isArray(W)?W:[W]))},N))}))}}]);
//# sourceMappingURL=8283.fd441896.chunk.js.map