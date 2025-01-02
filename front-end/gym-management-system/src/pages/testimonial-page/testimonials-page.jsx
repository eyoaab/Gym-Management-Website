import React from "react";
import ReviewCard from "./components/review-card";
import testimonyImage from "../../assets/images/testiomonial.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function TeatimonialsPage() {
  return (
    <div className=" bg-cardColor ">
      {/* Button for navigating testimonials */}
      <div className="flex items-start justify-start mb-6 relative">
        <IoIosArrowForward
          color="#DDCA24"
          size={80}
          className="relative z-10 cursor-pointer"
        />
        <IoIosArrowForward
          color="#FAFAF9"
          size={80}
          className="absolute left-6 top-0 z-0 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          {/* Image Section */}
          <img
            className="h-[420px] w-4/5 object-cover object-center rounded-lg shadow-md transition-all duration-300"
            src={testimonyImage}
            alt="Testimonial"
          />
          <ReviewCard />
        </div>

        {/* Button for navigating testimonials */}
        <div className="inline-flex items-center justify-center bg-darkYellow text-black py-2 px-3 md-px-4 rounded-xl w-fit my-4">
          <span className="font-medium">See All Reviews</span>
          <div className="bg-white rounded-lg h-5 w-5 md-w-7 md-h-7 flex justify-center items-center ml-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeatimonialsPage;
