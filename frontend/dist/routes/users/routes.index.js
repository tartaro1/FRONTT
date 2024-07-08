"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _indexController = require("../../controllers/users/index.controller.js");
var routesIndex = (0, _express.Router)();
routesIndex.get("/", _indexController.index);
routesIndex.get("/login", _indexController.login);
routesIndex.get("/registro", _indexController.signup);
routesIndex.get("/inicio", _indexController.inicio);
routesIndex.get("/search", _indexController.search);
routesIndex.get("/categorias", _indexController.categorias);
routesIndex.get("/formulario", _indexController.formulario);
routesIndex.get("/producto", _indexController.producto);
var _default = exports["default"] = routesIndex;