import { Router } from "express";
import { ProductController } from "../controllers/products.controllers.js";

const router = Router();

router.get("/:id", ProductController.getById);
router.get("/", ProductController.getAll);
router.get("/:name", ProductController.getByName);
router.post("/", ProductController.createProduct);
router.delete("/:id", ProductController.deleteProduct);
router.patch("/:id", ProductController.updateProduct);


export default router;