import { Router } from "express";
import { index, inicio, login, signup } from "../../controllers/users/index.controller.js";

const routesIndex = Router();

routesIndex.get("/", index)
routesIndex.get("/login", login)
routesIndex.get("/register", signup)
routesIndex.get("/inicio", inicio)

export default routesIndex;