import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NavButtons({ index, ChangeToIndex }) {
  const [colors, setColors] = useState({ startColor: "#FFFFFF", endColor: "#DDCA24" });

  useEffect(() => {
    const getCurrentColor = (currentIndex) => {
      if (currentIndex === 0 || currentIndex === 2) {
        setColors({ startColor: "#FFFFFF", endColor: "#DDCA24" });
      } else if (currentIndex === 1) {
        setColors({ startColor: "#000000", endColor: "#323232DE" });
      }
    };

    getCurrentColor(index);
  }, [index]);

  return (
    <div className="flex flex-row justify-between px-10 py-5">
      {/* Next Button */}
      <button onClick={() => ChangeToIndex( index == 2 ? 0 : index + 1)} aria-label="Next">
        <div className="flex items-center justify-start relative">
          <IoIosArrowForward color={colors.startColor} size={80} className="relative z-10" />
          <IoIosArrowForward color={colors.endColor} size={80} className="absolute left-6 top-0 z-0" />
        </div>
      </button>

      {/* Previous Button */}
      <button onClick={() => ChangeToIndex(index == 0 ? 2 : index - 1)} aria-label="Previous">
        <div className="flex items-center justify-start relative">
          <IoIosArrowBack color={colors.endColor} size={80} className="absolute left-6 top-0 z-0" />
          <IoIosArrowBack color={colors.startColor} size={80} className="relative z-10" />
        </div>
      </button>
    </div>
  );
}

export default NavButtons;
