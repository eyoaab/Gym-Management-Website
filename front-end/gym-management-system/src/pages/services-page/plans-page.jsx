import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

import planImage from "../../assets/images/creatingPlan.jpeg";
import planImage1 from "../../assets/images/creatingPlan1.jpeg";

function PlaningPage() {
  return (
    <div className="container px-3 sm:px-2 lg:px-2 bg-darkGray ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {/* First Column */}
        <div className="flex flex-col justify-evenly p-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-saira mb-4 text-left text-white">
            CREATING <br /> A PLAN
          </h1>

          <p className="text-base sm:text-md text-white text-left mb-4 font-inter">
            Our gym plan provides personalized workouts, expert guidance, and
            tailored nutrition to help you achieve your fitness goals.
          </p>

          <button className="flex items-center justify-start bg-darkYellow text-black py-3 px-4 max-w-[150px] w-auto rounded-xl hover:bg-yellow-600 transition-all duration-300">
            <span className="font-medium">Join Us Now</span>
            <FaArrowAltCircleRight className="ml-2 text-white" />
          </button>
        </div>

        {/* Second Column */}
        <div
          className="hidden lg:block h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat rounded-lg mx-4 sm:mx-6 lg:mx-10"
          style={{ backgroundImage: `url(${planImage})` }}
        ></div>

        {/* Third Column */}
        <div className="grid p-x-3 grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-3 ">
          <div
            className="h-[35vh] md:h-[30vh] bg-cover bg-center bg-no-repeat rounded-lg mb-6"
            style={{ backgroundImage: `url(${planImage1})` }}
          ></div>

          {/* Plan Container */}
          <div className="bg-darkYellow rounded-xl p-3 w-max h-min lg:max-w-[240px]  ">
            <p className="text-2xl font-saira text-black text-left">Plans</p>
            <div className="space-y-1">
              {/* Plan Options */}
              {[
                "To lose weight",
                "To build muscle",
                "To gain weight",
                "To boost overall fitness",
                "To enhance flexibility",
              ].map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  <div className="bg-black flex items-center justify-center rounded-full w-3 h-3 ">
                    <IoMdArrowRoundForward className="text-darkYellow " />
                  </div>
                  <p className="text-black text-left font-inter text-sm ">
                    {plan}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaningPage;
