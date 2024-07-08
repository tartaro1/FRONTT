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
var ProductController = exports.ProductController = /*#__PURE__*/(0, _createClass2["default"])(function ProductController() {
  (0, _classCallCheck2["default"])(this, ProductController);
});
(0, _defineProperty2["default"])(ProductController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var category, url, response, data, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          category = req.query.category;
          url = "https://ms-backend-tartaro.onrender.com/products";
          if (category) {
            url += "?category=".concat(category);
          }
          _context.next = 6;
          return fetch(url);
        case 6:
          response = _context.sent;
          _context.next = 9;
          return response.json();
        case 9:
          data = _context.sent;
          // Asegúrate de que products sea un array
          products = Array.isArray(data) ? data : data.products || [];
          res.render("pages/admin/products", {
            layout: "layouts/main-admin",
            title: 'Dashboard Products',
            products: products
          });
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching products:", _context.t0.message);
          res.status(500).send(_context.t0.message);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());