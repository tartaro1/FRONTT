"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dbConfig = require("../../config/db.config.js");
var connection = await _promise["default"].createConnection(_dbConfig.configDB);
var OrderModel = exports.OrderModel = /*#__PURE__*/(0, _createClass2["default"])(function OrderModel() {
  (0, _classCallCheck2["default"])(this, OrderModel);
});
(0, _defineProperty2["default"])(OrderModel, "getAll", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var _yield$connection$que, _yield$connection$que2, orders;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return connection.query("SELECT * FROM pedidos");
      case 3:
        _yield$connection$que = _context.sent;
        _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
        orders = _yield$connection$que2[0];
        return _context.abrupt("return", [orders]);
      case 9:
        _context.prev = 9;
        _context.t0 = _context["catch"](0);
        throw new Error(_context.t0.message);
      case 12:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 9]]);
})));
(0, _defineProperty2["default"])(OrderModel, "getById", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var id, _yield$connection$que3, _yield$connection$que4, order;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = _ref2.id;
          _context2.prev = 1;
          _context2.next = 4;
          return connection.query("SELECT * FROM pedidos WHERE ID_Pedido = ?", [id]);
        case 4:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          order = _yield$connection$que4[0];
          if (!(order.length === 0)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", {
            error: "Pedido not found"
          });
        case 9:
          return _context2.abrupt("return", [order]);
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          throw new Error(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrderModel, "update", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref4) {
    var id, input, EstadoPedido, Direccion, Cliente, PrecioVenta, ID_Rol, updateFields, params, updateFieldsString, _yield$connection$que5, _yield$connection$que6, rows;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref4.id, input = _ref4.input;
          EstadoPedido = input.EstadoPedido, Direccion = input.Direccion, Cliente = input.Cliente, PrecioVenta = input.PrecioVenta, ID_Rol = input.ID_Rol;
          updateFields = [];
          params = [];
          if (EstadoPedido !== undefined) {
            updateFields.push("EstadoPedido = ?");
            params.push(EstadoPedido);
          }
          if (Cliente !== undefined) {
            updateFields.push("Cliente = ?");
            params.push(Cliente);
          }
          if (PrecioVenta !== undefined) {
            updateFields.push("PrecioVenta = ?");
            params.push(PrecioVenta);
          }
          if (Direccion !== undefined) {
            updateFields.push("Direccion = ?");
            params.push(Direccion);
          }
          if (ID_Rol !== undefined) {
            updateFields.push("ID_Rol = ?");
            params.push(ID_Rol);
          }
          if (!(updateFields.length === 0)) {
            _context3.next = 11;
            break;
          }
          throw new Error("No se proporcionaron campos para actualizar");
        case 11:
          updateFieldsString = updateFields.join(", ");
          _context3.prev = 12;
          params.push(id);
          _context3.next = 16;
          return connection.query("UPDATE pedidos SET ".concat(updateFieldsString, " WHERE ID_Pedido = ?"), params);
        case 16:
          _context3.next = 18;
          return connection.query("SELECT * FROM pedidos WHERE ID_Pedido = ?", [id]);
        case 18:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
          rows = _yield$connection$que6[0];
          if (!(rows.length === 0)) {
            _context3.next = 23;
            break;
          }
          throw new Error("Pedido no encontrado");
        case 23:
          return _context3.abrupt("return", rows[0]);
        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](12);
          throw new Error("Error al actualizar el pedido: " + _context3.t0.message);
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[12, 26]]);
  }));
  return function (_x2) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(OrderModel, "delete", /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref6) {
    var id, _yield$connection$que7, _yield$connection$que8, deletedOrder;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref6.id;
          _context4.prev = 1;
          _context4.next = 4;
          return connection.query("DELETE FROM pedidos WHERE ID_Pedido = ?", [id]);
        case 4:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
          deletedOrder = _yield$connection$que8[0];
          return _context4.abrupt("return", [deletedOrder]);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          throw new Error("Error deleting order: " + _context4.t0);
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