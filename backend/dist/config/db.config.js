"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configDB = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var configDB = exports.configDB = {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
};