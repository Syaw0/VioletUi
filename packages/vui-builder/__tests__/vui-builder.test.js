'use strict';

const vuiBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(vuiBuilder(), 'Hello from vuiBuilder');
console.info('vuiBuilder tests passed');
