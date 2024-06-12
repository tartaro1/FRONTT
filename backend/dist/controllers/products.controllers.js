"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _products = require("../models/database/products.js");
var _product = require("../schemas/product.js");
var ProductController = exports.ProductController = /*#__PURE__*/(0, _createClass2["default"])(function ProductController() {
  (0, _classCallCheck2["default"])(this, ProductController);
});
(0, _defineProperty2["default"])(ProductController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var category, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          category = req.query.category;
          _context.next = 3;
          return _products.ProductModel.getAll({
            category: category
          });
        case 3:
          products = _context.sent;
          res.json(products);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "getByName", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var name, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          name = req.params.name;
          _context2.next = 3;
          return _products.ProductModel.getByName({
            name: name
          });
        case 3:
          product = _context2.sent;
          if (!product) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.json(product));
        case 6:
          res.status(404).json({
            message: 'Product not found'
          });
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "getById", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return _products.ProductModel.getById({
            id: id
          });
        case 3:
          product = _context3.sent;
          if (!product) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.json(product));
        case 6:
          res.status(404).json({
            message: 'Product not found'
          });
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "createProduct", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result, newProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          result = (0, _product.validateProduct)(req.body);
          if (!result.error) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            error: result.error.message
          }));
        case 3:
          _context4.next = 5;
          return _products.ProductModel.createProduct({
            input: result.data
          });
        case 5:
          newProduct = _context4.sent;
          res.status(201).json(newProduct);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "deleteProduct", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _products.ProductModel.deleteProduct({
            id: id
          });
        case 4:
          result = _context5.sent;
          if (result.affectedRows === 0) {
            res.status(404).json({
              message: 'Product not found'
            });
          } else {
            res.status(200).json({
              message: 'Product deleted successfully'
            });
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            error: 'An error occurred while deleting the product'
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductController, "updateProduct", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, input, updatedProduct;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          input = req.body;
          _context6.prev = 2;
          _context6.next = 5;
          return _products.ProductModel.updateProduct({
            id: id,
            input: input
          });
        case 5:
          updatedProduct = _context6.sent;
          res.status(200).json(updatedProduct);
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](2);
          res.status(500).json({
            message: _context6.t0.message
          });
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 9]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());