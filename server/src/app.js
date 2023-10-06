console.clear();
import "dotenv/config";
import cors from "cors";
import express from "express";

//import v1 routes
import v1Routes from "./v1/index.js";

//inicialización de la aplicación
const APP = express();

//middlewares
APP.use(express.json());
APP.use(cors());

APP.use("/v1", v1Routes);

//config server
const PORT = process.env.PORT;
const HOST = process.env.HOST;

//server listening
APP.listen(PORT, () => {
  console.log(`🚀 http://${HOST}:${PORT}`);
});
