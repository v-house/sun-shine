// components/DeveloperFooter.tsx
import React from "react";

const DeveloperFooter: React.FC = () => {
  const developerLink = "https://example.com/developers";

  return (
    <div className="text-white py-2 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        <a href={developerLink} className="flex items-center">
          <div className="flex -space-x-2 items-center">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-2 block md:visible">
            <span className="text-gray-500 hover:text-white">Developers</span>
          </div>
        </a>
        <div className="text-gray-500 m-2">
          &copy; {new Date().getFullYear()} Sunshine, IIT Hyderabad Copyrights
        </div>
      </div>
    </div>
  );
};

export default DeveloperFooter;
