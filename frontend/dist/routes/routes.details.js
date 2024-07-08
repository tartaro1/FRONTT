"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _detailsController = require("../controllers/details.controller.js");
var routesDetails = (0, _express.Router)();
routesDetails.get("/", _detailsController.DetailsController.getAll);
var _default = exports["default"] = routesDetails;