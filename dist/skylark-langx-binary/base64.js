/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){"use strict";var exports={byteLength:function(r){var r=d(r),t=r[0],r=r[1];return 3*(t+r)/4-r}};exports.toByteArray=function(r){var t,n,e=d(r),o=e[0],e=e[1],a=new f(function(r,t){return 3*(r+t)/4-t}(o,e)),u=0,h=0<e?o-4:o;for(n=0;n<h;n+=4)t=i[r.charCodeAt(n)]<<18|i[r.charCodeAt(n+1)]<<12|i[r.charCodeAt(n+2)]<<6|i[r.charCodeAt(n+3)],a[u++]=t>>16&255,a[u++]=t>>8&255,a[u++]=255&t;2===e&&(t=i[r.charCodeAt(n)]<<2|i[r.charCodeAt(n+1)]>>4,a[u++]=255&t);1===e&&(t=i[r.charCodeAt(n)]<<10|i[r.charCodeAt(n+1)]<<4|i[r.charCodeAt(n+2)]>>2,a[u++]=t>>8&255,a[u++]=255&t);return a},exports.fromByteArray=function(r){for(var t,n=r.length,e=n%3,o=[],a=16383,u=0,h=n-e;u<h;u+=a)o.push(function(r,t,n){for(var e,o=[],a=t;a<n;a+=3)e=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(255&r[a+2]),o.push(function(r){return c[r>>18&63]+c[r>>12&63]+c[r>>6&63]+c[63&r]}(e));return o.join("")}(r,u,h<u+a?h:u+a));1==e?(t=r[n-1],o.push(c[t>>2]+c[t<<4&63]+"==")):2==e&&(t=(r[n-2]<<8)+r[n-1],o.push(c[t>>10]+c[t>>4&63]+c[t<<2&63]+"="));return o.join("")};for(var c=[],i=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,n=r.length;t<n;++t)c[t]=r[t],i[r.charCodeAt(t)]=t;function d(r){var t=r.length;if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4");r=r.indexOf("="),t=(r=-1===r?t:r)===t?0:4-r%4;return[r,t]}return i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63,exports});
//# sourceMappingURL=sourcemaps/base64.js.map
