import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ClassCard from "./class-card";

function ShowCards() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll amount
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-10 container px-5 mx-auto sm:px-6 lg:px-8 my-3 relative">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll Left"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-darkYellow text-black p-2 rounded-full shadow-md"
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex flex-row space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Render multiple cards */}
        <div className="snap-start">
          <ClassCard />
        </div>
        <div className="snap-start">
          <ClassCard />
        </div>
        <div className="snap-start">
          <ClassCard />
        </div>
        <div className="snap-start">
          <ClassCard />
        </div>
        <div className="snap-start">
          <ClassCard />
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll Right"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-darkYellow text-black p-2 rounded-full shadow-md"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
}

export default ShowCards;
