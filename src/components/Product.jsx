import React from "react";

const ProductCard = (props) => {
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
    </div>
  );
};

export default ProductCard;
