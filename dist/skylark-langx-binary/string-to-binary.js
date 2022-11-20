/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./binary","./string-to-arraylike"],function(n,r){var t={uint8array:"undefined"!=typeof Uint8Array};return n.string2binary=function(n){var a=null;return a=t.uint8array?new Uint8Array(n.length):new Array(n.length),r(n,a)}});
//# sourceMappingURL=sourcemaps/string-to-binary.js.map
