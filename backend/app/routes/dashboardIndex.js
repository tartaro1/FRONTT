import routesProducts from "./routes.product.js";
import routesUsers from "./routes.users.js";
import routesOrders from "./routes.orders.js";
import routesDelivers from "./routes.dealers.js";
import { Router } from "express";
import routesDetails from "./routes.details.js";
import routesBackup from "./routes.backup.js";
import routesLogOut from "./routes.logOut.js";

const dashboardRouter = Router();

dashboardRouter.use("/products", routesProducts);
dashboardRouter.use("/users", routesUsers);
dashboardRouter.use("/dealers", routesDelivers);
dashboardRouter.use("/orders", routesOrders);
dashboardRouter.use("/detailsOrders", routesDetails);
dashboardRouter.use("/backup", routesBackup);
dashboardRouter.use("/index", routesLogOut);

dashboardRouter.use("/", (req, res) => {
    res.render('views.dashboard.ejs');
});
export default dashboardRouter;