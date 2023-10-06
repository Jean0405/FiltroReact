import { connDB } from "../databases/connectDB.js";

export const getAllProducts = async () => {
  let db = await connDB();
  let collection = db.collection("products");

  let data = await collection.find({}).toArray();
  return data;
};

export const getProductsByCategory = async (category) => {
  let db = await connDB();
  let collection = db.collection("products");

  let data = await collection.find({ category: category }).toArray();
  return data;
};
