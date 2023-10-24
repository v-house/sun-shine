import React from "react";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-evenly items-center py-10 lg:py-12">
      <div className="absolute bottom-0 w-full z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col justify-evenly items-center z-10 relative">
        <h1 className="text-xl lg:text-4xl font-extrabold text-center text-gray-900 mb-10">
          Welcome to Sunshine!
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 p-2 lg:p-4">
          <img
            src="https://www.uniquenewsonline.com/wp-content/uploads/2022/08/87-872897_nancy-korean-singer-wallpaper-hd-nancy-momoland.jpg"
            alt="Image 1"
            className="w-48 h-48 rounded-lg object-cover hover:scale-110 transition-transform duration-1000"
          />
          <img
            src="http://t3.gstatic.com/images?q=tbn:ANd9GcQ-Fo0HQZI4oKxV7FZia_e1zXEm-qk9QqhUMfNMy9cunNLRBHLnB9ZzFyitJ6EFJVfgXzjRLg"
            alt="Image 2"
            className="w-48 h-48 rounded-lg object-cover hover:scale-110 transition-transform duration-1000"
          />
          <img
            src="http://t3.gstatic.com/images?q=tbn:ANd9GcQ-Fo0HQZI4oKxV7FZia_e1zXEm-qk9QqhUMfNMy9cunNLRBHLnB9ZzFyitJ6EFJVfgXzjRLg"
            alt="Image 3"
            className="w-48 h-48 rounded-lg object-cover hover:scale-110 transition-transform duration-1000"
          />
          <img
            src="http://t3.gstatic.com/images?q=tbn:ANd9GcQ-Fo0HQZI4oKxV7FZia_e1zXEm-qk9QqhUMfNMy9cunNLRBHLnB9ZzFyitJ6EFJVfgXzjRLg"
            alt="Image 4"
            className="w-48 h-48 rounded-lg object-cover hover:scale-110 transition-transform duration-1000"
          />
        </div>
        <p className="text-sm lg:text-lg text-center text-gray-600 mt-8 px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, and some
          more.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
