import React from "react";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

const Inventory = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default Inventory;
