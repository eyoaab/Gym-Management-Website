import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import ServiceCards from "./components/show-services";

function VideosPage() {
  return (
    <div className="flex-col pl-4 md:pl-6 lg:pl-12">
      <div className="flex flex-col px-5">
        {/* Description Section */}
        <div className="mb-0">
          <p className="text-left text-3xl md:text-5xl lg:text-6xl pb-5 font-saira">
            FREE <br />
            EXERCISE <br />
            VIDEOS
          </p>
          <p className="font-inter  w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-base sm:text-md text-left ">
            "Join Our Gym and Enjoy Free Exercise Plans and Exclusive YouTube
            Video Recommendations!"
          </p>

          {/* video buttons area */}
          <div className="flex space-x-5 mt-5">
            <div className="w-10 h-10 flex justify-center items-center border border-black rounded-full">
              <FaArrowLeft className="text-xl font-light" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center  bg-black rounded-full">
              <FaArrowRight className="text-xl text-white font-light" />
            </div>
          </div>
        </div>

        {/* Videos Section> */}
        <div className="flex flex-wrap justify-center gap-10">{}</div>
      </div>
      <ServiceCards />
    </div>
  );
}

export default VideosPage;
