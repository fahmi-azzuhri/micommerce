import ProductCard from "../../components/product/ProductCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ECOMMERCE}/products`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="py-6 px-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
