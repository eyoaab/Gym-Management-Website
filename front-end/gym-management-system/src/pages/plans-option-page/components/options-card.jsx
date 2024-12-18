import React from "react";

function OptionCard({ title, price, description, isSelected, handleSelection, index }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-2xl bg-classBg 
      ${isSelected ? "border border-3 border-darkYellow py-4" : "border-none py-10"} 
      transition-all duration-500 ease-out`}
    >

      {/* Selection Indicator */}
      
      <div
        onClick={() => handleSelection(index)}
        className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
          isSelected ? "bg-darkYellow" : "bg-gray-400"
        }`}
      ></div>
      {/* Plan Details */}
      <article className="flex flex-col flex-grow px-6 space-y-4">
        {/* Plan Header */}
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-saira text-xl">{title}</h2>
          <p className="text-white text-xl font-saira">{price}</p>
        </div>

        {/* Plan Description */}
        {isSelected && (
          <p className="text-white font-inter text-sm text-left">
            {description}
          </p>
        )}
      </article>
    </div>
  );
}

export default OptionCard;
