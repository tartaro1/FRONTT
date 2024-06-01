"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _dbConfig = require("../../config/db.config.js");
var connection = await _promise["default"].createConnection(_dbConfig.configDB);
var ProductModel = exports.ProductModel = /*#__PURE__*/(0, _createClass2["default"])(function ProductModel() {
  (0, _classCallCheck2["default"])(this, ProductModel);
});
(0, _defineProperty2["default"])(ProductModel, "getAll", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var category, _yield$connection$que, _yield$connection$que2, product, _yield$connection$que3, _yield$connection$que4, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          category = _ref.category;
          if (!category) {
            _context.next = 10;
            break;
          }
          _context.next = 4;
          return connection.query("CALL SP_BuscarCategoria(?);", [category]);
        case 4:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
          product = _yield$connection$que2[0];
          if (!(product.length === 0)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", {});
        case 9:
          return _context.abrupt("return", product);
        case 10:
          _context.next = 12;
          return connection.query("SELECT * FROM productos;");
        case 12:
          _yield$connection$que3 = _context.sent;
          _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
          products = _yield$connection$que4[0];
          return _context.abrupt("return", products);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductModel, "getByName", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3) {
    var nombre, _yield$connection$que5, _yield$connection$que6, products;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          nombre = _ref3.nombre;
          _context2.next = 3;
          return connection.query("CALL SP_BuscarProductos(?);", [nombre]);
        case 3:
          _yield$connection$que5 = _context2.sent;
          _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
          products = _yield$connection$que6[0];
          if (!(products.length === 0)) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", {});
        case 8:
          return _context2.abrupt("return", products);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductModel, "getById", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5) {
    var id, _yield$connection$que7, _yield$connection$que8, products;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref5.id;
          _context3.next = 3;
          return connection.query("SELECT * FROM `productos` WHERE id = ?;", [id]);
        case 3:
          _yield$connection$que7 = _context3.sent;
          _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
          products = _yield$connection$que8[0];
          if (!(products.length === 0)) {
            _context3.next = 8;
            break;
          }
          throw new Error("Product not found");
        case 8:
          return _context3.abrupt("return", products);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x3) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductModel, "createProduct", /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref7) {
    var input, nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion, result, _yield$connection$que9, _yield$connection$que10, product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          input = _ref7.input;
          nombre = input.nombre, id_categoria = input.id_categoria, marca = input.marca, id_proveedor = input.id_proveedor, descripcion = input.descripcion, precio = input.precio, calificacion = input.calificacion;
          _context4.prev = 2;
          _context4.next = 5;
          return connection.query("CALL SP_AddProducto(?, ?, ?, ?, ?, ?, ?)", [nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion]);
        case 5:
          result = _context4.sent;
          _context4.next = 8;
          return connection.query("SELECT * FROM productos WHERE id = ?", result[0].insertId);
        case 8:
          _yield$connection$que9 = _context4.sent;
          _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
          product = _yield$connection$que10[0];
          return _context4.abrupt("return", product);
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          throw new Error("Error inserting product: " + _context4.t0.message);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 14]]);
  }));
  return function (_x4) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductModel, "deleteProduct", /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref9) {
    var id, _yield$connection$que11, _yield$connection$que12, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref9.id;
          _context5.prev = 1;
          _context5.next = 4;
          return connection.query("DELETE FROM productos WHERE id = ?", [id]);
        case 4:
          _yield$connection$que11 = _context5.sent;
          _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
          result = _yield$connection$que12[0];
          return _context5.abrupt("return", result);
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          throw new Error("Error deleting product: " + _context5.t0.message);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function (_x5) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(ProductModel, "updateProduct", /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_ref11) {
    var id, input, NombreProducto, ID_Categoria, Marca, ID_Proveedor, Descripcion, PrecioVenta, Calificacion, updateFields, params, updateFieldsString, _yield$connection$que13, _yield$connection$que14, rows;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = _ref11.id, input = _ref11.input;
          NombreProducto = input.NombreProducto, ID_Categoria = input.ID_Categoria, Marca = input.Marca, ID_Proveedor = input.ID_Proveedor, Descripcion = input.Descripcion, PrecioVenta = input.PrecioVenta, Calificacion = input.Calificacion;
          updateFields = [];
          params = [];
          if (NombreProducto !== undefined) {
            updateFields.push("NombreProducto = ?");
            params.push(NombreProducto);
          }
          if (ID_Categoria !== undefined) {
            updateFields.push("ID_Categoria = ?");
            params.push(ID_Categoria);
          }
          if (Marca !== undefined) {
            updateFields.push("Marca = ?");
            params.push(Marca);
          }
          if (ID_Proveedor !== undefined) {
            updateFields.push("ID_Proveedor = ?");
            params.push(ID_Proveedor);
          }
          if (Descripcion !== undefined) {
            updateFields.push("Descripcion = ?");
            params.push(Descripcion);
          }
          if (PrecioVenta !== undefined) {
            updateFields.push("PrecioVenta = ?");
            params.push(PrecioVenta);
          }
          if (Calificacion !== undefined) {
            updateFields.push("Calificacion = ?");
            params.push(Calificacion);
          }
          if (!(updateFields.length === 0)) {
            _context6.next = 13;
            break;
          }
          throw new Error("No se proporcionaron campos para actualizar");
        case 13:
          updateFieldsString = updateFields.join(", ");
          _context6.prev = 14;
          params.push(id);
          _context6.next = 18;
          return connection.query("UPDATE productos SET ".concat(updateFieldsString, " WHERE id = ?"), params);
        case 18:
          _context6.next = 20;
          return connection.query("SELECT * FROM productos WHERE id = ?", [id]);
        case 20:
          _yield$connection$que13 = _context6.sent;
          _yield$connection$que14 = (0, _slicedToArray2["default"])(_yield$connection$que13, 1);
          rows = _yield$connection$que14[0];
          if (!(rows.length === 0)) {
            _context6.next = 25;
            break;
          }
          throw new Error("Producto no encontrado");
        case 25:
          return _context6.abrupt("return", rows[0]);
        case 28:
          _context6.prev = 28;
          _context6.t0 = _context6["catch"](14);
          throw new Error("Error al actualizar el producto: " + _context6.t0.message);
        case 31:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[14, 28]]);
  }));
  return function (_x6) {
    return _ref12.apply(this, arguments);
  };
}());