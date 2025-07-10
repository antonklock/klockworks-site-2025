import React from "react";

const ScrollArrow = () => {
  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-white bottom-4 pb-4 md:bottom-6 md:pb-6"
      style={{
        bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))'
      }}
    >
      <span className="text-2xl">Scroll</span>
      <span className="text-4xl -mt-2">↓</span>
    </div>
  );
};

export default ScrollArrow;
