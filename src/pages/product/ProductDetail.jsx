import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ECOMMERCE}/products/${id}`
      );
      setProduct(response.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="max-w-xl w-full lg:max-w-full flex justify-center">
        <div>
          <img
            src={product.image}
            alt=""
            className="h-48 lg:h-full w-96 flex-none bg-cover  text-center overflow-hidden"
          />
        </div>
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              {product.rating.rate} / 5
            </p>
            <p className="text-gray-900 font-bold text-xl mb-2">
              {product.title}
            </p>
            <p className="text-gray-700 text-sm text-justify">
              {product.description}
            </p>
            <p className="font-bold text-sm mt-5"> ${product.price} </p>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
