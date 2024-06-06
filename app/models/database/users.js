import mysql from "mysql2/promise"
import { configDB } from "../../config/db.config.js";

const connection = await mysql.createConnection(configDB);

export class UserModel {
    static getAll = async() => {
        const [users] = await connection.query("SELECT * FROM usuarios WHERE ID_Rol = 1");
        return users;
    }
    static getById = async({id}) => {
        if (id) {
            const [user] = await connection.query("SELECT * FROM usuarios WHERE ID_Usuario  = ?", [id]);
            if (user.length == 0) return {message: "User not found"};
            return user;
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
        try {
            const [result] = await connection.query("CALL RegistrarUsuario(?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado]);
            const [user] = await connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ?", [result.insertId]);
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

        const updateFields = [];
        const params = [];

        if (Nombre !== undefined) {
            updateFields.push("Nombre = ?");
            params.push(Nombre);
        }
        if (Celular !== undefined) {
            updateFields.push("Celular = ?");
            params.push(Celular);
        }
        if (Cedula !== undefined) {
            updateFields.push("Cedula = ?");
            params.push(Cedula);
        }
        if (Direccion !== undefined) {
            updateFields.push("Direccion = ?");
            params.push(Direccion);
        }
        if (Correo !== undefined) {
            updateFields.push("Correo = ?");
            params.push(Correo);
        }
        if (Contrasena !== undefined) {
            updateFields.push("Contrasena = ?");
            params.push(Contrasena);
        }
        if (ID_Rol !== undefined) {
            updateFields.push("ID_Rol = ?");
            params.push(ID_Rol);
        }
        if (Estado !== undefined) {
            updateFields.push("EstadoUsuario = ?");
            params.push(Estado);
        }
        if (updateFields.length === 0) {
            throw new Error("No se proporcionaron campos para actualizar");
        }

        const updateFieldsString = updateFields.join(", ");

        try {

            params.push(id);
            await connection.query(`UPDATE usuarios SET ${updateFieldsString} WHERE ID_Usuario = ?`, params);

            // Seleccionar el producto actualizado
            const [rows] = await connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ?", [id]);

            // Verificar si el producto existe
            if (rows.length === 0) {
                throw new Error("Producto no encontrado");
            }

            return rows[0];
        } catch (error) {
            throw new Error("Error al actualizar el producto: " + error.message);
        }
    }
    static login = async({Nombre, Contrasena}) => {
        try {
            const [request] = await connection.query("SELECT * FROM usuarios WHERE Nombre = ? AND Contrasena = ?", [Nombre, Contrasena]);
            return [request];
        } catch (error) {
            throw new Error(error.message);
        }
    }
}