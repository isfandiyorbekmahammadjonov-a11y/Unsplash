import React from "react";
import { IoIosImages } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
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
          <Link to={"about"} className="cursor-pointer hover:opacity-70">
            About
          </Link>
          <Link to={"contact"} className="cursor-pointer hover:opacity-70">
            Contact
          </Link>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 text-xl">
          {/* SAVE */}
          <div className="relative cursor-pointer">
            <GiSaveArrow />
            <span className="absolute -top-2 -right-2 text-[10px] bg-purple-500 text-white px-1 rounded-full">
              0
            </span>
          </div>

          {/* HEART */}
          <div className="relative cursor-pointer">
            <FaHeart />
            <span className="absolute -top-2 -right-2 text-[10px] bg-purple-500 text-black px-1 rounded-full">
              1
            </span>
          </div>

          {/* MOON */}
          <div className="cursor-pointer">
            <IoMoonOutline />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
