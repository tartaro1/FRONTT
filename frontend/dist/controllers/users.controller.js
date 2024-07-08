"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var UsersController = exports.UsersController = /*#__PURE__*/(0, _createClass2["default"])(function UsersController() {
  (0, _classCallCheck2["default"])(this, UsersController);
});
(0, _defineProperty2["default"])(UsersController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var email, datos, _datos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          email = req.query.email;
          if (!email) {
            _context.next = 8;
            break;
          }
          datos = {};
          _context.next = 6;
          return fetch("https://ms-backend-tartaro.onrender.com/users?email=".concat(email)).then(function (res) {
            return res.json();
          }).then(function (data) {
            datos = data;
            res.render("views.resultUser.ejs", {
              users: datos
            });
          })["catch"](function (error) {
            return console.log(error);
          });
        case 6:
          _context.next = 10;
          break;
        case 8:
          _datos = {};
          fetch('https://ms-backend-tartaro.onrender.com/users').then(function (res) {
            return res.json();
          }).then(function (data) {
            _datos = data;
            res.render("pages/admin/users", {
              layout: 'layouts/main-admin',
              title: 'Dash users',
              users: _datos
            });
          });
        case 10:
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching users:", _context.t0.message);
          res.status(500).send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());