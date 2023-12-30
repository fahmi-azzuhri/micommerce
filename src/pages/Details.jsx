import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products/${id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        toast.error("This didn't work.", error);
      });
  });

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <Toaster position="top-right" reverseOrder={false} />
        <img className="w-1/5" src={details.image} alt="" />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
          <p className="text-xl">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
