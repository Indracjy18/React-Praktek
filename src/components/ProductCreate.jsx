import React, { useState } from "react";

const ProductCreate = ({ onCreateProduct }) => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  {
    /* descturing data initialState */
  }
  const { nama, deskripsi, imageURL } = formData;
  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-add-title">Add Product</div>

          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              placeholder="Product Name"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              placeholder="Product Deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              placeholder="Product Image"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <input className="edit-input-submit add" type="submit" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
