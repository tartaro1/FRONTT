"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dealersController = require("../controllers/dealers.controller.js");
var routerDeliver = (0, _express.Router)();
routerDeliver.get("/", _dealersController.DealersController.getAll);
routerDeliver.get("/:id", _dealersController.DealersController.getById);
routerDeliver.post("/", _dealersController.DealersController.create);
routerDeliver["delete"]("/:id", _dealersController.DealersController["delete"]);
routerDeliver.patch("/:id", _dealersController.DealersController.update);
var _default = exports["default"] = routerDeliver;