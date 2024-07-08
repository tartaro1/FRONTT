"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _backupController = require("../controllers/backup.controller.js");
var routesBackup = (0, _express.Router)();
routesBackup.get("/", _backupController.BackupsController.getLatest);
var _default = exports["default"] = routesBackup;