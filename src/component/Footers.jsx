import { Typography } from "@material-tailwind/react";
import { FaHeart, FaShop } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Footers() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 p-8">
      <div className="bg-gray-100 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex flex-row items-center">
          <FaShop className="mr-2 h-5 w-5 text-blue-500" />
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 text-blue-500"
          >
            Micommerce
          </Typography>
        </div>
        <NavList />
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        <p className="flex flex-row flex-wrap items-center justify-center text-blue-400">
          &copy; {year} Create with {""}{" "}
          <FaHeart className="text-red-500 mx-1" /> {""} at Bekasi, Indonesia
        </p>
      </Typography>
    </footer>
  );
}

function NavList() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products/categories`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        toast.error("This didn't work.", error);
      });
  }, []);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {category.map((category, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium text-blue-300 hover:text-blue-800"
        >
          <Link
            to={`/category/${category}`}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {category}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}
