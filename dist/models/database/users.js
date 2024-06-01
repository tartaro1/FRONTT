"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dbConfig = require("../../config/db.config.js");
var connection = await _promise["default"].createConnection(_dbConfig.configDB);
var UserModel = exports.UserModel = /*#__PURE__*/(0, _createClass2["default"])(function UserModel() {
  (0, _classCallCheck2["default"])(this, UserModel);
});
(0, _defineProperty2["default"])(UserModel, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var _yield$connection$que, _yield$connection$que2, users;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return connection.query("SELECT * FROM usuarios");
      case 2:
        _yield$connection$que = _context.sent;
        _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
        users = _yield$connection$que2[0];
        return _context.abrupt("return", users);
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
(0, _defineProperty2["default"])(UserModel, "getById", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var id, _yield$connection$que3, _yield$connection$que4, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref2.id;
          if (!id) {
            _context2.next = 10;
            break;
          }
          _context2.next = 4;
          return connection.query("SELECT * FROM usuarios WHERE ID_Usuario  = ?", [id]);
        case 4:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          if (!(user.length == 0)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", {
            message: "User not found"
          });
        case 9:
          return _context2.abrupt("return", user);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UserModel, "createUser", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref4) {
    var input, Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado, _yield$connection$que5, _yield$connection$que6, result, _yield$connection$que7, _yield$connection$que8, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          input = _ref4.input;
          Nombre = input.Nombre, Celular = input.Celular, Cedula = input.Cedula, Direccion = input.Direccion, Correo = input.Correo, Contrasena = input.Contrasena, ID_Rol = input.ID_Rol, Estado = input.Estado;
          _context3.prev = 2;
          _context3.next = 5;
          return connection.query("CALL RegistrarUsuario(?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado]);
        case 5:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
          result = _yield$connection$que6[0];
          _context3.next = 10;
          return connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ?", [result.insertId]);
        case 10:
          _yield$connection$que7 = _context3.sent;
          _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
          user = _yield$connection$que8[0];
          return _context3.abrupt("return", user);
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](2);
          throw new Error("Error inserting user: " + _context3.t0.message);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 16]]);
  }));
  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UserModel, "deleteUser", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref6) {
    var id, _yield$connection$que9, _yield$connection$que10, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref6.id;
          _context4.prev = 1;
          _context4.next = 4;
          return connection.query("CALL SP_EliminarUsuario(?)", [id]);
        case 4:
          _yield$connection$que9 = _context4.sent;
          _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
          result = _yield$connection$que10[0];
          return _context4.abrupt("return", result);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          throw new Error("Error deleting user: ", _context4.t0.message);
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
(0, _defineProperty2["default"])(UserModel, "updateUser", /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref8) {
    var id, input, Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado, updateFields, params, updateFieldsString, _yield$connection$que11, _yield$connection$que12, rows;
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
          _yield$connection$que11 = _context5.sent;
          _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          if (!(rows.length === 0)) {
            _context5.next = 26;
            break;
          }
          throw new Error("Producto no encontrado");
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
(0, _defineProperty2["default"])(UserModel, "login", /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref10) {
    var Nombre, Contrasena, _yield$connection$que13, _yield$connection$que14, request;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          Nombre = _ref10.Nombre, Contrasena = _ref10.Contrasena;
          _context6.prev = 1;
          _context6.next = 4;
          return connection.query("SELECT * FROM usuarios WHERE Nombre = ? AND Contrasena = ?", [Nombre, Contrasena]);
        case 4:
          _yield$connection$que13 = _context6.sent;
          _yield$connection$que14 = (0, _slicedToArray2["default"])(_yield$connection$que13, 1);
          request = _yield$connection$que14[0];
          return _context6.abrupt("return", [request]);
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          throw new Error(_context6.t0.message);
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function (_x5) {
    return _ref11.apply(this, arguments);
  };
}());