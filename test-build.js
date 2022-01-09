const assert = require('assert');
const { crudder } = require('./lib');

assert.deepStrictEqual(typeof crudder, 'function');
