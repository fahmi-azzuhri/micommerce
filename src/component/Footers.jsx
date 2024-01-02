import { Typography } from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa6";
export function Footers() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full">
      <Typography className="text-center font-normal py-8 bg-gray-200">
        <p className="flex flex-row flex-wrap items-center justify-center text-blue-400">
          &copy; {year} Create with
          <FaHeart className="text-red-500 mx-1" /> at Bekasi, Indonesia
        </p>
      </Typography>
    </footer>
  );
}
