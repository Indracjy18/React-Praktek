import React, { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  // Ubah cara menerima properti product
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData);
  };

  const onCancel = (e) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="nama"
            value={nama}
            onChange={handleChange}
            type="text"
            className="edit-input-text"
            placeholder="Nama Product"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="deskripsi"
            value={deskripsi}
            type="text"
            className="edit-input-text"
            placeholder="Deskripsi Product"
          />
        </div>
        <div className="form-group">
          <input
            name="imageURL"
            value={imageURL}
            onChange={handleChange}
            type="text"
            className="edit-input-text"
            placeholder="Image Product"
          />
        </div>
        <input type="submit" className="edit-input-submit save" value="Save" />
        <button onClick={onCancel} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
