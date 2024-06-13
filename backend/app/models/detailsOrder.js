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
}