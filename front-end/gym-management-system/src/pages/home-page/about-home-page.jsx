import React from "react";
import Header from "../../components/header";
import backgroundImage from '../../assets/images/aboutPageBanner.jpeg';
import AboutDescreption from "./components/about-descreption";

function AboutHomePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col items-between justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-start" >
        <Header />
        <AboutDescreption />

      </div>
    </div>
  );
}

export default AboutHomePage;
