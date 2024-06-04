import { UserModel } from "../models/database/users.js";
import { validateUser, validatePartialUser } from "../schemas/user.js";
export class UsersController {
    static getAll = async(req, res) => {
        try {
            const users = await UserModel.getAll();
            res.render("views.users.ejs", {users});
        } catch (error) {
            res.status(500).json({error: "Error getting all users" + error.message});
        }
    }
    static getById = async(req, res) => {
        const {id} = req.params;
        const user = await UserModel.getById({id});
        res.json(user);
    }
    static createUser = async(req, res) => { 
        const result = validateUser(req.body);
        console.log(result); 
        if (result.error) {
            return res.status(400).json({ error: result.error.errors });
        }
        try {
            const newUser = await UserModel.createUser({ input: result.data });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: "Error creating user: " + error.message });
        }
    }
    static deleteUser = async (req, res) => {
        const {id} = req.params;
        const result = await UserModel.deleteUser({ id });
        try {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json({ message: 'User deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting the user' });
        }
    }
    static updateUser = async (req, res) => {
        const {id} = req.params;
        const input = req.body;
        try {
            const updatedUser = await UserModel.updateUser({id, input});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static loginUser = async (req, res) => {
        const {Nombre, Contrasena} = req.body
        try {
            const response = await UserModel.login({Nombre, Contrasena});
            res.status(200).json(response);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }
    
}