import mysql from "mysql2/promise";
import { config } from "../../config/db.config.js";

const connection = await mysql.createConnection(config);

export class OrderModel {
    static getAll = async() => {
        try {
            const [orders] = await connection.query("SELECT * FROM pedidos");
            return [orders];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static getById = async({id}) => {
        try {
            const [order] = await connection.query("SELECT * FROM pedidos WHERE ID_Pedido = ?", [id]);
            if (order.length === 0) {
                return {error: "Pedido not found"}
            }
            return [order];
        } catch (error) {
            throw new Error(error.message);
        }
    }
    static update = async({id, input}) => {
        const {
            EstadoPedido, 
            Direccion, 
            Cliente, 
            PrecioVenta, 
            ID_Rol
        } = input;

        const updateFields = [];
        const params = [];

        if (EstadoPedido !== undefined) {
            updateFields.push("EstadoPedido = ?");
            params.push(EstadoPedido);
        }
        if (Cliente !== undefined) {
            updateFields.push("Cliente = ?");
            params.push(Cliente);
        }
        if (PrecioVenta !== undefined) {
            updateFields.push("PrecioVenta = ?");
            params.push(PrecioVenta);
        }
        if (Direccion !== undefined) {
            updateFields.push("Direccion = ?");
            params.push(Direccion);
        }
        if (ID_Rol !== undefined) {
            updateFields.push("ID_Rol = ?");
            params.push(ID_Rol);
        }
        if (updateFields.length === 0) {
            throw new Error("No se proporcionaron campos para actualizar");
        }

        const updateFieldsString = updateFields.join(", ");

        try {

            params.push(id);
            await connection.query(`UPDATE pedidos SET ${updateFieldsString} WHERE ID_Pedido = ?`, params);

            // Seleccionar el producto actualizado
            const [rows] = await connection.query("SELECT * FROM pedidos WHERE ID_Pedido = ?", [id]);

            // Verificar si el producto existe
            if (rows.length === 0) {
                throw new Error("Pedido no encontrado");
            }

            return rows[0];
        } catch (error) {
            throw new Error("Error al actualizar el pedido: " + error.message);
        }
    }
    static delete = async({id}) => {
        try {
            const [deletedOrder] = await connection.query("DELETE FROM pedidos WHERE ID_Pedido = ?", [id]);
            return [deletedOrder];
            
        } catch (error) {
            throw new Error("Error deleting order: " + error);
        }
    }
}