import mysql from "mysql2/promise";
import { config } from "../../config/db.config.js";

const connection = await mysql.createConnection(config);

export class ProductModel {
    static getAll = async ({category}) => {
        if (category) {
            const [product] = await connection.query("CALL SP_BuscarCategoria(?);", [category]);
            if (product.length === 0) return {};
            return product;
        }
        const [products] = await connection.query("SELECT * FROM productos;");
        return products
    }
    static getByName = async({nombre}) => {
        const [products] = await connection.query("CALL SP_BuscarProductos(?);", [nombre]);
        if (products.length === 0) return {};
        return products;
    }
    static getById = async({id}) => {
        const [products] = await connection.query("SELECT * FROM `productos` WHERE id = ?;", [id]);
        if (products.length === 0) throw new Error("Product not found");
        return products;
    }
    static createProduct = async ({input}) => {
        const {
            nombre,
            id_categoria,
            marca,
            id_proveedor,
            descripcion,
            precio,
            calificacion
        } = input;
        try {
            // const result = await connection.query("INSERT INTO `productos`(`NombreProducto`, `ID_Categoria`, `Marca`, `ID_Proveedor`, `Descripcion`, `PrecioVenta`, `Calificacion`) VALUES (?, ?, ?, ?, ?, ?, ?)", [nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion ]);
            const result = await connection.query("CALL SP_AddProducto(?, ?, ?, ?, ?, ?, ?)", [nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion ]);
            const [product] = await connection.query("SELECT * FROM productos WHERE id = ?", result[0].insertId);
            return product;
        } catch (error) {
            throw new Error("Error inserting product: " + error.message);
        }
    }
    static deleteProduct = async ({id}) => {
        try {
            const [result] = await connection.query("DELETE FROM productos WHERE id = ?", [id]);
            return result;
        } catch (error) {
            throw new Error("Error deleting product: " + error.message);
        }
    }
    static updateProduct = async ({ id, input }) => {
        const {
            NombreProducto,
            ID_Categoria,
            Marca,
            ID_Proveedor,
            Descripcion,
            PrecioVenta,
            Calificacion
        } = input;

        const updateFields = [];
        const params = [];

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

        if (updateFields.length === 0) {
            throw new Error("No se proporcionaron campos para actualizar");
        }

        const updateFieldsString = updateFields.join(", ");

        try {

            params.push(id);
            await connection.query(`UPDATE productos SET ${updateFieldsString} WHERE id = ?`, params);

            // Seleccionar el producto actualizado
            const [rows] = await connection.query("SELECT * FROM productos WHERE id = ?", [id]);

            // Verificar si el producto existe
            if (rows.length === 0) {
                throw new Error("Producto no encontrado");
            }

            return rows[0];
        } catch (error) {
            throw new Error("Error al actualizar el producto: " + error.message);
        }
    }
    
    
}