import mysql from "mysql2/promise";
import { configDB } from "../config/db.config.js";

const connection = await mysql.createConnection(configDB);

export class ProductModel {
    static getAll = async () => {
        const [products] = await connection.query("CALL SP_MOSTRARPRODUCTOS();");
        return products[0]
    }
    static getByCategory = async({category}) =>{
        if (category) {
            const [product] = await connection.query("CALL SP_BuscarCategoria(?);", [category]);
            if (product.length === 0) return {};
            return product[0];
        }
    }
    static getByName = async({nombre}) => {
        const [products] = await connection.query("CALL SP_BuscarProductos(?);", [nombre]);
        if (products.length === 0) return {};
        return products;
    }
    static getById = async({id}) => {
        const [products] = await connection.query("CALL SP_LISTAR_PRODUCTO(?)", [id]);
        if (products.length === 0) return "Product not found";
        return products[0];
    }
    static createProduct = async ({input}) => {
        const {
            nombre,
            id_categoria,
            marca,
            id_proveedor,
            descripcion,
            precio,
            calificacion,
            imagen
        } = input;
        try {
            // const result = await connection.query("INSERT INTO `productos`(`NombreProducto`, `ID_Categoria`, `Marca`, `ID_Proveedor`, `Descripcion`, `PrecioVenta`, `Calificacion`, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)", [nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion ]);
            const result = await connection.query("CALL SP_AddProducto(?, ?, ?, ?, ?, ?, ?, ?)", [nombre, id_categoria, marca, id_proveedor, descripcion, precio, calificacion, imagen ]);
            const [product] = await connection.query("CALL SP_LISTAR_PRODUCTO(?)", result[0].insertId);
            return product;
        } catch (error) {
            throw new Error("Error inserting product: " + error.message);
        }
    }
    static deleteProduct = async ({id}) => {
        try {
            const [result] = await connection.query("CALL SP_EliminarProdu(?)", [id]);
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
            Calificacion,
            Disponibilidad,
            imagen
        } = input;
        try {
            const result = await connection.query("CALL SP_MODIFICAR_PRODUCTO(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [id, NombreProducto, ID_Categoria, Marca, ID_Proveedor, Descripcion, PrecioVenta, Calificacion, Disponibilidad, imagen]);
            return result;
        } catch (error) {
            throw new Error("Error inserting user: " + error.message);
        }
    }
    
    
}