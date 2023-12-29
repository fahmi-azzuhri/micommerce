import React, { useEffect, useState } from "react";
import axios from "axios";

export function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="grid mb-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="h-48 w-50 mx-auto object-cover" src={item.image} />
          <div class="px-6 py-4">
            <h1 class="font-bold text-xl mb-2">
              {item.title.substring(0, 20)}
            </h1>
            <p class="text-gray-700 text-base">
              {item.description.substring(0, 150)}...
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-around">
            <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Buy
            </button>
            <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
