import React from "react";
import NavBar from "./nav-bar";
import { TbMenu3 } from "react-icons/tb";

function Header() {
  return (
    <div className="flex justify-between items-center w-full py-4 px-5">
      <NavBar />
      <div className="flex gap-1 ">
        <img src="logo.png" className="hidden lg:flex" />
        <p className="text-white text-[0px] sm:text-[30px] md:text-[40px] lg:text-[50px] ml-4 font-saira">
          COREFIT CLUB
        </p>
      </div>
      <div className="w-12 h-12 bg-white rounded-md flex justify-center items-center hidden lg:flex">
        <TbMenu3 className="text-2xl" />
      </div>
    </div>
  );
}

export default Header;
