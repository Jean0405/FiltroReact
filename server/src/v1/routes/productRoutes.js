import { Router } from "express";
import * as productControllers from "../../controllers/productControllers.js";

const v1Products = Router();

v1Products
  .get("/", productControllers.getAllProducts)
  .get("/category/:category", productControllers.getProductsByCategory);

export default v1Products;
