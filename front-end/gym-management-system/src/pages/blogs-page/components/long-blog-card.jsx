import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import blogImage from "../../../assets/images/long-blog-card.png";
import ProfileImg from "../../../assets/images/profile.png";

function LongBlogAppCard() {
  const description =
    "Discover the latest in gym trends and fitness secrets—dive deeper into the stories that inspire strength and transformation. Unveil the power within by exploring more gym news today!";
  
  const [maxLength, setMaxLength] = useState(150);

  useEffect(() => {
    const updateMaxLength = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setMaxLength(50); 
      } else if (screenWidth < 1024) {
        setMaxLength(100); 
      } else {
        setMaxLength(150); 
      }
    };

    updateMaxLength(); 
    window.addEventListener("resize", updateMaxLength);

    return () => {
      window.removeEventListener("resize", updateMaxLength);
    };
  }, []);

  const truncatedText =
    description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;

  return (
    <div className="bg-darkGray w-6/7 rounded-2xl flex flex-row pr-4 h-60">
      {/* Blog Image Section */}
      <div className="h-full w-1/3 overflow-hidden rounded-2xl">
        <img src={blogImage} alt="Blog" className="object-cover h-full w-full" />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-evenly pl-8 p-4">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center">
          {/* Profile Info */}
          <div className="flex flex-row items-center">
            <div
              className="h-8 w-8 bg-cover bg-center rounded-full"
              style={{ backgroundImage: `url(${ProfileImg})` }}
            ></div>
            <p className="text-blogText ml-2 font-medium">Jane Doe</p>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-blogText flex flex-row items-center space-x-2 ">
            <p className="text-darkYellow">September 20, 2024</p>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-saira text-blogText text-[16px] w-2/3 text-left">
          4 Reasons Why You Need a Personal Trainer
        </h1>

        {/* Description */}
        <p className="text-blogText text-[14px] font-inter mb-6 text-left w-3/4">
          {truncatedText}
        </p>

        {/* Buttons Section */}
        <div className="flex flex-row justify-between items-center">
          {/* Read More Button */}
          <div className="flex items-center bg-darkYellow text-black py-2 px-5 rounded-lg cursor-pointer md-px-2 md-py-1">
            <span className="font-light">Read More</span>
            <div className="bg-white rounded-md w-6 h-6 flex justify-center items-center md-ml-1 md-w-4 md-h-4 ml-2">
              <FaArrowRight size={12} />
            </div>
          </div>

          {/* Reading Time Info */}
          <div className="text-sm text-blogText flex flex-row items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-darkYellow"></div>
            <p>Suggestion</p>
            <p className="text-darkYellow">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LongBlogAppCard;