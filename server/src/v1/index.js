import { Router } from "express";
import v1Products from "./routes/productRoutes.js";

const v1Routes = Router();

v1Routes.use("/products", v1Products);

export default v1Routes;
