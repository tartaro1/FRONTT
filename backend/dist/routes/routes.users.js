"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usersController = require("../controllers/users.controller.js");
var routesUsers = (0, _express.Router)();
routesUsers.get("/login", _usersController.UsersController.loginUser);
routesUsers.get("/", _usersController.UsersController.getAll);
routesUsers.get("/:id", _usersController.UsersController.getById);
routesUsers.post("/", _usersController.UsersController.createUser);
routesUsers["delete"]("/:id", _usersController.UsersController.deleteUser);
routesUsers.patch("/:id", _usersController.UsersController.updateUser);
var _default = exports["default"] = routesUsers;