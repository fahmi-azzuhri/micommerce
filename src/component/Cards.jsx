import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
export function Cards() {
  const [products, setProducts] = useState([]);

  let componentMounted = true;
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("This didn't work.", error);
      });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= rating ? "#ffc107" : "#e4e5e9"} />
      );
    }
    return stars;
  };

  return (
    <div className="container grid mb-3 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {products.map((item) => (
        <div
          key={item.id}
          className="max-w-sm rounded overflow-hidden shadow-lg mb-1 border-gray-200 border-2"
        >
          <img
            className="h-48 w-50 mx-auto object-cover py-3 px-3"
            src={item.image}
          />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">
              {item.title.substring(0, 20)}...
            </h1>
            <p className="text-gray-700 text-base">
              {item.description.substring(0, 100)}...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-around">
            <div className="">
              <h1 className="font-bold text-xl">${item.price}</h1>
              <div className="flex flex-row">
                {renderStars(item.rating?.rate)}
              </div>
            </div>
            <Link to={`/product/${item.id}`}>
              <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
