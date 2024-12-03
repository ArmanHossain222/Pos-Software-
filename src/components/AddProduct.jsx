import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, stock });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 mr-4"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-4 py-2 mr-4"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border px-4 py-2 mr-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
