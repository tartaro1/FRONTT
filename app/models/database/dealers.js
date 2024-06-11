import mysql from "mysql2/promise";
import { configDB } from "../../config/db.config.js";

const connection = await mysql.createConnection(configDB);

export class DealersModel {
    static getAll = async() => {
        const [dealers] = await connection.query("SELECT * FROM usuarios WHERE ID_Rol = 3");
        return dealers;
    }
    static getByEmail = async({email}) => {
        const [dealer] = await connection.query("SELECT * FROM usuarios WHERE ID_Rol = 3 AND Correo = ?", [email] );
        return dealer;
    }
    static getById = async({id}) => {
        try {
            const [dealer] = await connection.query(`SELECT * FROM usuarios WHERE ID_Usuario = ${id} AND ID_Rol = 3`);
            if (dealer.length === 0) {
                return {message: "Dealer not found"}
            }
            console.log(dealer);
            return dealer;
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
            const dealer = await connection.query("INSERT INTO `usuarios`(`Nombre`, `Celular`, `Cedula`, `Direccion`, `Correo`, `Contrasena`, `ID_Rol`, `EstadoUsuario`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [Nombre, Celular, Cedula, Direccion, Correo, Contrasena, ID_Rol, Estado]);
            const newDealer = await connection.query("SELECT * FROM `usuarios` WHERE ID_Usuario = ?", [dealer[0].insertId]);
            return newDealer[0];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static delete = async({id}) => {
        try {
            const [deletedDealer] = await connection.query("DELETE FROM `usuarios` WHERE ID_Usuario = ?", [id]);
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

            const [rows] = await connection.query("SELECT * FROM usuarios WHERE ID_Usuario = ?", [id]);

            // Verificar si el producto existe
            if (rows.length === 0) {
                throw new Error("Dealer no encontrado");
            }

            return rows[0];
        } catch (error) {
            throw new Error("Error al actualizar el producto: " + error.message);
        }
    }
    
}