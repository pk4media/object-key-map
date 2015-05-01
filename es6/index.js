/* jshint esnext: true */
'use strict';

let HashMap = require('../index');

HashMap.prototype[Symbol.iterator] = function*() {
  for (var i = 0; i < this._keys.length; i++) {
    yield { keys: this._keys[i], values: this._data[i] };
  }
};

module.exports = HashMap;
