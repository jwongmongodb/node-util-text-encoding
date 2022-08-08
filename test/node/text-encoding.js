var assert = require('assert');
var util = require('../../');

// TextEncoder
assert.deepEqual((new util.TextEncoder('utf-8', {'fatal': true}))
    .encode('hi'), new Uint8Array([0x68, 0x69]));

// TextDecoder
assert.deepEqual((new util.TextDecoder('utf-8', {'fatal': true}))
    .decode(new Uint8Array([0x68, 0x69])), 'hi');
assert.throws(() => {(new util.TextDecoder('utf-8', {'fatal': true}))
    .decode(new Uint8Array([0xff]));})
