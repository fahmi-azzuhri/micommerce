import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import axios from "axios";

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
      <Link to="/login">
        <Button className="bg-blue-300 hover:bg-blue-600">Login</Button>
      </Link>
    </ul>
  );
}

export function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-50 bg-transparent mb-10">
      <div className="flex items-center justify-between text-blue-900">
        <Link to="/">
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
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
