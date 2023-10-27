"use client";

import React, { useState } from "react";
import events from "../events";
import Banner from "./Head";

const GalleryPage = ({ params }: { params: { slug: string } }) => {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-500">Event not found</p>
      </div>
    );
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = event.images[currentImageIndex];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <Banner date={event.date} title={event.title} source={currentImage} />

      <div className="container mx-auto p-3 md:p-6 relative">
        <p className="text-black">{event.description}</p>
        <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
        <div className="mx-auto max-w-4xl h-96">
          <div className="bg-blue-900 p-4 rounded-lg text-white">
            <img
              className="mx-auto h-96 object-cover"
              src={currentImage}
              alt="Image"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              className="text-blue-500 text-4xl hover-text-blue-900 focus-outline-none border border-blue-500 rounded-full p-4 shadow-md"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
            <button
              className="text-blue-500 text-4xl hover-text-blue-900 focus-outline-none border border-blue-500 rounded-full p-4 shadow-md"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
