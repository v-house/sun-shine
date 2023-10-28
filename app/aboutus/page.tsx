import React from "react";
import GalleryCarousel from "./Gallery";
import Count from "./Count";

const AboutUsPage = () => {
  return (
    <div className="py-8 px-4 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <hr className="h-px my-4 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <GalleryCarousel />
      <Count />
    </div>
  );
};

export default AboutUsPage;
