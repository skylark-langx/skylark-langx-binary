/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./memory"],function(r,n){return function(r){return"string"==typeof r?"string":"[object Array]"===Object.prototype.toString.call(r)?"array":n.isMemory(r)?"memory":r instanceof Uint8Array?"uint8array":r instanceof ArrayBuffer?"arraybuffer":void 0}});
//# sourceMappingURL=sourcemaps/get-type-of.js.map
