import { Router } from "express";
import { DealersController } from "../controllers/dealers.controller.js";

const routerDeliver = Router();

routerDeliver.get("/", DealersController.getAll);
routerDeliver.get("/:id", DealersController.getById);
routerDeliver.post("/", DealersController.create);
routerDeliver.delete("/:id", DealersController.delete);
routerDeliver.patch("/:id", DealersController.update);

export default routerDeliver;