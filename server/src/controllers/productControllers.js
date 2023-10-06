import * as productServices from "../services/productServices.js";

export const getAllProducts = async (req, res) => {
  try {
    let data = await productServices.getAllProducts();
    res
      .status(200)
      .json({ status: 200, message: "CORRECTLY OBTAINED DATA", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "ERROR GETTING THE PRODUCTS" });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    let data = await productServices.getProductsByCategory(req.params.category);
    res
      .status(200)
      .json({ status: 200, message: "CORRECTLY OBTAINED DATA", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "ERROR GETTING THE PRODUCTS" });
  }
};
