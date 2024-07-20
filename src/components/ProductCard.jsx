import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-2/5 h-1/2 justify-center mx-auto"
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
      </div>
    </div>
  );
}
