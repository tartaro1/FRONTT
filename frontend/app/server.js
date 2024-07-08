import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import path from "path";
import expressLayouts from 'express-ejs-layouts';
import dashboardRouter from "./routes/dashboardIndex.js";
import usersIndex from "./routes/users/usersIndex.js";
config();

const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 3000);

app.use("/dashboard", dashboardRouter);

app.use("/", usersIndex);

app.use("/", (req, res) => {
    res.render("views.error404");
});

export default app;
