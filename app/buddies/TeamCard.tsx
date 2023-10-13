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
    <div className="w-full p-4 relative">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={photoUrl}
            alt={name}
            className="w-full object-cover rounded-t-lg"
          />
          <button
            onClick={openModal}
            className="absolute top-2 right-2 text-white bg-gray-600 p-2 rounded-full"
          >
            <FiInfo size={20} />
          </button>
        </div>
        <div className="p-4 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-semibold text-gray-950">{name}</h3>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded-full">
                <FiPhoneCall />
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full">
                <FiMail />
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
