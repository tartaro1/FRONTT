import mysql from "mysql2/promise";
import { configDB } from "../../config/db.config.js";

const connection = await mysql.createConnection(configDB);

export class OrderModel {
    static getAll = async() => {
        try {
            const [orders] = await connection.query("SELECT pedidos.ID_Pedido, pedidos.EstadoPedido, pedidos.Direccion, pedidos.PrecioVenta, pedidos.FechaPedido, cliente.Nombre AS Nombre_Cliente, repartidor.Nombre AS ID_Repartidor FROM pedidos JOIN usuarios AS cliente ON pedidos.Cliente = cliente.ID_Usuario JOIN usuarios AS repartidor ON pedidos.ID_Repartidor = repartidor.ID_Usuario WHERE repartidor.ID_Rol = 3;");
            return orders;
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