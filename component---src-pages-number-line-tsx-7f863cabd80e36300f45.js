(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9aa":function(t,n,e){var r=e("NykK"),o=e("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},AP2z:function(t,n,e){var r=e("nmnc"),o=Object.prototype,u=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var n=u.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(i){}var o=c.call(t);return r&&(n?t[a]=e:delete t[a]),o}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},HLqC:function(t,n,e){var r=e("R5Y4"),o=e("mv/X"),u=e("ZCgT");t.exports=function(t){return function(n,e,c){return c&&"number"!=typeof c&&o(n,e,c)&&(e=c=void 0),n=u(n),void 0===e?(e=n,n=0):e=u(e),c=void 0===c?n<e?1:-1:u(c),r(n,e,c,t)}}},JqxV:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return y}));var r=e("KQm4"),o=e("jrVH"),u=e("3gKx"),c=e("FTjk"),a=e("WjpJ"),i=e.n(a),s=e("q1tI"),f=e.n(s);function l(t){var n=t.question,e=t.guesses,r=t.currentlyGuessing,o=t.results;return f.a.createElement("div",{className:"number-line-container"},i()(0,n.amountOfNumbers*n.countIn,n.countIn).map((function(t,u){var c=n.blanks.indexOf(u),a=c>-1,i=a?e[c]:""+t;return f.a.createElement("div",{key:t,className:"number-line-box "+(a?"blank":"")+" "+(r===c&&void 0===o?"current":"")+" "+(a&&void 0!==o?o[c]?"correct":"incorrect":"")},i)})))}var b=e("KeKg"),m=e("+KGR");function p(t,n,e){for(var r=n[Object(m.a)(0,n.length)],o=[];o.length<e;){var u=Object(m.a)(0,t);o.includes(u)||o.push(u)}return{amountOfNumbers:t,countIn:r,blanks:o.sort((function(t,n){return t-n}))}}var v,O=e("Wbzz");!function(t){t[t.WaitingToStart=0]="WaitingToStart",t[t.InProgress=1]="InProgress",t[t.Results=2]="Results"}(v||(v={}));var j=[{amountOfNumbers:11,countInOptions:[1],numberOfBlanks:3},{amountOfNumbers:20,countInOptions:[1],numberOfBlanks:5},{amountOfNumbers:20,countInOptions:[1,2,5],numberOfBlanks:5}];function y(){var t=Object(s.useState)(v.WaitingToStart),n=t[0],e=t[1],a=Object(s.useState)(2),m=a[0],y=a[1],g=Object(s.useState)([]),d=g[0],h=g[1],x=Object(s.useState)(void 0),k=x[0],N=x[1],S=Object(s.useState)(0),w=S[0],I=S[1],P=Object(s.useState)([]),T=P[0],E=P[1],K=Object(s.useState)(void 0),W=K[0],B=K[1],F=Object(s.useState)(!1),R=F[0],q=F[1],A=Object(s.useRef)();function G(){e(v.WaitingToStart),y(0),h([]),N(void 0),B(void 0),I(0),E([]),q(!1),A.current&&clearTimeout(A.current)}function M(t){N(t),E(new Array(t.blanks.length).fill("")),I(0)}function D(){var t=function(t){var n=[];return i()(0,t.amountOfNumbers*t.countIn,t.countIn).forEach((function(e,r){t.blanks.includes(r)&&n.push(""+e)})),n}(k).reduce((function(t,n,e){return t.push(n===T[e]),t}),[]),n=d.length+1;h([].concat(Object(r.a)(d),[t.every((function(t){return!0===t}))])),q(!0),B(t),A.current=setTimeout((function(){A.current=void 0,n<10?(B(void 0),M(p(j[m].amountOfNumbers,j[m].countInOptions,j[m].numberOfBlanks))):e(v.Results),q(!1)}),4e3)}return Object(s.useEffect)((function(){return function(){A.current&&clearTimeout(A.current)}}),[]),f.a.createElement("main",null,f.a.createElement(o.a,{title:"Number Line",backPressed:function(){switch(n){case v.WaitingToStart:Object(O.c)("/");break;case v.InProgress:case v.Results:G()}}}),n===v.WaitingToStart&&f.a.createElement(c.a,{onPress:function(t){y(t),M(p(j[t].amountOfNumbers,j[t].countInOptions,j[t].numberOfBlanks)),e(v.InProgress)}}),n===v.InProgress&&k&&f.a.createElement(f.a.Fragment,null,f.a.createElement(l,{question:k,currentlyGuessing:w,guesses:T,results:W}),f.a.createElement(u.a,{keypadDisabled:R,deleteDisabled:0===w&&0===T[w].length,enterDisabled:!1,onKeyPress:function(t){var n=T[w];switch(t.type){case"number":n.length<2&&"0"!==n&&E([].concat(Object(r.a)(T.slice(0,w)),[""+n+t.number],Object(r.a)(T.slice(w+1))));break;case"delete":n.length>0?E([].concat(Object(r.a)(T.slice(0,w)),[n.slice(0,n.length-1)],Object(r.a)(T.slice(w+1)))):w>0&&I(w-1);break;case"enter":w<k.blanks.length-1?I(w+1):D()}}})),n===v.Results&&f.a.createElement(b.a,{results:d,outOf:10,onPlayAgainPressed:G}))}},KfNM:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},Kz5y:function(t,n,e){var r=e("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},MMmD:function(t,n,e){var r=e("lSCD"),o=e("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},NykK:function(t,n,e){var r=e("nmnc"),o=e("AP2z"),u=e("KfNM"),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):u(t)}},R5Y4:function(t,n){var e=Math.ceil,r=Math.max;t.exports=function(t,n,o,u){for(var c=-1,a=r(e((n-t)/(o||1)),0),i=Array(a);a--;)i[u?a:++c]=t,t+=o;return i}},WFqU:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("yLpj"))},WjpJ:function(t,n,e){var r=e("HLqC")();t.exports=r},ZCgT:function(t,n,e){var r=e("tLB3");t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},lSCD:function(t,n,e){var r=e("NykK"),o=e("GoyQ");t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},"mv/X":function(t,n,e){var r=e("ljhN"),o=e("MMmD"),u=e("wJg7"),c=e("GoyQ");t.exports=function(t,n,e){if(!c(e))return!1;var a=typeof n;return!!("number"==a?o(e)&&u(n,e.length):"string"==a&&n in e)&&r(e[n],t)}},nmnc:function(t,n,e){var r=e("Kz5y").Symbol;t.exports=r},shjB:function(t,n){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},tLB3:function(t,n,e){var r=e("GoyQ"),o=e("/9aa"),u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var e=a.test(t);return e||i.test(t)?s(t.slice(2),e?2:8):c.test(t)?NaN:+t}},wJg7:function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"==typeof window&&(e=window)}t.exports=e}}]);
//# sourceMappingURL=component---src-pages-number-line-tsx-7f863cabd80e36300f45.js.map