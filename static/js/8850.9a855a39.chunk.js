"use strict";(self.webpackChunkgameown_website=self.webpackChunkgameown_website||[]).push([[8850],{8850:function(e,t,n){n.r(t),n.d(t,{cypher:function(){return m}});var r,a=function(e){return new RegExp("^(?:"+e.join("|")+")$","i")},i=function(e){r=null;var t=e.next();if('"'===t)return e.match(/^.*?"/),"string";if("'"===t)return e.match(/^.*?'/),"string";if(/[{}\(\),\.;\[\]]/.test(t))return r=t,"punctuation";if("/"===t&&e.eat("/"))return e.skipToEnd(),"comment";if(p.test(t))return e.eatWhile(p),null;if(e.eatWhile(/[_\w\d]/),e.eat(":"))return e.eatWhile(/[\w\d_\-]/),"atom";var n=e.current();return l.test(n)?"builtin":c.test(n)?"def":u.test(n)||d.test(n)?"keyword":"variable"},o=function(e,t,n){return e.context={prev:e.context,indent:e.indent,col:n,type:t}},s=function(e){return e.indent=e.context.indent,e.context=e.context.prev},l=a(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),c=a(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),u=a(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),d=a(["access","active","assign","all","alter","as","catalog","change","copy","create","constraint","constraints","current","database","databases","dbms","default","deny","drop","element","elements","exists","from","grant","graph","graphs","if","index","indexes","label","labels","management","match","name","names","new","node","nodes","not","of","on","or","password","populated","privileges","property","read","relationship","relationships","remove","replace","required","revoke","role","roles","set","show","start","status","stop","suspended","to","traverse","type","types","user","users","with","write"]),p=/[*+\-<>=&|~%^]/,m={name:"cypher",startState:function(){return{tokenize:i,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()&&(t.context&&null==t.context.align&&(t.context.align=!1),t.indent=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);if("comment"!==n&&t.context&&null==t.context.align&&"pattern"!==t.context.type&&(t.context.align=!0),"("===r)o(t,")",e.column());else if("["===r)o(t,"]",e.column());else if("{"===r)o(t,"}",e.column());else if(/[\]\}\)]/.test(r)){for(;t.context&&"pattern"===t.context.type;)s(t);t.context&&r===t.context.type&&s(t)}else"."===r&&t.context&&"pattern"===t.context.type?s(t):/atom|string|variable/.test(n)&&t.context&&(/[\}\]]/.test(t.context.type)?o(t,"pattern",e.column()):"pattern"!==t.context.type||t.context.align||(t.context.align=!0,t.context.col=e.column()));return n},indent:function(e,t,n){var r=t&&t.charAt(0),a=e.context;if(/[\]\}]/.test(r))for(;a&&"pattern"===a.type;)a=a.prev;var i=a&&r===a.type;return a?"keywords"===a.type?null:a.align?a.col+(i?0:1):a.indent+(i?0:n.unit):0}}}}]);
//# sourceMappingURL=8850.9a855a39.chunk.js.map