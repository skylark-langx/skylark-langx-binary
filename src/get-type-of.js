define([
    "./binary",
    "./memory"
],function(binary,Memory){
     function getTypeOf(input) {
        if (typeof input === 'string') {
            return 'string';
        }
        if (Object.prototype.toString.call(input) === '[object Array]') {
            return 'array';
        }
        if (Memory.isMemory(input)) {
            return 'memory';
        }
        if (input instanceof Uint8Array) {
            return 'uint8array';
        }
        if (input instanceof ArrayBuffer) {
            return 'arraybuffer';
        }
    }
	
	return getTypeOf;	
})