import express, { urlencoded } from 'express';
import { config } from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.js';
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.use(urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(express.json());
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, 'views'));
server.use(corsMiddleware()); 
server.set('port', process.env.PORT || 3000);

server.use("/dashboard", (req, res) => {
    res.render('views.dashboard.ejs');
})
server.use("/", router);

export default server;
