import { OrderModel } from "../models/database/orders.js";

export class OrdersController {
    static getAll = async(req, res) => {
        const orders = await OrderModel.getAll();
        res.json(orders);
    }
    static getById = async(req, res) => {
        const {id} = req.params;
        try {
            const order = await OrderModel.getById({id});
            res.json(order);
        } catch (error) {
        res.json({error: error});  
        }
    }
    static update = async(req, res) => {
        const {id} = req.params;
        const input = req.body;
        try {
            const updatedOrder = await OrderModel.update({id, input});
            res.status(200).json(updatedOrder); 
        } catch (error) {
            res.status(error.status).json({error: error}); 
        }
    }
    static delete = async(req, res) => {
        const {id} = req.params;
        try {
            const deletedOrder = await OrderModel.delete({id});
            res.status(200).json(deletedOrder);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    } 
}