import { configDB } from "../config/db.config.js";
import mysql from "mysql2/promise"
import { config } from "dotenv";
config();
const connection = await mysql.createConnection(configDB);


export class DetailsModel {
    static getAll = async() => {
        try {
            const [result] = await connection.query("CALL SP_DATOSPEDIDOS();");
            return result[0];
        } catch (error) {
            throw new Error(error);
        }
    }
    static getByProvider = async({provider}) => {
        try {
            const [result] = await connection.query("CALL SP_FILTRARPROVEEDOR(?);", [provider]);
            return result[0];
        } catch (error) {
            throw new Error(error);
        }
    }
    static getOrderProducts = async ({id}) => {
        try {
            const [result] = await connection.query("CALL SP_ORDENPRODUCTOS(?)", [id]);
            return result[0];
        } catch (error) {
            throw new Error(error)
        }
    }
    static delete = async({id}) => {
        try {
            const [result] = await connection.query("CALL SP_ELIMINARPRODUCTOORDEN(?)", [id]);
            return result[0];
        } catch (error) {
            throw new Error(error);
        }
    }
    static update = async({id, input}) => {
        const {
            ID_Producto, 
            Cantidad, 
            PrecioVenta, 
        } = input;

        const updateFields = [];
        const params = [];

        if (ID_Producto !== undefined) {
            updateFields.push("ID_Producto = ?");
            params.push(ID_Producto);
        }
        if (Cantidad !== undefined) {
            updateFields.push("Cantidad = ?");
            params.push(Cantidad);
        }
        if (PrecioVenta !== undefined) {
            updateFields.push("PrecioVenta = ?");
            params.push(PrecioVenta);
        }
        if (updateFields.length === 0) {
            throw new Error("No se proporcionaron campos para actualizar");
        }

        const updateFieldsString = updateFields.join(", ");

        try {
            params.push(id);
            const detailsProducts = await connection.query(`UPDATE detallepedido SET ${updateFieldsString} WHERE ID_DetallePedido = ?`, params);
            return detailsProducts;
        } catch (error) {
            throw new Error("Error al actualizar el pedido: " + error.message);
        }
    }
}