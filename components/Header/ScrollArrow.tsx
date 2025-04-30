import React from "react";

const ScrollArrow = () => {
  return (
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
      <span className="text-2xl">Scroll</span>
      <span className="text-4xl -mt-2">↓</span>
    </div>
  );
};

export default ScrollArrow;
