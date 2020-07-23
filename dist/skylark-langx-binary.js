/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,n){var e=n.define,require=n.require,t="function"==typeof e&&e.amd,a=!t&&"undefined"!=typeof exports;if(!t&&!e){var i={};e=n.define=function(r,n,e){"function"==typeof e?(i[r]={factory:e,deps:n.map(function(n){return function(r,n){if("."!==r[0])return r;var e=n.split("/"),t=r.split("/");e.pop();for(var a=0;a<t.length;a++)"."!=t[a]&&(".."==t[a]?e.pop():e.push(t[a]));return e.join("/")}(n,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:e}},require=n.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var e=[];module.deps.forEach(function(r){e.push(require(r))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-binary/binary",["skylark-langx-ns/ns"],function(r){"use strict";return r.attach("langx.binary",{fromBase64:function(r){for(var n,e,t,a,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=r.length/4*3,f=new ArrayBuffer(o),u=new Uint8Array(f),l=0,s=0;l<o;l+=3)n=i.indexOf(r.charAt(s++)),e=i.indexOf(r.charAt(s++)),t=i.indexOf(r.charAt(s++)),a=i.indexOf(r.charAt(s++)),u[l]=n<<2|e>>4,64!==t&&(u[l+1]=(15&e)<<4|t>>2),64!==a&&(u[l+2]=(3&t)<<6|a);return f},fromBinaryString:function(r){for(var n=r.length,e=new ArrayBuffer(n),t=new Uint8Array(e),a=0;a<n;a++)t[a]=r.charCodeAt(a);return e},fromBuffer:function(r){for(var n=new ArrayBuffer(r.length),e=new Uint8Array(n),t=0;t<r.length;t++)e[t]=r[t];return n}})}),r("skylark-langx-binary/main",["./binary"],function(r){return r}),r("skylark-langx-binary",["skylark-langx-binary/main"],function(r){return r})}(e),!t){var o=require("skylark-langx-ns");a?module.exports=o:n.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-binary.js.map
