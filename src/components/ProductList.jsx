import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../components/data/Products";

const ProductList = () => {
  return (
    <div className="cards">
      {Products.map((products, id) => {
        return (
          <ProductCard
            key={id}
            nama={products.nama}
            imageURL={products.imageURL}
            deskripsi={products.deskripsi}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
