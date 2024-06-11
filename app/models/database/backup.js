import { configDB } from "../../config/db.config.js";
import mysql from "mysql2/promise";
const connection = await mysql.createConnection(configDB);

export class BackupsModel {
    static getLatest = async() => {
        try {
            const [backup] = await connection.query("CALL SP_FECHACOPIA()");
            return backup[0];
        } catch (error) {
            throw new Error(error)
        }
    }
}