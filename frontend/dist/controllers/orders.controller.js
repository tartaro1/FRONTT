"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var OrdersController = exports.OrdersController = /*#__PURE__*/(0, _createClass2["default"])(function OrdersController() {
  (0, _classCallCheck2["default"])(this, OrdersController);
});
(0, _defineProperty2["default"])(OrdersController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var dealer, datos, _datos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            dealer = req.query.dealer;
            if (dealer) {
              datos = {};
              fetch("https://ms-backend-tartaro.onrender.com/orders?dealer=".concat(dealer)).then(function (response) {
                return response.json();
              }).then(function (data) {
                datos = data;
                res.render("views.resultsOrdersByDealer.ejs", {
                  orders: datos
                });
              });
            } else {
              _datos = {};
              fetch("https://ms-backend-tartaro.onrender.com/orders").then(function (response) {
                return response.json();
              }).then(function (data) {
                _datos = data;
                // res.render("views.orders.ejs", {orders: datos})
                res.render("pages/admin/orders", {
                  layout: "layouts/main-admin",
                  title: 'Dashboard orders',
                  orders: _datos
                });
              });
            }
          } catch (error) {
            console.error("Error fetching detailsOrder:", error.message);
            res.status(500).send(error.message);
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());