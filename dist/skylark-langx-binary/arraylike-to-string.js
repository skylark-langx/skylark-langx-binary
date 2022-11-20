/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./get-type-of"],function(r,n){var t={stringifyByChunk:function(r,n,t){var a=[],e=0,u=r.length;if(u<=t)return String.fromCharCode.apply(null,r);for(;e<u;)"array"===n||"nodebuffer"===n?a.push(String.fromCharCode.apply(null,r.slice(e,Math.min(e+t,u)))):a.push(String.fromCharCode.apply(null,r.subarray(e,Math.min(e+t,u)))),e+=t;return a.join("")},stringifyByChar:function(r){for(var n="",t=0;t<r.length;t++)n+=String.fromCharCode(r[t]);return n},applyCanBeUsed:{uint8array:function(){try{return support.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(r){return!1}}(),nodebuffer:function(){try{return support.nodebuffer&&1===String.fromCharCode.apply(null,Buffer.alloc(1)).length}catch(r){return!1}}()}};return r.arrayLikeToString=function(r){var a=65536,e=n(r),u=!0;if("uint8array"===e?u=t.applyCanBeUsed.uint8array:"memory"===e&&(u=t.applyCanBeUsed.nodebuffer),u)for(;a>1;)try{return t.stringifyByChunk(r,e,a)}catch(r){a=Math.floor(a/2)}return t.stringifyByChar(r)}});
//# sourceMappingURL=sourcemaps/arraylike-to-string.js.map
