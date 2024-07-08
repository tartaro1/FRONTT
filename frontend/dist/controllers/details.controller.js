"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var DetailsController = exports.DetailsController = /*#__PURE__*/(0, _createClass2["default"])(function DetailsController() {
  (0, _classCallCheck2["default"])(this, DetailsController);
});
(0, _defineProperty2["default"])(DetailsController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var provider, datos, _datos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            provider = req.query.provider;
            if (provider) {
              datos = {};
              fetch("https://ms-backend-tartaro.onrender.com/detailsOrders?provider=".concat(provider)).then(function (response) {
                return response.json();
              }).then(function (data) {
                datos = data;
                // res.render("views.detailsOrder.ejs", {detailsOrders: datos})
                res.render("pages/admin/detailsOrders", {
                  layout: "layouts/main-admin",
                  title: 'Dashboard Details Orders',
                  detailsOrders: datos
                });
              });
            } else {
              _datos = {};
              fetch("https://ms-backend-tartaro.onrender.com/detailsOrders").then(function (response) {
                return response.json();
              }).then(function (data) {
                _datos = data;
                // res.render("views.detailsOrder.ejs", {detailsOrders: datos})
                res.render("pages/admin/detailsOrders", {
                  layout: "layouts/main-admin",
                  title: 'Dashboard Details Orders',
                  detailsOrders: _datos
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