import React, { useState } from "react";
import { SiSharex } from "react-icons/si";

import { FaBars, FaInstagramSquare, FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 z-[990] flex justify-between items-center py-4 px-6 border-b-2 border-gray-300 w-full bg-white shadow-md overflow-x-hidden">
      <div className="flex justify-center items-center">
        <SiSharex className="text-5xl text-blue-500 mr-2" />
        <h1 className="text-2xl font-semibold">SharePal</h1>
      </div>

      <FaBars
        className="text-2xl cursor-pointer"
        onClick={() => setShowMenu(true)}
      />
        <div className={`w-80 select-none h-screen fixed top-0 right-0 border-l shadow-md border-gray-300 bg-white flex justify-start items-start flex-col px-10 gap-6 transition-all duration-700 ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
          <RiCloseLine
            className="absolute top-4 right-4 text-4xl cursor-pointer"
            onClick={() => setShowMenu(false)}
          />

          <button className="py-3 rounded-lg bg-blue-900 text-white text-lg font-bold mt-20 w-full">
            Login / Signup
          </button>
          <button className="p-3 rounded-lg bg-slate-200 text-lg text-gray-600 font-semibold  w-full flex justify-between items-center">
            <span>Rent</span>
            <FaAngleRight />
          </button>
          <button className="p-3 rounded-lg bg-slate-200 text-lg text-gray-600 font-semibold  w-full flex justify-between items-center">
            <span>Buy</span>
            <FaAngleRight />
          </button>
          <button className="p-3 rounded-lg bg-slate-200 text-lg text-gray-600 font-semibold  w-full flex justify-between items-center">
            <span>Refurbished</span>
            <FaAngleRight />
          </button>
          <button className="p-3 rounded-lg bg-slate-200 text-lg text-gray-600 font-semibold  w-full flex justify-between items-center">
            <span>Policies</span>
            <FaAngleRight />
          </button>
          <button className="p-3 rounded-lg bg-slate-200 text-lg text-gray-600 font-semibold  w-full flex justify-between items-center">
            <span>FAQs</span>
            <FaAngleRight />
          </button>
          <div className="flex justify-between items-center w-full text-5xl px-4">
          <FaInstagramSquare className="cursor-pointer" />
          <FaWhatsappSquare className="cursor-pointer" />
          <FaPhoneSquare className="cursor-pointer" />

          </div>
        </div>
    </div>
  );
};

export default Navbar;
