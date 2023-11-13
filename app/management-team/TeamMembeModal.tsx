import React from "react";
import Modal from "react-modal";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "90%",
    backgroundColor: "#3498db",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    border: "none",
    color: "white",
    transition: "all 1s",
  },
};

interface TeamMemberModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  isOpen,
  onRequestClose,
  name,
  photoUrl,
  email,
  phone,
  about,
  department,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Team Member Details"
    >
      <div className="p-4 text-center">
        <img
          src={photoUrl}
          alt={name}
          className="w-36 h-36 object-cover mx-auto rounded-lg"
        />
        <h3 className="text-2xl text-black font-semibold my-2">{name}</h3>
        <p className="text-sm my-2 text-sky-100">{department}</p>
        <div className="flex items-center justify-center space-x-4 p-2">
          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-blue-700 w-5 h-5" />
            <span className="font-semibold text-sm">{phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="text-blue-700 w-5 h-5" />
            <span className="font-semibold text-sm">{email}</span>
          </div>
        </div>

        <p className="text-sm line-clamp-6 my-2 text-slate-950">{about}</p>
        <button
          onClick={onRequestClose}
          className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mt-2 text-center"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default TeamMemberModal;
