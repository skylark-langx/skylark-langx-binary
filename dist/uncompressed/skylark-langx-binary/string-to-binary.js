define([
  "./binary",
  "./string-to-arraylike"
],function(binary,stringToArrayLike){
    var support = {
       uint8array : typeof Uint8Array !== "undefined"
    };

    function string2binary(str) {
        var result = null;
        if (support.uint8array) {
            result = new Uint8Array(str.length);
        } else {
            result = new Array(str.length);
        }
        return stringToArrayLike(str, result);
    }


    return binary.string2binary = string2binary;
});
