"use client";

import { useState } from "react";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="w-60 h-80 perspective-1000 cursor-pointer" 
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flipped ? "rotate-y-180" : ""}`}>
        {/* Front Side */}
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg backface-hidden">
          <p>Front Side</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg rotate-y-180 backface-hidden">
          <p>Back Side</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
