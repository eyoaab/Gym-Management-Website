import React from "react";
import { FaArrowRight } from "react-icons/fa";
import trainingImage1 from "../../assets/images/personalTraier.jpeg";
import trainingImage from "../../assets/images/personalTraainer1.jpeg";

function PersonalTrainingPage() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 bg-darkGray">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="flex flex-col justify-evenly p-5">
          <h1 className="text-4xl lg:text-5xl  mb-4 text-left text-white font-saira">PERSONAL<br/> TRAINING</h1>

          {/* Small Card */}
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[15vw] rounded-xl p-6 bg-gray-900 text-white">
            <h2 className="text-lg lg:text-2xl font-saira mb-2 text-left">WE OFFER</h2>
            <p className="mb-4 text-left text-gray-300 ">Free trial sessions for new members</p>
            <button className="flex items-center justify-between bg-white text-black py-2 px-4 rounded-2xl">
              <span className="font-light ">Sign Up</span>
              <div className="bg-darkYellow rounded-full w-7 h-7 flex justify-center items-center ml-2">

              <FaArrowRight />
              </div>
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div
          className="h-[50vh] w-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${trainingImage})` }}
        ></div>

        {/* Third Column */}
        <div className="flex flex-col justify-start">
          <div
            className="w-[320px] h-[208px] bg-cover bg-center bg-no-repeat rounded-lg mb-4"
            style={{ backgroundImage: `url(${trainingImage1})` }}
          ></div>
          <p className="text-gray-300 mb-4 text-left font-light">
            At Corefit Club, our trainers are highly qualified professionals dedicated
            to helping you achieve your fitness goals. Each trainer holds certifications
            from recognized fitness organizations.
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
