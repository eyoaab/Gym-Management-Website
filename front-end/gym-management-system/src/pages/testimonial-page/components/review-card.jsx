import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

function ReviewCard() {
  return (
    
    <div className="flex flex-col max-w-3xl rounded-lg justify-between py-20 px-20">
      <h1 className="text-center font-saira text-4xl mb-4 text-white">What Customers <br />Say</h1>
      
      <p className="text-left text-sg leading-relaxed mb-4 text-white font-light">
        "At Corefit Club, our trainers are highly qualified professionals dedicated to helping you achieve your fitness goals.
        Each trainer holds certifications from recognized fitness organizations."
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-between px-2">
        <p className="text-lg font-saira text-white mb-4 lg:mb-0">EYOB TARIKU</p>
        
        {/*  Buttons */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <div className="w-10 h-10 flex justify-center items-center border border-white rounded-full cursor-pointer">
            <FaArrowLeft className="text-3xl font-light text-white" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer ">
            <FaArrowRight className="text-3xl text-black font-light" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
