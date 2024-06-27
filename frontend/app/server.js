import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import dashboardRouter from "./routes/dashboardIndex.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.set("port", process.env.PORT || 3000);

app.use("/index", (req, res) => {
    res.render("views.index.ejs")
})
app.use("/dashboard", dashboardRouter);
app.use("/", (req, res) => {
    res.render("views.login.ejs")
})

export default app;
