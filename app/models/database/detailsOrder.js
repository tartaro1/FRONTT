import { configDB } from "../../config/db.config.js";
import mysql from "mysql2/promise"
import { config } from "dotenv";
config();
const connection = await mysql.createConnection(configDB);


export class DetailsModel {
    static getAll = async() => {
        try {
            const [result] = await connection.query("SELECT dp.ID_DetallePedido, dp.ID_Pedido, p.NombreProducto, dp.Cantidad, dp.PrecioVenta, dp.Descuento FROM detallepedido dp INNER JOIN productos p ON dp.ID_Producto = p.id;");
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}