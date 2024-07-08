"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesIndex = _interopRequireDefault(require("./routes.index.js"));
var usersIndex = (0, _express.Router)();
usersIndex.use("/", _routesIndex["default"]);
var _default = exports["default"] = usersIndex;