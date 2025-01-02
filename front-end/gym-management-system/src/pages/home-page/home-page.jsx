import React from "react";
import Header from "../../components/header";
import Description from "./components/descreption";
import backgroundImage from "../../assets/images/homePageBanner.jpeg";
import TwoButtons from "./components/two-buttons";

function HomePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex-grow flex flex-col items-start justify-evenly text-start px-4">
        <Description />
        <div className="mt-6">
          <TwoButtons />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
