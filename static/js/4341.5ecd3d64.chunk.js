"use strict";(self.webpackChunkgameown_website=self.webpackChunkgameown_website||[]).push([[4341],{54341:function(e,t,r){function n(e){for(var t={},r=0,n=e.length;r<n;++r)t[e[r]]=!0;return t}r.r(t),r.d(t,{eiffel:function(){return u}});var a=n(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),i=n([":=","and then","and","or","<<",">>"]);function o(e,t){if(e.eatSpace())return null;var r,n,a,i=e.next();return'"'==i||"'"==i?function(e,t,r){return r.tokenize.push(e),e(t,r)}((r=i,n="string",function(e,t){for(var i,o=!1;null!=(i=e.next());){if(i==r&&(a||!o)){t.tokenize.pop();break}o=!o&&"%"==i}return n}),e,t):"-"==i&&e.eat("-")?(e.skipToEnd(),"comment"):":"==i&&e.eat("=")?"operator":/[0-9]/.test(i)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"variable"):/[a-zA-Z_0-9]/.test(i)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"variable"):/[=+\-\/*^%<>~]/.test(i)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}var u={name:"eiffel",startState:function(){return{tokenize:[o]}},token:function(e,t){var r=t.tokenize[t.tokenize.length-1](e,t);if("variable"==r){var n=e.current();r=a.propertyIsEnumerable(e.current())?"keyword":i.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(n)?"tag":/^0[bB][0-1]+$/g.test(n)||/^0[cC][0-7]+$/g.test(n)||/^0[xX][a-fA-F0-9]+$/g.test(n)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(n)||/^[0-9]+$/g.test(n)?"number":"variable"}return r},languageData:{commentTokens:{line:"--"}}}}}]);
//# sourceMappingURL=4341.5ecd3d64.chunk.js.map