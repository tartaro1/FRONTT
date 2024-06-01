"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routesProduct = _interopRequireDefault(require("./routes.product.js"));
var _routesUsers = _interopRequireDefault(require("./routes.users.js"));
var _routesOrders = _interopRequireDefault(require("./routes.orders.js"));
var _routesDealers = _interopRequireDefault(require("./routes.dealers.js"));
var _express = require("express");
var router = (0, _express.Router)();
router.use("/products", _routesProduct["default"]);
router.use("/users", _routesUsers["default"]);
router.use("/dealers", _routesDealers["default"]);
router.use("/orders", _routesOrders["default"]);
var _default = exports["default"] = router;