"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dealersController = require("../controllers/dealers.controller.js");
var routesDelivers = (0, _express.Router)();
routesDelivers.get("/", _dealersController.DealersController.getAll);
var _default = exports["default"] = routesDelivers;