import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";

interface TeamMemberProps {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string; // Add department prop
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  photoUrl,
  email,
  phone,
  about,
  department, // Include the department prop
}) => {
  return (
    <div className="w-full p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
          {/* New line for department */}
          <div className="mt-2">
            <p className="text-gray-600 text-sm">{department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
