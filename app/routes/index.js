import routesProducts from "./routes.product.js";
import routesUsers from "./routes.users.js";
import routesOrders from "./routes.orders.js";
import routesDelivers from "./routes.dealers.js";
import { Router } from "express";

const router = Router();

router.use("/products", routesProducts);
router.use("/users", routesUsers);
router.use("/dealers", routesDelivers);
router.use("/orders", routesOrders);

export default router;