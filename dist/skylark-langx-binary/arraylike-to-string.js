/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./get-type-of"],function(r,e){var i={stringifyByChunk:function(r,n,t){var a=[],e=0,i=r.length;if(i<=t)return String.fromCharCode.apply(null,r);for(;e<i;)a.push("array"===n||"nodebuffer"===n?String.fromCharCode.apply(null,r.slice(e,Math.min(e+t,i))):String.fromCharCode.apply(null,r.subarray(e,Math.min(e+t,i)))),e+=t;return a.join("")},stringifyByChar:function(r){for(var n="",t=0;t<r.length;t++)n+=String.fromCharCode(r[t]);return n},applyCanBeUsed:{uint8array:function(){try{return 1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(r){return!1}}(),nodebuffer:function(){try{return 1===String.fromCharCode.apply(null,Buffer.alloc(1)).length}catch(r){return!1}}()}};return r.arrayLikeToString=function(r){var n=65536,t=e(r),a=!0;if("uint8array"===t?a=i.applyCanBeUsed.uint8array:"memory"===t&&(a=i.applyCanBeUsed.nodebuffer),a)for(;1<n;)try{return i.stringifyByChunk(r,t,n)}catch(r){n=Math.floor(n/2)}return i.stringifyByChar(r)}});
//# sourceMappingURL=sourcemaps/arraylike-to-string.js.map
