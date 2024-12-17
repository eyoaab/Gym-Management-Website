import React from "react";

function Slider({ index, ChangeToIndex }) {
  const slides = [
    { id: 0, activeColor: "bg-darkYellow" },
    { id: 1, activeColor: "bg-darkGray" },
    { id: 2, activeColor: "bg-darkYellow" },
  ];

  return (
    <div className="flex justify-center items-center space-x-2 my-5 mt-6">
      {slides.map((slide) => (
        <button
          key={slide.id}
          onClick={() => ChangeToIndex(slide.id)}
          className={`
            w-4 h-4 rounded-full transition-colors duration-300 focus:outline-none
            ${index === slide.id ? slide.activeColor : "bg-white border border-gray-300"}
          `}
          aria-label={`Slide ${slide.id + 1}`}
        />
      ))}
    </div>
  );
}

export default Slider;
