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
            Cantidad 
        } = input;
        try {
            const detailsProducts = await connection.query("CALL SP_MODIFICAR_DETALLEPEDIDO(?,?)", [id, Cantidad]);
            return detailsProducts;
        } catch (error) {
            throw new Error("Error al actualizar el pedido: " + error.message);
        }
    }
}