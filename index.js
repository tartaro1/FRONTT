import express from "express";
import "dotenv/config";
import router from "./app/routes/routes.product.js";
import routesUsers from "./app/routes/routes.users.js";
import routerDealers from "./app/routes/routes.dealers.js"
import routesOrders from "./app/routes/routes.orders.js";
import { corsMiddleware } from "./app/middleware/cors.js";
const app = express();
const port = process.env.PORT ??  3000;

app.use(express.json());
app.use(corsMiddleware());
app.use("/products", router);
app.use("/users", routesUsers);
app.use("/dealers", routerDealers);
app.use("/orders", routesOrders);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});