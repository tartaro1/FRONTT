"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductController = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var ProductController = exports.ProductController = /*#__PURE__*/(0, _createClass2["default"])(function ProductController() {
  (0, _classCallCheck2["default"])(this, ProductController);
});
(0, _defineProperty2["default"])(ProductController, "getAll", function (req, res) {
  try {
    var category = req.query.category;
    if (category) {
      var datos = {};
      fetch("https://ms-backend-tartaro.onrender.com/products?category=".concat(category)).then(function (response) {
        return response.json();
      }).then(function (data) {
        datos = data;
        res.render("views.usersProducts.ejs", {
          products: datos
        });
      });
    } else {
      var _datos = {};
      fetch("https://ms-backend-tartaro.onrender.com/products").then(function (response) {
        return response.json();
      }).then(function (data) {
        _datos = data;
        res.render("views.products.ejs", {
          products: _datos
        });
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).send(error.message);
  }
});