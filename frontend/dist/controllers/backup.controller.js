"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackupsController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var BackupsController = exports.BackupsController = /*#__PURE__*/(0, _createClass2["default"])(function BackupsController() {
  (0, _classCallCheck2["default"])(this, BackupsController);
});
(0, _defineProperty2["default"])(BackupsController, "getLatest", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var datos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            datos = {};
            fetch("https://ms-backend-tartaro.onrender.com/backup").then(function (response) {
              return response.json();
            }).then(function (data) {
              datos = data;
              // res.render("views.backup.ejs", {backup: datos})
              res.render("pages/admin/backup", {
                layout: "layouts/main-admin",
                title: 'Dashboard backup',
                backup: datos
              });
            });
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