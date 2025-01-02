import React, { useState } from "react";
import OptionCard from "./components/options-card";
import { FaArrowRight } from "react-icons/fa6";

function PlansOptionPage() {
  const plans = [
    {
      title: "One Year Plan",
      price: "$299/Year",
      description:
        "Unlock a year of unlimited access to our state-of-the-art gym, including all equipment and exercise classes, along with exclusive YouTube workout videos. Enjoy two months of personalized training sessions, full shower facilities, and tailored fitness plans designed to help you reach your goals.",
    },
    {
      title: "Six Month Plan",
      price: "$199/6 Months",
      description:
        "Get six months of unlimited access to all gym facilities, exercise classes, and YouTube workout videos. This plan also includes one month of personalized training and access to all shower facilities.",
    },
    {
      title: "Monthly Plan",
      price: "$49/Month",
      description:
        "Experience all the gym facilities and exercise classes on a month-to-month basis. Perfect for short-term commitments or trying out the gym before committing to a longer plan.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelection = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className=" bg-darkGray flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row space-y-3  space-x-10 items-center justify-evenly py-20 px-10 md:px-20">
        {/* Left Column */}
        <div className="flex flex-col space-y-5 w-full  mt-10 md:mt-0">
          {plans.map((plan, index) => (
            <OptionCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              isSelected={index === selectedIndex}
              handleSelection={handleSelection}
              index={index}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-center space-y-5 w-full md:w-1/3 text-center md:text-left">
          <div>
            <p className="text-white font-saira text-center md:text-left text-4xl md:text-5xl">
              JOIN US NOW
            </p>
            <p className="text-white text-md">Select Your Plan</p>
          </div>

          {/* Button Section */}
          <div className="flex items-center bg-darkYellow text-black px-4 py-1 md:py-2 md:px-7 rounded-lg my-5 cursor-pointer w-max transition-all">
            <span className="font-light ">Next Step</span>
            <div className="bg-white rounded-md w-6 h-6 flex justify-center items-center ml-2">
              <FaArrowRight size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansOptionPage;
