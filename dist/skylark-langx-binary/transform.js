/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./memory","./get-type-of","./string-to-arraylike","./arraylike-to-string"],function(r,n,t,e,a){function u(r){return r}function f(r,n){for(var t=0;t<r.length;t++)n[t]=r[t];return n}var i=function(r,n){if(n||(n=""),!r)return n;var e=t(n);return i[e][r](n)};return i.string={string:u,array:function(r){return e(r,new Array(r.length))},arraybuffer:function(r){return i.string.uint8array(r).buffer},uint8array:function(r){return e(r,new Uint8Array(r.length))},memory:function(r){return e(r,Buffer.alloc(r.length))}},i.array={string:a,array:u,arraybuffer:function(r){return new Uint8Array(r).buffer},uint8array:function(r){return new Uint8Array(r)},memory:function(r){return n.from(r)}},i.arraybuffer={string:function(r){return a(new Uint8Array(r))},array:function(r){return f(new Uint8Array(r),new Array(r.byteLength))},arraybuffer:u,uint8array:function(r){return new Uint8Array(r)},memory:function(r){return n.from(new Uint8Array(r))}},i.uint8array={string:a,array:function(r){return f(r,new Array(r.length))},arraybuffer:function(r){return r.buffer},uint8array:u,memory:function(r){return n.from(r)}},i.memory={string:a,array:function(r){return f(r,new Array(r.length))},arraybuffer:function(r){return i.memory.uint8array(r).buffer},uint8array:function(r){return f(r,new Uint8Array(r.length))},memory:u},r.transform=i});
//# sourceMappingURL=sourcemaps/transform.js.map
