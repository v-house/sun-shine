import React from "react";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-evenly items-center py-10 lg:py-12 h-[120vh]">
      <div className="absolute -bottom-1 w-full z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col justify-evenly items-center z-9 relative m-1 lg:m-2">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-center text-gray-900 mb-10 animate-fade-up">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block">
            <span className="relative text-white">Sunshine</span>
          </span>{" "}
          Welcomes You !!
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 p-2 lg:p-4">
          <img
            src="./homepage/1.jpg"
            alt="Image 1"
            className="w-full h-44 lg:w-96 lg:h-60 rounded-lg object-cover"
          />
          <img
            src="./homepage/2.jpg"
            alt="Image 1"
            className="w-full h-44 lg:w-96 lg:h-60 rounded-lg object-cover"
          />
          <img
            src="./homepage/3.jpg"
            alt="Image 1"
            className="w-full h-44 lg:w-96 lg:h-60 rounded-lg object-cover"
          />
          <img
            src="./homepage/4.jpg"
            alt="Image 1"
            className="w-full h-44 lg:w-96 lg:h-60 rounded-lg object-cover"
          />
        </div>
        <p className="font-extrabold text-center text-black mt-8 px-4 text-md lg:text-xl">
          We are Sunshine, your companion to reach out to in need.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
