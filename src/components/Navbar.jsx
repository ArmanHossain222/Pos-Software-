import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">ERP POS</h1>
      <div>
        <button className="text-white bg-blue-500 px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
