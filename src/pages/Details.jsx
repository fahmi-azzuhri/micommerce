import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products/${id}`)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("This didn't work.", error);
      });
  }, [id]);

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
    <div className="container grid lg:grid-cols-2 md:grid-cols-1 mt-5 lg:px-[180px]">
      <Toaster position="top-right" reverseOrder={false} />
      <img className="w-2/3" src={details.image} alt="" />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
        <div className="flex items-center mb-3">
          {renderStars(details.rating?.rate)}
        </div>
        <p className="text-2xl justify-center text-justify text-red-500 font-bold mb-2">
          Price: ${details.price}
        </p>
        <p className="text-xl justify-center text-justify mb-5">
          {details.description}
        </p>
        <div className="flex gap-3">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
            <MdAddShoppingCart />
            Add to cart
          </button>
          <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
