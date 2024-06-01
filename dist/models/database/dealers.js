"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DealersModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dbConfig = require("../../config/db.config.js");
var connection = await _promise["default"].createConnection(_dbConfig.configDB);
var DealersModel = exports.DealersModel = /*#__PURE__*/(0, _createClass2["default"])(function DealersModel() {
  (0, _classCallCheck2["default"])(this, DealersModel);
});
(0, _defineProperty2["default"])(DealersModel, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var _yield$connection$que, _yield$connection$que2, dealers;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return connection.query("SELECT * FROM usuarios WHERE ID_Rol = 3");
      case 2:
        _yield$connection$que = _context.sent;
        _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
        dealers = _yield$connection$que2[0];
        return _context.abrupt("return", dealers);
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
(0, _defineProperty2["default"])(DealersModel, "getById", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var id, _yield$connection$que3, _yield$connection$que4, dealer;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref2.id;
          _context2.prev = 1;
          _context2.next = 4;
          return connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ".concat(id, " AND ID_Rol = 3"));
        case 4:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          dealer = _yield$connection$que4[0];
          if (!(dealer.length === 0)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", {
            message: "Dealer not found"
          });
        case 9:
          console.log(dealer);
          return _context2.abrupt("return", dealer);
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          throw new Error(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 13]]);
  }));
  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(DealersModel, "create", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref4) {
    var input, Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado, dealer, newDealer;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = _ref4.input;
          Nombre = input.Nombre, Celular = input.Celular, Cedula = input.Cedula, Direccion = input.Direccion, Correo = input.Correo, Contrasena = input.Contrasena, ID_Rol = input.ID_Rol, Estado = input.Estado;
          _context3.prev = 2;
          _context3.next = 5;
          return connection.query("INSERT INTO `usuarios`(`Nombre`, `Celular`, `Cedula`, `Direccion`, `Correo`, `Contrasena`, `ID_Rol`, `EstadoUsuario`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado]);
        case 5:
          dealer = _context3.sent;
          _context3.next = 8;
          return connection.query("SELECT * FROM `usuarios` WHERE ID_Usuario = ?", [dealer[0].insertId]);
        case 8:
          newDealer = _context3.sent;
          return _context3.abrupt("return", newDealer[0]);
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);
          throw new Error(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(DealersModel, "delete", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref6) {
    var id, _yield$connection$que5, _yield$connection$que6, deletedDealer;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref6.id;
          _context4.prev = 1;
          _context4.next = 4;
          return connection.query("DELETE FROM `usuarios` WHERE ID_Usuario = ?", [id]);
        case 4:
          _yield$connection$que5 = _context4.sent;
          _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
          deletedDealer = _yield$connection$que6[0];
          return _context4.abrupt("return", deletedDealer);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          throw new Error("Error deleting dealer: ", _context4.t0.message);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function (_x3) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(DealersModel, "update", /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref8) {
    var id, input, Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado, updateFields, params, updateFieldsString, _yield$connection$que7, _yield$connection$que8, rows;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref8.id, input = _ref8.input;
          Nombre = input.Nombre, Celular = input.Celular, Cedula = input.Cedula, Direccion = input.Direccion, Correo = input.Correo, Contrasena = input.Contrasena, ID_Rol = input.ID_Rol, Estado = input.Estado;
          updateFields = [];
          params = [];
          if (Nombre !== undefined) {
            updateFields.push("Nombre = ?");
            params.push(Nombre);
          }
          if (Celular !== undefined) {
            updateFields.push("Celular = ?");
            params.push(Celular);
          }
          if (Cedula !== undefined) {
            updateFields.push("Cedula = ?");
            params.push(Cedula);
          }
          if (Direccion !== undefined) {
            updateFields.push("Direccion = ?");
            params.push(Direccion);
          }
          if (Correo !== undefined) {
            updateFields.push("Correo = ?");
            params.push(Correo);
          }
          if (Contrasena !== undefined) {
            updateFields.push("Contrasena = ?");
            params.push(Contrasena);
          }
          if (ID_Rol !== undefined) {
            updateFields.push("ID_Rol = ?");
            params.push(ID_Rol);
          }
          if (Estado !== undefined) {
            updateFields.push("EstadoUsuario = ?");
            params.push(Estado);
          }
          if (!(updateFields.length === 0)) {
            _context5.next = 14;
            break;
          }
          throw new Error("No se proporcionaron campos para actualizar");
        case 14:
          updateFieldsString = updateFields.join(", ");
          _context5.prev = 15;
          params.push(id);
          _context5.next = 19;
          return connection.query("UPDATE usuarios SET ".concat(updateFieldsString, " WHERE ID_Usuario = ?"), params);
        case 19:
          _context5.next = 21;
          return connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ?", [id]);
        case 21:
          _yield$connection$que7 = _context5.sent;
          _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          if (!(rows.length === 0)) {
            _context5.next = 26;
            break;
          }
          throw new Error("Dealer no encontrado");
        case 26:
          return _context5.abrupt("return", rows[0]);
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](15);
          throw new Error("Error al actualizar el producto: " + _context5.t0.message);
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[15, 29]]);
  }));
  return function (_x4) {
    return _ref9.apply(this, arguments);
  };
}());