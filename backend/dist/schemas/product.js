"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePartialMovie = validatePartialMovie;
exports.validateProduct = validateProduct;
var _zod = _interopRequireDefault(require("zod"));
var productSchema = _zod["default"].object({
  nombre: _zod["default"].string({
    invalid_type_error: 'Product title must be a string',
    required_error: 'Product title is required.'
  }),
  id_categoria: _zod["default"].number()["int"]().min(1).max(5),
  marca: _zod["default"].string(),
  id_proveedor: _zod["default"].number()["int"]().positive(),
  descripcion: _zod["default"].string(),
  precio: _zod["default"].number(),
  calificacion: _zod["default"].number().min(1).max(5),
  disponibilidad: _zod["default"].number()["default"](1)
});
function validateProduct(input) {
  return productSchema.safeParse(input);
}
function validatePartialMovie(input) {
  return productSchema.partial().safeParse(input);
}