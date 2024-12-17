import React from 'react';
import ShortBlogCard from './components/short-blog-card';
import { FaArrowRight } from 'react-icons/fa'; // Ensure FaArrowRight is imported

function ShortBlogsPage() {
  return (
    <div className='bg-classBg p-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between'>
      {/* First column for title and button */}
      <div className='flex flex-col justify-evenly lg:w-1/3 py-20'>
        <h1 className='font-saira text-6xl text-white text-left'>
          RECENT <br /> NEWS
        </h1>

        {/* Button for navigating testimonials */}
        <div className="inline-flex items-center bg-darkYellow text-black py-2 px-7 rounded-lg mt-2 cursor-pointer w-fit">
        <span className="font-medium">Read More Blogs</span>
        <div className="bg-white rounded-lg w-6 h-6 flex justify-center items-center ml-2">
            <FaArrowRight size={12} />
        </div>
        </div>

      </div>

      {/* Second column for blog cards */}
      <div className='flex flex-col space-y-6'>
        <ShortBlogCard />
        <ShortBlogCard />
        <ShortBlogCard />
        <ShortBlogCard />
      </div>
    </div>
  );
}

export default ShortBlogsPage;
