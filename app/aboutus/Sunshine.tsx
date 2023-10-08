"use client";

import React, { useState } from "react";

const SunshineImage: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://cdn.wallpapersafari.com/41/98/EzIs9A.jpg" // Replace with your image source
          alt="Sunshine"
          className="w-full object-cover transition-transform transform"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-1/5 bg-black opacity-75">
        {/* Text on top */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold duration-1000">
          Sunshine
        </div>
      </div>
    </div>
  );
};

export default SunshineImage;
