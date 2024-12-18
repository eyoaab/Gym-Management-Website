import React,{useState} from 'react';
import LongBlogAppCard from './components/long-blog-card';
import { CiSearch } from "react-icons/ci";
import BlogsSideBar from './components/blogs-side-bar';


function ShowLongBlogs() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='flex flex-col bg-classBg pl-20 pr-40'>
        <div className='flex flex-row items-center py-10 space-x-2' onClick={handleToggleSidebar}>
            <div className='rounded-lg flex items-center justify-cente p-2 bg-white'>
            <CiSearch size={20}/>

            </div>
            <h1 className='font-saira text-white text-[30px]'>Blog News</h1>

        </div>
     
      {/* Second column for blog cards */}
      { !isSidebarOpen  && <div className='flex flex-col space-y-6'>
        <LongBlogAppCard />
        <LongBlogAppCard />
        <LongBlogAppCard />
        <LongBlogAppCard />
      </div>}

      {/* Sidebar */}
      {isSidebarOpen && <BlogsSideBar />}
    </div>
  );
}

export default ShowLongBlogs;
