"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireDefault(require("path"));
var _expressEjsLayouts = _interopRequireDefault(require("express-ejs-layouts"));
var _dashboardIndex = _interopRequireDefault(require("./routes/dashboardIndex.js"));
var _usersIndex = _interopRequireDefault(require("./routes/users/usersIndex.js"));
(0, _dotenv.config)();
var app = (0, _express["default"])();
app.set("view engine", "ejs");
app.use(_expressEjsLayouts["default"]);
app.set("views", _path["default"].join(__dirname, "views"));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.set("port", process.env.PORT || 3000);
app.use("/dashboard", _dashboardIndex["default"]);
app.use("/", _usersIndex["default"]);
app.use("/", function (req, res) {
  res.render("views.error404");
});
var _default = exports["default"] = app;