/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns/ns"],function(r){"use strict";return skyalrk.attach("langx.binary",{fromBase64:function(r){for(var n,e,t,a,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=r.length/4*3,u=new ArrayBuffer(i),c=new Uint8Array(u),o=0,A=0;o<i;o+=3)n=f.indexOf(r.charAt(A++)),e=f.indexOf(r.charAt(A++)),t=f.indexOf(r.charAt(A++)),a=f.indexOf(r.charAt(A++)),c[o]=n<<2|e>>4,64!==t&&(c[o+1]=(15&e)<<4|t>>2),64!==a&&(c[o+2]=(3&t)<<6|a);return u},fromBinaryString:function(r){for(var n=r.length,e=new ArrayBuffer(n),t=new Uint8Array(e),a=0;a<n;a++)t[a]=r.charCodeAt(a);return e},fromBuffer:function(r){for(var n=new ArrayBuffer(r.length),e=new Uint8Array(n),t=0;t<r.length;t++)e[t]=r[t];return n}})});
//# sourceMappingURL=sourcemaps/binary.js.map
