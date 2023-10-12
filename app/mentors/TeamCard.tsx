import React, { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";

interface TeamMemberProps {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  photoUrl,
  email,
  phone,
  about,
  department,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
        <img
          src={photoUrl}
          alt={name}
          className="w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold text-gray-950">{name}</h3>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none"
                onClick={() => {}}
              >
                <FiPhoneCall />
              </button>
              <button
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none"
                onClick={() => {}}
              >
                <FiMail />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 text-sm">{department}</p>
          </div>
          <div
            className={`text-sm overflow-hidden ${
              isHovered
                ? "opacity-100 max-h-full transition-opacity duration-1000"
                : "opacity-0 max-h-0 duration-0"
            }`}
          >
            <p className="text-gray-950 mt-1">About me:</p>
            <p className="text-gray-700">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
