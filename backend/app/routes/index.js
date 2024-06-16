import routesProducts from "./routes.product.js";
import routesUsers from "./routes.users.js";
import routesOrders from "./routes.orders.js";
import routesDelivers from "./routes.dealers.js";
import { Router } from "express";
import routesDetails from "./routes.details.js";
import routesBackup from "./routes.backup.js";
import routesLogOut from "./routes.logOut.js";

const router = Router();

router.use("/products", routesProducts);
router.use("/users", routesUsers);
router.use("/dealers", routesDelivers);
router.use("/orders", routesOrders);
router.use("/detailsOrders", routesDetails);
router.use("/backup", routesBackup);
router.use("/index", routesLogOut);
export default router;