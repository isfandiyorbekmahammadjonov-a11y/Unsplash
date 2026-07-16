import React from "react";
import { IoIosImages } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
1;
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-[#232530] flex justify-center">
      {/* CENTER CONTAINER */}
      <div className="w-full max-w-6xl text-white px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <IoIosImages className="w-8 h-8" />
        </div>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-sm">
          <Link to={"/"} className="cursor-pointer hover:opacity-70">
            Home
          </Link>
          <Link to={"Dowlands"} className="cursor-pointer hover:opacity-70">
            Dowlands
          </Link>
          <Link to={"link"} className="cursor-pointer hover:opacity-70">
            Link
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
