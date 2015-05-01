'use strict';

var _ = require('lodash');

var HashMap = function() {
  this._keys = [];
  this._data = [];
};

HashMap.prototype.has = function(key) {
  return _.findIndex(this._keys, key) > -1;
};

HashMap.prototype.get = function(key) {
  var keyIndex = _.findIndex(this._keys, function(currentKey) {
    return _.isEqual(currentKey, key);
  });

  if (keyIndex > -1) {
    return this._data[keyIndex];
  } else {
    return undefined;
  }
};

HashMap.prototype.set = function(key, value) {
  var keyIndex = _.findIndex(this._keys, function(currentKey) {
    return _.isEqual(currentKey, key);
  });

  if (keyIndex > -1) {
    this._data[keyIndex] = value;
  } else {
    this._keys.push(key);
    this._data.push(value);
  }
};

HashMap.prototype.clear = function(key) {
  if (!key) {
    this._keys = [];
    this._data = [];
  } else {
    var keyIndex = _.findIndex(this._keys, function(currentKey) {
      return _.isEqual(currentKey, key);
    });

    if (keyIndex > -1) {
      delete this._keys[keyIndex];
      delete this._data[keyIndex];
    }
  }
};

HashMap.prototype.keys = function() {
  return this._keys;
};

HashMap.prototype.values = function() {
  return this._data;
};

HashMap.prototype.forEach = function(callback) {
  for (var i = 0; i < this._keys.length; i++) {
    callback(this._data[i], this._keys[i]);
  }
};

module.exports = HashMap;
