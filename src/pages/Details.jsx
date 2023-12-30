import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

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
        <p className="text-xl justify-center text-justify mb-2">
          Price: ${details.price}
        </p>
        <p className="text-xl justify-center text-justify">
          {details.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
