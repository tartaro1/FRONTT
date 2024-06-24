import mysql from "mysql2/promise"
import { configDB } from "../config/db.config.js";
import bcrypt from "bcrypt";

const connection = await mysql.createConnection(configDB);

export class UserModel {
    static getAll = async() => {
        const [users] = await connection.query("CALL SP_LISTAR_USUARIOS();");
        return users[0];
    }
    static getByEmail = async({email}) => {
        const [user] = await connection.query("CALL SP_USUARIOS_EMAIL(?)", [email] );
        return user[0];
    }
    static getById = async({id}) => {
        if (id) {
            const [user] = await connection.query("CALL SP_USUARIO_ID(?)", [id]);
            if (user.length == 0) return {message: "User not found"};
            return user[0];
        } 
    }
    static createUser = async ({input}) => {
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
        try {
            const hash = await bcrypt.hash(passwordUnencrypted, 2);
            const passwordEncrypted = hash;
            const result = await connection.query("CALL RegistrarUsuario(?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, passwordEncrypted, ID_Rol, Estado]);
            const [user] = await connection.query("CALL SP_USUARIO_ID(?)", result[0].insertId);
            return user;
        } catch (error) {
            throw new Error("Error inserting user: " + error.message);
        }
    }
    static deleteUser = async({id}) => {
        try {
            const [result] = await connection.query("CALL SP_EliminarUsuario(?)", [id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
    static updateUser = async({id, input}) => {
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
    static login = async({Correo, Contrasena}) => {
        try {
            const [request] = await connection.query("CALL SP_USUARIOS_EMAIL(?)", [Correo]);
            if (request[0].length == 0) {
                throw new Error("User not found");
            }
            const match = await bcrypt.compare(Contrasena, request[0][0].Contrasena)
            console.log(request[0][0].Contrasena);
            if (!match) {
                throw new Error("Password incorrect");
            }
            return match;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}