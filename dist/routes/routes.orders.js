"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ordersController = require("../controllers/orders.controller.js");
var routesOrders = (0, _express.Router)();
routesOrders.get("/", _ordersController.OrdersController.getAll);
routesOrders.get("/:id", _ordersController.OrdersController.getById);
routesOrders.patch("/:id", _ordersController.OrdersController.update);
routesOrders["delete"]("/:id", _ordersController.OrdersController["delete"]);
var _default = exports["default"] = routesOrders;