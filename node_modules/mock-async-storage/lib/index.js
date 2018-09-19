'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.release = exports.mock = undefined;

var _mockAsyncStorage = require('./mockAsyncStorage');

var _mockAsyncStorage2 = _interopRequireDefault(_mockAsyncStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mockAsyncStorage2.default;
exports.mock = _mockAsyncStorage.mock;
exports.release = _mockAsyncStorage.release;