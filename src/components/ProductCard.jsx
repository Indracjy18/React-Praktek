import React, { useState } from "react";

const ProductCard = (props) => {
  const [jumlahProduct, setJumlahProduct] = useState(0);

  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };

  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1);
  };

  return (
    <div className="card">
      <img
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px 10px 0px 0px",
        }}
        src={props.imageURL}
      />
      <div className="container">
        <h1>
          <b>{props.nama}</b>
        </h1>
        <p>{props.deskripsi}</p>
      </div>
      <div
        className={`card-keranjang ${
          jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
        }`}
      >
        {jumlahProduct > 0 ? (
          <>
            <button onClick={kurangProduct} className="button">
              -
            </button>
            <div>{jumlahProduct}</div>
            <button onClick={tambahProduct} className="button">
              +
            </button>
          </>
        ) : (
          <div className="keranjang" onClick={tambahProduct}>
            ++Keranjang
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
