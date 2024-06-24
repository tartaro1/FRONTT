import mysql from "mysql2/promise";
import { configDB } from "../config/db.config.js";
import bcrypt from "bcrypt";

const connection = await mysql.createConnection(configDB);

export class DealersModel {
    static getAll = async() => {
        const [dealers] = await connection.query("CALL SP_LISTARREPARTIDORES();");
        return dealers[0];
    }
    static getByEmail = async({email}) => {
        const [dealer] = await connection.query("CALL SP_LISTAR_EMAIL_REPARTIDOR(?)", [email] );
        return dealer[0];
    }
    static getById = async({id}) => {
        try {
            const [dealer] = await connection.query(`CALL SP_LISTAR_REPARTIDOR(?)`, [id] );
            if (dealer.length === 0) {
                return {message: "Dealer not found"}
            }
            return dealer[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static create = async({input}) => {
        const {
            Nombre,
            Celular,
            Cedula,
            Direccion,
            Correo,
            Contrasena,
            ID_Rol,
            Estado
        } = input;
        try {
            const dealer = await connection.query("CALL SP_CREAR_REPARTIDOR(?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado]);
            const newDealer = await connection.query("CALL SP_USUARIO_ID(?)", [dealer[0].insertId]);
            return newDealer[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static delete = async({id}) => {
        try {
            const [deletedDealer] = await connection.query("CALL SP_EliminarUsuario(?)", [id]);
            return deletedDealer;
        } catch (error) {
            throw new Error("Error deleting dealer: ", error.message);
        }
    }
    static update = async({id, input}) => {
        const {
            Nombre,
            Celular,
            Cedula,
            Direccion,
            Correo,
            Contrasena,
            ID_Rol,
            Estado
        } = input;
        const passwordUnencrypted = Contrasena;
        const hash = await bcrypt.hash(passwordUnencrypted, 2);
        const passwordEncrypted = hash;
        try {
            const request = await connection.query("CALL SP_MODIFICAR_USUARIO(?,?,?,?,?,?,?,?,?)", [id, Nombre, Celular, Cedula, Direccion, Correo, passwordEncrypted, ID_Rol, Estado]);
            return request;
        } catch (error) {
            throw new Error(error);
        }
    }
    
}