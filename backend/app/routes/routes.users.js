import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
const routesUsers = Router();

routesUsers.get("/login", UsersController.loginUser)
routesUsers.get("/", UsersController.getAll);
routesUsers.get("/:id", UsersController.getById);
routesUsers.post("/", UsersController.createUser);
routesUsers.delete("/:id", UsersController.deleteUser);
routesUsers.patch("/:id", UsersController.updateUser);
routesUsers.post("/login", UsersController.loginUser);
export default routesUsers;