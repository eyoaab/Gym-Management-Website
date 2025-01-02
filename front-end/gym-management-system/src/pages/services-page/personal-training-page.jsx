import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import trainingImage1 from "../../assets/images/personalTraier.jpeg";
import trainingImage from "../../assets/images/personalTraainer1.jpeg";

function PersonalTrainingPage() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 bg-darkGray overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {/* First Column */}
        <div className="flex flex-col justify-evenly p-5">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl  mb-4 text-left text-white font-saira">
            PERSONAL
            <br /> TRAINING
          </h1>

          {/* Small Card */}
          <Link to="/login">
            <div className="w-5/6 rounded-xl p-4 sm:p-6 lg:p-8 bg-gray-900 text-white">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-saira mb-2 text-left">
                WE OFFER
              </h2>
              <p className="mb-4 text-left text-gray-300">
                Free trial sessions for new members
              </p>
              <button className="flex items-center justify-between bg-white text-black py-2 px-4 rounded-2xl">
                <span className="font-light">Sign Up</span>
                <div className="bg-darkYellow rounded-full w-7 h-7 flex justify-center items-center ml-2">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </Link>
        </div>

        {/* Second Column */}
        <div
          className=" hidden lg:block h-[50vh] w-[300px]  bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${trainingImage})` }}
        ></div>

        {/* Third Column */}
        <div className="flex flex-col justify-start">
          <div
            className="w-[320px] h-[208px] bg-cover bg-center bg-no-repeat rounded-lg mb-4"
            style={{ backgroundImage: `url(${trainingImage1})` }}
          ></div>
          <p className="text-gray-300 mb-4 text-left font-light">
            At Corefit Club, our trainers are highly qualified professionals
            dedicated to helping you achieve your fitness goals. Each trainer
            holds certifications from recognized fitness organizations.
          </p>
          <div className="inline-flex items-center justify-start bg-darkYellow text-black py-2 px-4 rounded-lg w-fit">
            <span className="font-medium">Explore More</span>
            <div className="bg-white rounded-md w-7 h-7 flex justify-center items-center ml-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalTrainingPage;
