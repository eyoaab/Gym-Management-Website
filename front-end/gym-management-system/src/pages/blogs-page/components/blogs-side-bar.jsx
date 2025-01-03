import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import ShortBlogCard from "./short-blog-card";

const categories = ["Motivational", "Fitness", "Tips", "Popular Trainers"];

const tags = ["Blogs", "Web", "Tips", "Stories", "Trainers", "Modern"];

const CategoryItem = ({ name }) => (
  <li className="text-sm text-black flex items-center space-x-2">
    <div className="h-3 w-3 rounded-full bg-darkYellow mb-1"></div>
    <p>{name}</p>
  </li>
);

const TagItem = ({ name }) => (
  <div className="sm:rounded-lg rounded-md bg-darkYellow flex items-center justify-center text-[13px] sm:text-[16px] px-3 py-2">
    {name}
  </div>
);

function BlogsSideBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`w-[100%] sm:-w-[90%] lg:w-[50%] md:w-4/6 p-5  flex flex-col items-start text-start bg-white space-y-5 transition-transform duration-1000 ease-in-out rounded-lg ${
        isVisible ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    >
      {/* Search Bar */}
      <div className="rounded-md w-full bg-classBg opacity-60 opacity-2 flex items-center justify-between p-1 sm:p-3">
        <input
          type="text"
          className="w-full border-none placeholder:italic placeholder-gray-200 text-white bg-transparent focus:outline-none "
          placeholder="Search blogs..."
          aria-label="Search blogs"
        />
        <CiSearch aria-label="Search icon" className="text-white text-3xl" />
      </div>

      {/* Categories */}
      <div className="w-full">
        <h1 className="font-saira text-[20px] mb-3">Categories</h1>
        <ul className="pl-3 sm:pl-7 space-y-2">
          {categories.map((category, index) => (
            <CategoryItem key={index} name={category} />
          ))}
        </ul>
      </div>

      {/* Latest Blogs */}
      <div className="w-full">
        <h1 className="font-saira text-[20px] mb-3">Latest Blogs</h1>
        <div className="flex flex-col space-y-4">
          {[...Array(3)].map((_, index) => (
            <ShortBlogCard key={index} />
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="w-full">
        <h1 className="font-saira text-[20px] mb-3">Popular Tags</h1>
        <div className="grid grid-cols-3 gap-1 sm:gap-3">
          {tags.map((tag, index) => (
            <TagItem key={index} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsSideBar;
