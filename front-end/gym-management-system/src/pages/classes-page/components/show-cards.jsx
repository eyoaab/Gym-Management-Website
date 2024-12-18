import React from "react";
import ClassCard from "./class-card";

function ShowCards() {
  return (
    <div className="py-10 container px-5 mx-auto sm:px-6 lg:px-8 my-3">
      <div
        className="flex  flex-row space-x-10 overflow-x-auto scrollbar-hide"
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
    </div>
  );
}

export default ShowCards;
