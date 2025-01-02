import React from "react";

function Description() {
  return (
    <div className="py-8 w-full mx-2 sm:mx-10 text-start font-saira">
      <p className="text-white w-3/4 md:w-1/2 text-3xl md:text-6xl sm:text-5xl lg:7xl">
        REACH
        <span className="text-yellow-400"> YOUR GOAL </span> AT COREFIT CLUB
      </p>

      <div className="mt-4  lg:w-1/4 md:w-1/3 sm:w-2/3">
        <p className="text-xsm sm:text-base text-white leading-relaxed w-full sm:w-5/6 ">
          At CoreFit Club, we're dedicated to helping you achieve your fitness
          goals with personalized training, cutting-edge equipment, and a
          supportive community.
        </p>
      </div>
    </div>
  );
}

export default Description;
