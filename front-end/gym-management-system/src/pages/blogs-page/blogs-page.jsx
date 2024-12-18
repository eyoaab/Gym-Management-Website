import React from "react";
import ShowLongBlogs from "./show-long-blogs";
import BlogHomePage from "./components/blogs-home-page";
import ContactPage from "../contact-page/contact-page";
import Footer from "../../components/footer";

function BlogPage(){
    return(
        <div className="flex flex-col"> 
            <BlogHomePage />
            <ShowLongBlogs />
            <ContactPage />
            <Footer />

        </div>

    )
}

export default BlogPage;