import React from "react";
import BlogImage from "../../../assets/images/blog-image.png";
import ProfileImg from "../../../assets/images/profile.png";

function ShortBlogCard() {
  return (
    <div className="pl-2 first-letter pr-2 lg:pr-4 py-2 rounded-lg flex flex-row bg-cardColor items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image Section */}
      <div
        className=" hidden sm:block h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] bg-cover bg-center bg-no-repeat rounded-lg mb-4 lg:mb-0"
        style={{ backgroundImage: `url(${BlogImage})` }}
      ></div>

      {/* Blog Text Content */}
      <div className="lg:ml-6 flex flex-col justify-between">
        {/* Date and Time Row */}
        <div className="flex flex-row justify-between text-sm text-darkYellow mb-2">
          <p>September 20, 2024</p>
          <p>7:23 AM</p>
        </div>

        {/* Blog Title */}
        <div className="mx-2 lg:mx-20 ">
          <h1 className="font-saira  text-white text-md lg:text-xl text-center mb-4 break-words mx-auto">
            4 Reasons Why You Need a <br />
            Personal Trainer
          </h1>
        </div>

        {/* Author and Metadata Section */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <div
              className="h-6 w-6 lg:h-8 lg:w-8 bg-cover bg-center bg-no-repeat rounded-full"
              style={{ backgroundImage: `url(${ProfileImg})` }}
            ></div>
            <p className="text-white sm:ml-2 ml-1 text-[11px] sm:text-[15px]">
              Jane Doe
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-white flex flex-row items-center justify-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-darkYellow mb-1"></div>
            <p className="hidden md:block">Suggestion</p>
            <p className="text-darkYellow">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortBlogCard;
