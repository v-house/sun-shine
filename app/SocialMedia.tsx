import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-8 mb-4">
      <a
        href="#"
        aria-label="Twitter"
        className="text-white hover:text-blue-400 hover:bg-white transition duration-300 ease-in-out"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="text-white hover:text-blue-600 hover:bg-white transition duration-300 ease-in-out"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="text-white hover:text-pink-500 transition duration-300 ease-in-out"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="text-white hover:text-blue-500 hover:bg-white transition duration-300 ease-in-out"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
