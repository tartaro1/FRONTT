import { Router } from "express";
import { DetailsController } from "../controllers/details.controller.js";
const routesDetails = Router();
routesDetails.get("/", DetailsController.getAll);
routesDetails.get("/:id", DetailsController.getOrderProducts);
routesDetails.delete("/:id", DetailsController.delete);
routesDetails.patch("/:id", DetailsController.update);
export default routesDetails;