import React from "react";
import Header from "../../components/header";
import Description from "./components/descreption";
import backgroundImage from '../../assets/images/homePageBanner.jpeg';
import TwoButtons from './components/two-buttons';

function HomePage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col items-between justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-start" >
        <Header />
        <Description />
        <TwoButtons />

      </div>
    </div>
  );
}

export default HomePage;
