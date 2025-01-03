import React from "react";
import Header from "../../components/header";
import Description from "./components/descreption";
import backgroundImage from "../../assets/images/homePageBanner.jpeg";
import TwoButtons from "./components/two-buttons";

function HomePage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-[#FFF100]/25 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <div className="flex-grow flex flex-col items-start justify-evenly text-start px-4">
          <Description />
          <div className="mt-6">
            <TwoButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
