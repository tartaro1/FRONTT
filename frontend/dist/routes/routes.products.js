"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productsController = require("../controllers/products.controller.js");
var routesProducts = (0, _express.Router)();
routesProducts.use("/", _productsController.ProductController.getAll);
var _default = exports["default"] = routesProducts;