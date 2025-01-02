import React from "react";
import HomePage from "./home-page";
import ServicePage from "../services-page/services-page";
import ClassesPage from "../classes-page/cards-page";
import ShortBlogsPage from "../blogs-page/short-blog-page";
import PlansOptionPage from "../plans-option-page/plans-option";

import ContactPage from "../contact-page/contact-page";
import TeatimonialsPage from "../testimonial-page/testimonials-page";
import Footer from "../../components/footer";

function MainPage() {
  return (
    <div className="flex flex-col">
      {/* <HomePage /> */}
      {/* <ServicePage /> */}
      {/* <ClassesPage /> */}
      {/* <TeatimonialsPage /> */}
      {/* <ShortBlogsPage /> */}
      {/* <PlansOptionPage /> */}
      {/* <ContactPage /> */}
      <Footer />
      {/*
       */}
    </div>
  );
}

export default MainPage;
