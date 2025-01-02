import React from "react";
import Header from "../../../components/header";
import backgroundImage from "../../../assets/images/blogPageBanner.jpeg";
import BlogDescreption from "./blog-descreption";

function BlogHomePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col items-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-start flex flex-col justify-between h-[60%]">
        <Header />
        <BlogDescreption />
      </div>
    </div>
  );
}

export default BlogHomePage;
