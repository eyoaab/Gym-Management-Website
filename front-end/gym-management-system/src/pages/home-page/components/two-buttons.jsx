import React from "react";

function TwoButtons() {
  return (
    <div className="flex jestifay-center sm:justify-start flex:col sm:flex-row space-x-10 sm:space-y-0 mt-2 ml-2 sm:ml-10 ">
      <button className="bg-yellow-400 text-black py-1 sm:py-2 px-5 sm:px-10 rounded-lg ">
        Explore More
      </button>
      <button className=" text-white py-1 sm:py-2 px-5 sm:px-10 rounded-lg  border-yellow-400 border-2 ">
        Join Now
      </button>
    </div>
  );
}

export default TwoButtons;
