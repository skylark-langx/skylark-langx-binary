define([
  "./binary"
],function(binary){

    function stringToArrayLike(str, array) {
        for (var i = 0; i < str.length; ++i) {
            array[i] = str.charCodeAt(i) & 255;
        }
        return array;
    }

    return binary.stringToArrayLike = stringToArrayLike;
});
