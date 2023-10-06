import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";

export const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    let response = await (
      await fetch(`http://127.25.25.26:3300/v1/products`, {
        method: "GET",
      })
    ).json();
    console.log(response);
    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold font-mono py-10 text-3xl">
        RECOMMENDED PRODUCTS
      </h1>
      <div className="pb-5">
        <h1 className="text-center font-bold text-lg pb-2">CATEGORIES</h1>
        <div className="flex justify-center gap-3">
          <button className="btn bg-zinc-800 text-lime-500 hover:bg-lime-500 hover:text-zinc-800">Sneakers</button>
          <button className="btn bg-zinc-800 text-lime-500 hover:bg-lime-500 hover:text-zinc-800">Running</button>
          <button className="btn bg-zinc-800 text-lime-500 hover:bg-lime-500 hover:text-zinc-800">Basketball</button>
        </div>
      </div>
      <div className="py-5">
        <Card products={products}/>
      </div>
    </div>
  );
};
