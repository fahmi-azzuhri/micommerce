import React from "react";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/products/${product.id}`);
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-2/5 h-2/5 justify-center mx-auto"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-md mb-2">
          {product.title.substring(0, 50)}...
        </h3>
        <p className="text-gray-700 text-sm">
          {product.description.substring(0, 100)}...
        </p>
        <div className="flex flex-row justify-between items-center mt-6 ">
          <p className="text-gray-700 font-bold text-sm">${product.price} </p>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
