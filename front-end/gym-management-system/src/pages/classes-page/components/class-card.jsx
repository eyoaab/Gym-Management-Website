import React from "react";
import cardImage from "../../../assets/images/claassCard.jpeg";

function ClassCard() {
  return (
    <div className="relative group w-[350px]  md:w-[300px] lg:w-[350px] sm:w-[250px] h-[50vh] lg:h-[400px] rounded-xl overflow-hidden">
      {/* Image Background with Transform on Hover */}
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out 
                   group-hover:transition-"
        style={{ backgroundImage: `url(${cardImage})` }}
      ></div>

      <div
        className="absolute inset-0 bg-darkYellow bg-opacity-0 transition-all duration-300 ease-in-out 
                   group-hover:bg-opacity-50"
      ></div>

      {/* Hover Text */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 
                   group-hover:opacity-100"
      >
        <h3 className="text-white text-4xl font-saira tracking-wide">CARDIO</h3>
      </div>
    </div>
  );
}

export default ClassCard;
