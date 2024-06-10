import { Router } from "express";
import { DetailsController } from "../controllers/details.controller.js";
const routesDetails = Router();

routesDetails.get("/", DetailsController.getAll);
routesDetails.get("/:provider", DetailsController.getByProvider)

export default routesDetails;

