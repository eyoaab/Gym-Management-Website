import React from "react";
import NavBar from "./nav-bar";

function Header() {
  return (
    <div className="flex justify-between items-center w-full py-4 px-5">
      <NavBar />
      <p className="text-white font-bold text-[50px] ml-4 font-saira">
            COREFIT CLUB
            </p>
      <div className="ml-4">
        <button className="bg-yellow-400 text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-200">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Header;
