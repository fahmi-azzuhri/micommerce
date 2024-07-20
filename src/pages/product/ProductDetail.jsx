import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const detailProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ECOMMERCE}/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detailProduct();
  });
  if (!product) return <p>Loading...</p>;
  return (
    <div>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  );
}
