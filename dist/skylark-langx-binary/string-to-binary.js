/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./string-to-arraylike"],function(n,i){var t="undefined"!=typeof Uint8Array;return n.string2binary=function(n){var r=null,r=new(t?Uint8Array:Array)(n.length);return i(n,r)}});
//# sourceMappingURL=sourcemaps/string-to-binary.js.map
