import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleNavBtn = () => {
    setIsMobile((preVal) => !preVal);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="text-3xl mt-1 font-bold text-[#00df9a] cursor-pointer">
        DATA.
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4 hover:text-[#00df9a] hover:border-b border-[#00df9a] cursor-pointer ">
          HOME
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:border-b border-[#00df9a] cursor-pointer  ">
          COMPANY
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:border-b border-[#00df9a] cursor-pointer  ">
          RESOURCES
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:border-b border-[#00df9a] cursor-pointer  ">
          ABOUT
        </li>
        <li className="p-4 hover:text-[#00df9a] hover:border-b border-[#00df9a] cursor-pointer  ">
          CONTACT
        </li>
      </ul>
      <div onClick={handleNavBtn} className="block md:hidden z-20">
        {isMobile ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          isMobile
            ? "fixed left-0 top-0 w-[100%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl mt-8 font-bold text-[#00df9a] m-4">
          DATA.
        </h1>
        <ul className="p-8 text-2xl text-center">
          <li className="p-4 border-b border-[#00df9a]">HOME</li>
          <li className="p-4 border-b border-[#00df9a]">COMPANY</li>
          <li className="p-4 border-b border-[#00df9a]">RESOURCES</li>
          <li className="p-4 border-b border-[#00df9a]">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
