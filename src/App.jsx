import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { Products } from "./components/data/Products";
import ProductCreate from "./components/ProductCreate";
function App() {
  //nilai default
  const [products, setProducts] = useState(Products);
  const onEditProduct = (id, data) => {
    const updateProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    setProducts(updateProducts);
  };
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 8888), ...product },
    ]);
  };

  const onDeleteProduct = (id) => {
    {
      /* memfilter product */
    }
    const updateProduct = products.filter((prod) => {
      return prod.id != id;
    });

    setProducts(updateProduct);
  };
  return (
    <>
      <div className="app-title">BELANJA MOBIL RUSAK</div>
      <ProductCreate onCreateProduct={onCreateProduct} />

      {/* turunin dgn props products */}
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
