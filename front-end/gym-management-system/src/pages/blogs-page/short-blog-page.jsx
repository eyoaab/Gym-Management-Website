import React from "react";
import ShortBlogCard from "./components/short-blog-card";
import { FaArrowRight } from "react-icons/fa";

function ShortBlogsPage() {
  return (
    <div className="bg-classBg pb-4 flex flex-col items-center justify-center">
      <div className=" p-3 md-p-10 flex flex-col pace-y-1 lg:space-y-0 justify-between items-center pb-8">
        {/* First column for title and button */}
        <div className="flex flex-col md:justify-evenly lg:w-1/3 py-10">
          <h1 className="font-saira  text-2xl md:text-4xl text-white text-center">
            RECENT NEWS
          </h1>
        </div>

        {/* Second column for blog cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ShortBlogCard />
          <ShortBlogCard />
          <ShortBlogCard />
          <ShortBlogCard />
        </div>
      </div>
      {/* Button for navigating testimonials */}
      <div className="flex flex-rwo space-x-3 `items-center  bg-darkYellow text-black py-2 px-1 md:px-3 rounded-lg cursor-pointer w-max">
        <div className="font-medium">Read More Blogs</div>
        <div className="bg-white rounded-lg w-6 h-6 flex justify-center items-center text-center">
          <FaArrowRight size={12} />
        </div>
      </div>
    </div>
  );
}

export default ShortBlogsPage;
