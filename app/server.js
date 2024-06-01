import express from 'express';
import { config } from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';
import router from './routes/index.js';
config();

const server = express();
server.use(express.json());
server.use(corsMiddleware()); 
server.set('port', process.env.PORT || 3000);
server.use("/", router);

export default server;