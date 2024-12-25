import React from "react";
import ReviewCard from "./components/review-card";
import testimonyImage from "../../assets/images/testiomonial.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function TeatimonialsPage() {
  return (
    <div className="flex flex-col space-y-6 items-center bg-cardColor pb-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-1 px-16 pt-5">
        <div className="flex flex-col justify-center items-center lg:items-start">
          {/* Button for navigating testimonials */}
          <div className="flex items-center justify-start mb-6 relative">
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

          {/* Image Section */}
          <img
            className="h-[420px] w-[540px] object-cover rounded-lg shadow-md transition-all duration-300  ml-10"
            src={testimonyImage}
            alt="Testimonial"
          />
        </div>

        <ReviewCard />
      </div>
      {/* Button for navigating testimonials */}
      <div className="inline-flex items-center justify-start bg-darkYellow text-black py-2 px-4 rounded-xl w-fit">
        <span className="font-medium">See All Reviews</span>
        <div className="bg-white rounded-lg w-7 h-7 flex justify-center items-center ml-2">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default TeatimonialsPage;
