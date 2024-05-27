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
var _users = require("../models/database/users.js");
var _user = require("../schemas/user.js");
var UsersController = exports.UsersController = /*#__PURE__*/(0, _createClass2["default"])(function UsersController() {
  (0, _classCallCheck2["default"])(this, UsersController);
});
(0, _defineProperty2["default"])(UsersController, "getAll", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _users.UserModel.getAll();
        case 2:
          user = _context.sent;
          res.json(user);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UsersController, "getById", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return _users.UserModel.getById({
            id: id
          });
        case 3:
          user = _context2.sent;
          res.json(user);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UsersController, "createUser", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          result = (0, _user.validateUser)(req.body);
          console.log(result);
          if (!result.error) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            error: result.error.errors
          }));
        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return _users.UserModel.createUser({
            input: result.data
          });
        case 7:
          newUser = _context3.sent;
          res.status(201).json(newUser);
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](4);
          res.status(500).json({
            error: "Error creating user: " + _context3.t0.message
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 11]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UsersController, "deleteUser", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _users.UserModel.deleteUser({
            id: id
          });
        case 3:
          result = _context4.sent;
          try {
            if (result.affectedRows === 0) {
              res.status(404).json({
                message: 'User not found'
              });
            } else {
              res.status(200).json({
                message: 'User deleted successfully'
              });
            }
          } catch (error) {
            res.status(500).json({
              error: 'An error occurred while deleting the user'
            });
          }
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UsersController, "updateUser", /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, input, updatedUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          input = req.body;
          _context5.prev = 2;
          _context5.next = 5;
          return _users.UserModel.updateUser({
            id: id,
            input: input
          });
        case 5:
          updatedUser = _context5.sent;
          res.status(200).json(updatedUser);
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json({
            message: _context5.t0.message
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(UsersController, "loginUser", /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, Nombre, Contrasena, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, Nombre = _req$body.Nombre, Contrasena = _req$body.Contrasena;
          _context6.prev = 1;
          _context6.next = 4;
          return _users.UserModel.login({
            Nombre: Nombre,
            Contrasena: Contrasena
          });
        case 4:
          response = _context6.sent;
          res.status(200).json(response);
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
          res.status(404).json(_context6.t0.message);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());