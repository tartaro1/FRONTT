"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ordersController = require("../controllers/orders.controller.js");
var routesOrders = (0, _express.Router)();
routesOrders.get("/", _ordersController.OrdersController.getAll);
var _default = exports["default"] = routesOrders;