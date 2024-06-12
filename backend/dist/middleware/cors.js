"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corsMiddleware = void 0;
var _cors = _interopRequireDefault(require("cors"));
var ACCEPTED_ORIGINS = ['http://localhost:8080', 'http://localhost:3000', 'https://movies.com', 'https://midu.dev'];
var corsMiddleware = exports.corsMiddleware = function corsMiddleware() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$acceptedOrigins = _ref.acceptedOrigins,
    acceptedOrigins = _ref$acceptedOrigins === void 0 ? ACCEPTED_ORIGINS : _ref$acceptedOrigins;
  return (0, _cors["default"])({
    origin: function origin(_origin, callback) {
      if (acceptedOrigins.includes(_origin)) {
        return callback(null, true);
      }
      if (!_origin) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    }
  });
};