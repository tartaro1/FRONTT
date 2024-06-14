import { configDB } from "../config/db.config.js";
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
    static create = async({input}) => {
        try {
            const {
                NombreBd,
                VersionBd,
                Tipo,
                Ubicacion, 
                Informacion
            } = input;
            console.log(input);
            const [backup] = await connection.query("CALL SP_CREARCOPIA(?, ?, ?, ?, ?)", [NombreBd, VersionBd, Tipo, Ubicacion, Informacion]);
            return backup[0]
        } catch (error) {
            throw new Error(error)
        }
    }
}