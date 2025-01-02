import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ReviewCard() {
  return (
    <div className="flex flex-col w-5/6 md:w-4/5 rounded-lg justify-between px-0  items-center">
      <h1 className="text-center font-saira text-2xl md:text-4xl mb-4 text-white">
        What Customers <br />
        Say
      </h1>

      <p className="text-center text-sm text-white font-light">
        "At Corefit Club, our trainers are highly qualified professionals
        dedicated to helping you achieve your fitness goals. Each trainer holds
        certifications from recognized fitness organizations."
      </p>

      <div className="flex flex-row items-center justify-between px-2  mt-5">
        <p className="text-lg font-saira text-white md:mb-4 lg:mb-0 mr-5">
          EYOB TARIKU
        </p>

        {/*  Buttons */}
        <div className="flex space-x-4 ">
          <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center border border-white rounded-full cursor-pointer">
            <FaArrowLeft className="text-xl font-light text-white" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center bg-white rounded-full cursor-pointer ">
            <FaArrowRight className="text-3xl text-black font-light" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
