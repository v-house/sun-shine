"use client";

import React, { useState } from "react";

const GalleryCarousel = () => {
  const images = [
    "https://sunshine.iith.ac.in/images/about-slider/1.png",
    "https://sunshine.iith.ac.in/images/about-slider/2.jpg",
    "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    "https://sunshine.iith.ac.in/images/about-slider/4.JPG",
    "https://sunshine.iith.ac.in/images/about-slider/5.jpg",
    "https://sunshine.iith.ac.in/images/about-slider/6.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative w-full my-4" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <img
              src={image}
              className="absolute block h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt=""
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-blue-500"
        onClick={handlePrev}
        data-carousel-prev
      ></button>
    </div>
  );
};

export default GalleryCarousel;
