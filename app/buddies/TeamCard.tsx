import React, { useEffect, useState } from "react";
import { FiPhoneCall, FiMail, FiInfo } from "react-icons/fi";
import TeamMemberModal from "./TeamMembeModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 relative">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={photoUrl}
            alt={name}
            className="w-full md:h-80 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4 relative">
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-md font-semibold text-gray-950">{name}</h3>
            <span className="text-blue-500 bg-blue-100 py-1 px-2 rounded-full text-sm">
              {department}
            </span>
            <div className="flex space-x-2 mt-2">
              <button className="bg-blue-500 text-white p-2 rounded-full">
                <FiPhoneCall />
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full">
                <FiMail />
              </button>
              <button
                onClick={openModal}
                className="text-white bg-gray-600 p-2 rounded-full"
              >
                <FiInfo />
              </button>
            </div>
          </div>
        </div>
      </div>

      <TeamMemberModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        name={name}
        photoUrl={photoUrl}
        email={email}
        phone={phone}
        about={about}
        department={department}
      />
    </div>
  );
};

export default TeamMember;
