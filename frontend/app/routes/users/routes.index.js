import { Router } from "express";
import { categorias, index, inicio, login, search, signup } from "../../controllers/users/index.controller.js";

const routesIndex = Router();

routesIndex.get("/", index)
routesIndex.get("/login", login)
routesIndex.get("/register", signup)
routesIndex.get("/inicio", inicio)
routesIndex.get("/search", search)
routesIndex.get("/categorias", categorias)

export default routesIndex;