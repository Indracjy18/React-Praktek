import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="cards">
      {products.map((product, id) => {
        return (
          <ProductCard
            key={id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
