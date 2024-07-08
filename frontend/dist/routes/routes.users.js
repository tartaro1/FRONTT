"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usersController = require("../controllers/users.controller.js");
var routesUsers = (0, _express.Router)();
routesUsers.get("/", _usersController.UsersController.getAll);
var _default = exports["default"] = routesUsers;