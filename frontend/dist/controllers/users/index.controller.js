"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.search = exports.producto = exports.login = exports.inicio = exports.index = exports.formulario = exports.categorias = void 0;
var login = exports.login = function login(req, res) {
  res.render("pages/login.ejs", {
    layout: "layouts/main-user",
    title: 'login tartaro'
  });
};
var signup = exports.signup = function signup(req, res) {
  res.render("pages/signup", {
    layout: "layouts/main-user",
    title: 'signup tartaro'
  });
};
var index = exports.index = function index(req, res) {
  res.render("pages/index", {
    layout: "layouts/main",
    title: 'Index tartaro'
  });
};
var inicio = exports.inicio = function inicio(req, res) {
  res.render("pages/user/Index", {
    layout: "layouts/main-user",
    title: 'Inicio tartaro /bienvenido'
  });
};
var search = exports.search = function search(req, res) {
  res.render("pages/user/search", {
    layout: "layouts/main-user",
    title: 'Buscar productos'
  });
};
var categorias = exports.categorias = function categorias(req, res) {
  res.render("views.categories.ejs");
};
var formulario = exports.formulario = function formulario(req, res) {
  res.render("views.form.ejs");
};
var producto = exports.producto = function producto(req, res) {
  res.render("views.product.ejs");
};