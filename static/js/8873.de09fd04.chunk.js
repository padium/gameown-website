"use strict";(self.webpackChunkgameown_website=self.webpackChunkgameown_website||[]).push([[8873],{10708:function(n,e,t){var i=t(51916),r=t(74619);var o=new i.Client(!1,(function(){return r.Z.getSession()||{jwt:null,refreshToken:null}}));e.Z=o},84501:function(n,e,t){var i=t(21026),r=t(74619);var o=new i.Client(!1,void 0,(function(){return r.Z.getSession()||{jwt:null,refreshToken:null,user:null}}),(function(n,e,t){r.Z.storeSession({jwt:n,refreshToken:e,user:t})}));e.Z=o},12273:function(n,e,t){t.d(e,{Z:function(){return R}});var i,r,o=t(1413),a=t(7565),s=t(29439),c=t(30168),l=t(72791),d=t(66934),u=t(95939),h=t(96710),p=t(39124),x=t(33963),g=t(13400),f=t(36314),m=t(20890),Z=t(8977),v=t(25051),y=t(33327),j=t(36754),w=t(62124),b=t(54164),P=t(80184),S=(0,d.ZP)("div")(i||(i=(0,c.Z)(["\n  position: absolute;\n  padding: 10px;\n  box-sizing: border-box;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n  .video-player__slider {\n    width: 100%;\n    color: #fff;\n    box-sizing: border-box;\n    &--seek {\n      margin-left: 12px;\n      margin-right: 12px;\n    }\n    &--sound {\n      width: 100px;\n    }\n    .MuiSlider-track {\n      border: none;\n    }\n    .MuiSlider-thumb {\n      background-color: #fff;\n      &:before: {\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n      }\n      &:hover,\n      &.Mui-focusVisible,\n      &.Mui-active {\n        box-shadow: none\n      }\n    }\n  }\n"]))),k=function(n){var e=n.state,t=n.dispatch,i=n.wrapperRef,r=n.playerRef,o=function(n,e){t({type:"VOLUME",payload:e})},a=function(){w.Z.toggle((0,b.findDOMNode)(i.current))},s=function(n,e){r.current.seekTo(e)};return(0,P.jsxs)(S,{className:"video-player__controls",children:[(0,P.jsx)(f.Z,{direction:"row",alignItems:"center",children:(0,P.jsx)(x.ZP,{"aria-label":"Time",className:"video-player__slider video-player__slider--seek",min:0,max:e.duration,step:.01,value:e.progress.playedSeconds,onChange:s})}),(0,P.jsxs)(f.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,P.jsxs)(f.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,P.jsx)(g.Z,{onClick:function(){return t({type:"TOGGLE_PLAY"})},children:e.playing?(0,P.jsx)(p.Z,{sx:{fontSize:"2rem",color:"white"}}):(0,P.jsx)(u.Z,{sx:{fontSize:"2rem",color:"white"}})})," ",(0,P.jsxs)(f.Z,{spacing:2,direction:"row",sx:{mb:1,px:1},alignItems:"center",children:[(0,P.jsx)(v.Z,{sx:{fontSize:"1.5rem",color:"white"}}),(0,P.jsx)(x.ZP,{"aria-label":"Volume",className:"video-player__slider video-player__slider--sound",max:1,step:.01,value:e.volume,onChange:o}),(0,P.jsx)(y.Z,{sx:{fontSize:"1.5rem",color:"white"}})]})," ",(0,P.jsx)(f.Z,{spacing:2,direction:"row",sx:{mb:1,px:1},alignItems:"center",children:(0,P.jsxs)(m.Z,{variant:"body2",color:"white",children:[(0,Z.Z)(new Date(1e3*e.progress.playedSeconds),"mm:ss")," / ",(0,Z.Z)(new Date(1e3*e.duration),"mm:ss")]})})]}),(0,P.jsx)(f.Z,{direction:"row",alignItems:"center",spacing:2,children:(0,P.jsx)(g.Z,{onClick:a,children:(0,P.jsx)(j.Z,{sx:{fontSize:"2rem",color:"white"}})})})]})]})},_=t(68870),I=t(60627),N=(0,d.ZP)("div")(r||(r=(0,c.Z)(["\n  position: absolute;\n  width: 100%;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  left: 0;\n  top: 0;\n  bottom: ",";\n  background-color: ",";\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n\n  .video-player__overlay-inner {\n    padding-left: ",";\n    padding-bottom: ",";\n    width: ",";\n  }\n;\n"])),(function(n){return n.state.light?"0":"94px"}),(function(n){var e=n.state;return e.light||e.playing?"transparent":"rgba(0, 0, 0, 0.4)"}),(function(n){return n.state.playing?"0":"1"}),(function(n){return n.state.light?"50px":"25px"}),(function(n){return n.state.light?"50px":"38px"}),(function(n){return n.state.light?"auto":"100%"}));function T(n){var e=n.state,t=n.title;return(0,P.jsx)(N,{state:e,children:(0,a.isNotNull)(t)&&(0,P.jsx)(_.Z,{className:"video-player__overlay-inner",children:(0,P.jsx)(I.Z,{in:!0,children:(0,P.jsx)(m.Z,{variant:"h5",color:"white",mt:10,children:t})})})})}var C,z={playing:!1,controls:!1,volume:.8,light:!0,progress:{playedSeconds:0},duration:0},H=function(n,e){switch(e.type){case"PLAY":return(0,o.Z)((0,o.Z)({},n),{},{playing:!0});case"PAUSE":return(0,o.Z)((0,o.Z)({},n),{},{playing:!1});case"TOGGLE_PLAY":return(0,o.Z)((0,o.Z)({},n),{},{playing:!n.playing});case"DURATION":return(0,o.Z)((0,o.Z)({},n),{},{duration:e.payload});case"SEEK":return(0,o.Z)((0,o.Z)({},n),{},{progress:{playedSeconds:e.payload}});case"VOLUME":return(0,o.Z)((0,o.Z)({},n),{},{volume:e.payload});case"LIGHT":return(0,o.Z)((0,o.Z)({},n),{},{light:e.payload});default:return n}},A=(0,d.ZP)("div")(C||(C=(0,c.Z)(["\n  position: relative;\n  aspect-ratio: 16/9;\n  border-radius: 8px;\n  video,\n  .react-player__preview {\n    border-radius: 8px;\n  }\n  // defined from script, if props light is true then is visible\n  .react-player__preview:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent);\n  }\n  &:hover {\n    .video-player__controls {\n      opacity: 1;\n    }\n  }\n  .video-player__controls {\n    opacity: ","\n  }\n"])),(function(n){var e=n.state;return e.light||e.playing?"0":"1"}));function L(n){var e=n.width,t=n.height,i=n.thumbnail,r=n.title,o=n.videoUrl,a=l.useReducer(H,z),c=(0,s.Z)(a,2),d=c[0],p=c[1],x=l.useRef(null),g=l.useRef(null);return(0,P.jsxs)(A,{state:d,ref:g,sx:n.sx,children:[(0,P.jsx)(h.Z,{ref:x,url:o,width:e||"100%",height:t||"100%",light:i,playIcon:(0,P.jsx)(u.Z,{sx:{color:"white",fontSize:"6rem"}}),controls:d.controls,loop:d.loop,muted:d.muted,playing:d.playing,playbackRate:d.playbackRate,volume:d.volume,onPlay:function(){p({type:"PLAY"})},onEnded:function(){var n;p({type:"LIGHT",payload:!0}),null===(n=x.current)||void 0===n||n.showPreview()},onPause:function(){p({type:"PAUSE"})},onDuration:function(n){p({type:"DURATION",payload:n})},onProgress:function(n){p({type:"SEEK",payload:n.playedSeconds})},onClickPreview:function(){p({type:"PLAY"}),p({type:"LIGHT",payload:!1})}}),(0,P.jsx)(T,{title:r,state:d}),!d.controls&&!d.light&&(0,P.jsx)(k,{state:d,dispatch:p,playerRef:x,wrapperRef:g})]})}function R(n){var e={};return(0,a.isNotNull)(n.width)?e.width=(0,a.isString)(n.width)?n.width:"".concat(n.width,"px"):e.width="100%",(0,a.isNotNull)(n.height)?e.height=(0,a.isString)(n.height)?n.height:"".concat(n.height,"px"):e.height="100%",(0,a.isNotNull)(n.maxWidth)&&(e.maxWidth=(0,a.isString)(n.maxWidth)?n.maxWidth:"".concat(n.maxWidth,"px")),(0,a.isNotNull)(n.maxHeight)&&(e.maxHeight=(0,a.isString)(n.maxHeight)?n.maxHeight:"".concat(n.maxHeight,"px")),(0,a.isNotNull)(n.video)?(0,P.jsx)(L,{thumbnail:n.image||!0,videoUrl:n.video,width:e.width,height:e.height,sx:n.sx}):(0,P.jsx)("img",{src:n.image,alt:"image",style:(0,o.Z)((0,o.Z)({},n.sx),e)})}},78048:function(n,e,t){t.d(e,{Z:function(){return a}});var i=t(36314),r=t(13239),o=t(80184);function a(){return(0,o.jsx)(i.Z,{alignItems:"center",children:(0,o.jsx)(r.Z,{})})}},65886:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(61889),r=t(36314),o=(t(72791),t(7009)),a=t(80184);function s(n){var e=n.bannerUrl;return(0,a.jsx)(i.ZP,{container:!0,children:(0,a.jsx)(i.ZP,{item:!0,xs:12,children:(0,a.jsx)(r.Z,{alignItems:"center",children:(0,a.jsx)(o.sn,{image:e})})})})}},92134:function(n,e,t){t.d(e,{vI:function(){return b.Z},sT:function(){return h},AO:function(){return d},St:function(){return y},N$:function(){return w}});var i=t(61889),r=t(36314),o=t(20890),a=t(35527),s=t(72791),c=t(7009),l=t(80184);function d(n){var e=n.game;return(0,l.jsxs)(i.ZP,{container:!0,children:[(0,l.jsx)(i.ZP,{item:!0,xs:12,sx:{marginTop:2},children:(0,l.jsx)(r.Z,{alignItems:"center",children:(0,l.jsx)(o.Z,{variant:"h4",children:e.name})})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,sx:{marginTop:1},children:(0,l.jsx)(r.Z,{alignItems:"center",children:(0,l.jsx)(o.Z,{variant:"h6",children:e.header})})}),(0,l.jsxs)(i.ZP,{container:!0,sx:{marginTop:5},children:[(0,l.jsx)(i.ZP,{item:!0,xs:7,children:(0,l.jsx)(r.Z,{alignItems:"center",height:400,children:(0,l.jsx)(c.F$,{image:e.mainUrl,video:e.mainVideoUrl})})}),(0,l.jsx)(i.ZP,{item:!0,xs:5,children:(0,l.jsx)(a.Z,{elevation:1,children:n.menu})})]})]})}var u=t(96617);function h(n){var e=n.description;return console.log("---",e),(0,l.jsx)(i.ZP,{container:!0,children:(0,l.jsx)(i.ZP,{item:!0,xs:12,children:(0,l.jsx)(u.ZP.Markdown,{source:e,style:{backgroundColor:"#FBFBFA"}})})})}var p=t(74165),x=t(15861),g=t(29439),f=t(36151),m=t(69265),Z=t(10708),v=t(51916);function y(n){var e=n.gameId,t=n.name,a=n.price,c=(0,s.useState)(null),d=(0,g.Z)(c,2),u=d[0],h=d[1],y=(0,s.useState)(null),j=(0,g.Z)(y,2),w=j[0],b=j[1],P=function(){var n=(0,x.Z)((0,p.Z)().mark((function n(){var t,i;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(null),h(null),n.next=5,Z.Z.shop.initiateGamePurchase({gameId:e,paymentType:v.PaymentType.FIAT_CURRENCY});case 5:return t=n.sent,n.next=8,Z.Z.shop.gamePurchase({gameId:e,paymentId:null,transactionId:t.transactionId});case 8:i=n.sent,b(i.assetId),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),h(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return(0,l.jsxs)(i.ZP,{container:!0,sx:{padding:"10px 20px"},children:[(0,l.jsx)(i.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,l.jsxs)(o.Z,{variant:"h5",children:["Buy ",t]})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,l.jsx)(o.Z,{variant:"body1",children:"You will receive your game a an intangible digital copy associated to an ownership proof."})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,children:(0,l.jsxs)(r.Z,{direction:"row",gap:1,alignItems:"center",justifyContent:"end",children:[0==Number.parseFloat(a)?(0,l.jsx)(o.Z,{variant:"h4",children:"Free to Play"}):(0,l.jsxs)(o.Z,{variant:"h4",children:["$ ",a]}),(0,l.jsxs)(f.Z,{onClick:P,children:[(0,l.jsx)(m.Z,{}),"purchase"]})]})}),(0,l.jsxs)(i.ZP,{item:!0,xs:12,children:[u&&(0,l.jsx)(o.Z,{variant:"body1",color:"error",children:u.message}),w&&(0,l.jsxs)(o.Z,{variant:"body1",children:["Asset ID: ",w]})]})]})}var j=t(11478);function w(n){var e=n.name;return(0,l.jsxs)(i.ZP,{container:!0,sx:{padding:"10px 20px"},children:[(0,l.jsx)(i.ZP,{item:!0,xs:12,alignItems:"start",children:(0,l.jsxs)(o.Z,{variant:"h6",children:[e," is not release yet."]})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,children:(0,l.jsx)(r.Z,{direction:"row",justifyContent:"center",children:(0,l.jsx)(f.Z,{children:(0,l.jsxs)(r.Z,{direction:"row",gap:1,children:[(0,l.jsx)(j.Z,{}),(0,l.jsx)(o.Z,{children:"Stay in touch"})]})})})})]})}var b=t(65886)},7009:function(n,e,t){t.d(e,{F$:function(){return s},Jo:function(){return a},sn:function(){return o}});var i=t(12273),r=(t(72791),t(80184));function o(n){return(0,r.jsx)(i.Z,{image:n.image,width:"100%",maxHeight:300,sx:n.sx})}function a(n){return(0,r.jsx)(i.Z,{image:n.image,width:200,maxHeight:100,sx:n.sx})}function s(n){return(0,r.jsx)(i.Z,{image:n.image,video:n.video,width:600,maxHeight:400,sx:n.sx})}},25867:function(n,e,t){t.d(e,{k:function(){return r},T:function(){return i}});var i=t.p+"static/media/logo.351b0d8980d78fd03c65.png",r={Google:t.p+"static/media/google_ico.f29ec93d35b0fd1f2213.png"}},33615:function(n,e,t){t.d(e,{Z:function(){return c}});var i=t(74165),r=t(15861),o=t(7565),a=t(74619),s=t(84501);function c(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)((0,i.Z)().mark((function n(e){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,t){e().then((function(e){n(e)})).catch((function(i){var r;"601"==i.code&&(0,o.isNotNull)(null===(r=a.Z.getSession())||void 0===r?void 0:r.refreshToken)&&s.Z.auth.refreshToken().then((function(i){e().then((function(e){n(e)})).catch((function(n){t(n)}))})),t(i)}))})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},69265:function(n,e,t){var i=t(64836);e.Z=void 0;var r=i(t(45649)),o=t(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"}),"AddShoppingCart");e.Z=a},11478:function(n,e,t){var i=t(64836);e.Z=void 0;var r=i(t(45649)),o=t(80184),a=(0,r.default)((0,o.jsx)("path",{d:"M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"}),"NotificationAdd");e.Z=a}}]);
//# sourceMappingURL=8873.de09fd04.chunk.js.map