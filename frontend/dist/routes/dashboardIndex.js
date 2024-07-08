"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routesUsers = _interopRequireDefault(require("./routes.users.js"));
var _routesProducts = _interopRequireDefault(require("./routes.products.js"));
var _routesDetails = _interopRequireDefault(require("./routes.details.js"));
var _express = require("express");
var _routesOrders = _interopRequireDefault(require("./routes.orders.js"));
var _routesDealers = _interopRequireDefault(require("./routes.dealers.js"));
var _routesBackup = _interopRequireDefault(require("./routes.backup.js"));
var dashboardRouter = (0, _express.Router)();
dashboardRouter.use("/users", _routesUsers["default"]);
dashboardRouter.use("/products", _routesProducts["default"]);
dashboardRouter.use("/detailsOrders", _routesDetails["default"]);
dashboardRouter.use("/orders", _routesOrders["default"]);
dashboardRouter.use("/dealers", _routesDealers["default"]);
dashboardRouter.use("/backup", _routesBackup["default"]);
dashboardRouter.use("/gestion", function (req, res) {
  res.render("pages/admin/gestion", {
    layout: "layouts/main-admin",
    title: 'Dashboard gestion'
  });
});
dashboardRouter.use("/", function (req, res) {
  res.render("pages/admin/index", {
    layout: "layouts/main-admin",
    title: 'Home Dashboard Tartaro'
  });
});
var _default = exports["default"] = dashboardRouter;