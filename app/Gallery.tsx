import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-evenly items-center p-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Grid Layout with Tailwind CSS
      </h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      <p className="text-lg text-center text-gray-600 mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, and some more.
      </p>
    </div>
  );
};

export default HomePage;
