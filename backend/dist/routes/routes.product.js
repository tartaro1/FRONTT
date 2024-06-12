"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productsControllers = require("../controllers/products.controllers.js");
var routesProducts = (0, _express.Router)();
routesProducts.get("/:id", _productsControllers.ProductController.getById);
routesProducts.get("/", _productsControllers.ProductController.getAll);
routesProducts.get("/:name", _productsControllers.ProductController.getByName);
routesProducts.post("/", _productsControllers.ProductController.createProduct);
routesProducts["delete"]("/:id", _productsControllers.ProductController.deleteProduct);
routesProducts.patch("/:id", _productsControllers.ProductController.updateProduct);
var _default = exports["default"] = routesProducts;