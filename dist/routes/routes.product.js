"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productsControllers = require("../controllers/products.controllers.js");
var router = (0, _express.Router)();
router.get("/:id", _productsControllers.ProductController.getById);
router.get("/", _productsControllers.ProductController.getAll);
router.get("/:name", _productsControllers.ProductController.getByName);
router.post("/", _productsControllers.ProductController.createProduct);
router["delete"]("/:id", _productsControllers.ProductController.deleteProduct);
router.patch("/:id", _productsControllers.ProductController.updateProduct);
var _default = exports["default"] = router;