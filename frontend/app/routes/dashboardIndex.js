import routesUsers from "./routes.users.js";
import routesProducts from "./routes.products.js";
import routesDetails from "./routes.details.js";
import { Router } from "express";
import routesOrders from "./routes.orders.js";
import routesDelivers from "./routes.dealers.js";
import routesBackup from "./routes.backup.js";

const dashboardRouter = Router();

dashboardRouter.use("/users", routesUsers);
dashboardRouter.use("/products", routesProducts);
dashboardRouter.use("/detailsOrders", routesDetails)
dashboardRouter.use("/orders", routesOrders)
dashboardRouter.use("/dealers", routesDelivers)
dashboardRouter.use("/backup", routesBackup)
dashboardRouter.use("/gestion", (req, res) => {
    res.render("pages/admin/gestion",{
        layout:"layouts/main-admin",
        title: 'Dashboard gestion'
    });
})
dashboardRouter.use("/", (req, res) => {
    res.render("pages/admin/index",{
        layout:"layouts/main-admin",
        title: 'Home Dashboard Tartaro'
    });
});

export default dashboardRouter;
