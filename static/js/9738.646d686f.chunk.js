"use strict";(self.webpackChunkgameown_website=self.webpackChunkgameown_website||[]).push([[9738],{79738:function(e,t,n){function r(e,t,n){return function(r,i){for(;!r.eol();){if(r.match(t)){i.tokenize=a;break}r.next()}return n&&(i.tokenize=n),e}}function i(e){return function(t,n){for(;!t.eol();)t.next();return n.tokenize=a,e}}function a(e,t){function n(n){return t.tokenize=n,n(e,t)}var u=e.sol(),o=e.next();switch(o){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=s,"tag";case"_":if(e.eat("_"))return n(r("strong","__",a));break;case"'":if(e.eat("'"))return n(r("em","''",a));break;case"(":if(e.eat("("))return n(r("link","))",a));break;case"[":return n(r("url","]",a));case"|":if(e.eat("|"))return n(r("comment","||"));break;case"-":if(e.eat("="))return n(r("header string","=-",a));if(e.eat("-"))return n(r("error tw-deleted","--",a));break;case"=":if(e.match("=="))return n(r("tw-underline","===",a));break;case":":if(e.eat(":"))return n(r("comment","::"));break;case"^":return n(r("tw-box","^"));case"~":if(e.match("np~"))return n(r("meta","~/np~"))}if(u)switch(o){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),n(i("header string"));case"*":case"#":case"+":return n(i("tw-listitem bracket"))}return null}var u,o,c,f;function s(e,t){var n,r=e.next(),i=e.peek();return"}"==r?(t.tokenize=a,"tag"):"("==r||")"==r?"bracket":"="==r?(o="equals",">"==i&&(e.next(),i=e.peek()),/[\'\"]/.test(i)||(t.tokenize=function(e,t){for(;!e.eol();){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=s;break}}return"string"}),"operator"):/[\'\"]/.test(r)?(t.tokenize=(n=r,function(e,t){for(;!e.eol();)if(e.next()==n){t.tokenize=s;break}return"string"}),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function l(){for(var e=arguments.length-1;e>=0;e--)c.cc.push(arguments[e])}function k(){return l.apply(null,arguments),!0}function d(e,t){var n=c.context&&c.context.noIndent;c.context={prev:c.context,pluginName:e,indent:c.indented,startOfLine:t,noIndent:n}}function p(){c.context&&(c.context=c.context.prev)}function g(e){if("openPlugin"==e)return c.pluginName=u,k(m,(n=c.startOfLine,function(e){return"selfclosePlugin"==e||"endPlugin"==e?k():"endPlugin"==e?(d(c.pluginName,n),k()):k()}));if("closePlugin"==e){var t=!1;return c.context?(t=c.context.pluginName!=u,p()):t=!0,t&&(f="error"),k(function(e){return function(t){return e&&(f="error"),"endPlugin"==t?k():l()}}(t))}return"string"==e?(c.context&&"!cdata"==c.context.name||d("!cdata"),c.tokenize==a&&p(),k()):k();var n}function m(e){return"keyword"==e?(f="attribute",k(m)):"equals"==e?k(x,m):l()}function x(e){return"keyword"==e?(f="string",k()):"string"==e?k(b):l()}function b(e){return"string"==e?k(b):l()}n.r(t),n.d(t,{tiki:function(){return h}});var h={name:"tiki",startState:function(){return{tokenize:a,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;f=o=u=null;var n=t.tokenize(e,t);if((n||o)&&"comment"!=n)for(c=t;;){if((t.cc.pop()||g)(o||n))break}return t.startOfLine=!1,f||n},indent:function(e,t,n){var r=e.context;if(r&&r.noIndent)return 0;for(r&&/^{\//.test(t)&&(r=r.prev);r&&!r.startOfLine;)r=r.prev;return r?r.indent+n.unit:0}}}}]);
//# sourceMappingURL=9738.646d686f.chunk.js.map