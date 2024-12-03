import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, stock: 50 },
    { id: 2, name: "Product 2", price: 200, stock: 30 },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">{product.price}</td>
            <td className="border px-4 py-2">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
