define([
    "./binary",
    "./memory",
    "./get-type-of",
    "./string-to-arraylike",
    "./arraylike-to-string"
],function(binary,Memory,getTypeOf,stringToArrayLike,arrayLikeToString){

    function identity(input) {
        return input;
    }

    function arrayLikeToArrayLike(arrayFrom, arrayTo) {
        for (var i = 0; i < arrayFrom.length; i++) {
            arrayTo[i] = arrayFrom[i];
        }
        return arrayTo;
    }

    var transform =  function (outputType, input) {
        if (!input) {
            input = '';
        }
        if (!outputType) {
            return input;
        }
        var inputType = getTypeOf(input);
        var result = transform[inputType][outputType](input);
        return result;
    };
    transform['string'] = {
        'string': identity,
        'array': function (input) {
            return stringToArrayLike(input, new Array(input.length));
        },
        'arraybuffer': function (input) {
            return transform['string']['uint8array'](input).buffer;
        },
        'uint8array': function (input) {
            return stringToArrayLike(input, new Uint8Array(input.length));
        },
        'memory': function (input) {
            ///return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
            return stringToArrayLike(input, Buffer.alloc(input.length));
        }
    };
    transform['array'] = {
        'string': arrayLikeToString,
        'array': identity,
        'arraybuffer': function (input) {
            return new Uint8Array(input).buffer;
        },
        'uint8array': function (input) {
            return new Uint8Array(input);
        },
        'memory': function (input) {
            ///return nodejsUtils.newBufferFrom(input);
            return Memory.from(input);
        }
    };
    transform['arraybuffer'] = {
        'string': function (input) {
            return arrayLikeToString(new Uint8Array(input));
        },
        'array': function (input) {
            return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
        },
        'arraybuffer': identity,
        'uint8array': function (input) {
            return new Uint8Array(input);
        },
        'memory': function (input) {
            ///return nodejsUtils.newBufferFrom(new Uint8Array(input));
            return Memory.from(new Uint8Array(input));
        }
    };
    transform['uint8array'] = {
        'string': arrayLikeToString,
        'array': function (input) {
            return arrayLikeToArrayLike(input, new Array(input.length));
        },
        'arraybuffer': function (input) {
            return input.buffer;
        },
        'uint8array': identity,
        'memory': function (input) {
            ///return nodejsUtils.newBufferFrom(input);
            return Memory.from(input);
        }
    };
    transform['memory'] = {
        'string': arrayLikeToString,
        'array': function (input) {
            return arrayLikeToArrayLike(input, new Array(input.length));
        },
        'arraybuffer': function (input) {
            return transform['memory']['uint8array'](input).buffer;
        },
        'uint8array': function (input) {
            return arrayLikeToArrayLike(input, new Uint8Array(input.length));
        },
        'memory': identity
    };

    return binary.transform = transform;
});
