import React from "react";
import AboutHomePage from "./components/about-home-page";
import ServicePage from "../services-page/services-page";

import ContactPage from "../contact-page/contact-page";
import TeatimonialsPage from "../testimonial-page/testimonials-page";
import Footer from "../../components/footer";

function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AboutHomePage />
      <ServicePage />
      <TeatimonialsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default AboutPage;
