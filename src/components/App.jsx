import React, { useEffect } from "react";
import { Navbar, Button, IconButton, Collapse } from "@material-tailwind/react";
import AppRoutes from "../routes";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleClick = () => navigate("/");
  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <p as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </p>
      <p as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Account
        </a>
      </p>
      <p as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </p>
      <p as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Docs
        </a>
      </p>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            onClick={handleClick}
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Micommerce
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      <div className="mt-5">
        <AppRoutes />
      </div>
    </div>
  );
}
