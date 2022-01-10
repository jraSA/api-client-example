const assert = require('assert');
const { apiClient } = require('./lib');

assert.deepStrictEqual(typeof apiClient, 'function');
