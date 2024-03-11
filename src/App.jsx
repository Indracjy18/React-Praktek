import "./App.css";
import ProductCard from "./components/Product";
import { Products } from ".//components/data/Products";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
