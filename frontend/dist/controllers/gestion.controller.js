"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gestion = void 0;
var gestion = exports.gestion = function gestion(req, res) {
  res.render("pages/admin/gestion", {
    layout: "layouts/main-admin",
    title: 'Dashboard gestion'
  });
};