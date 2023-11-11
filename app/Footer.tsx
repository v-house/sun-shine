import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <img src="./logo.png" alt="Sunshine" className="w-24" />
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Sunshine
            </h4>
            <h5 className="text-sm mt-0 mb-2 text-blueGray-600">
              The Counselling Cell of IIT Hyderabad
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <a
                href="/twitter"
                className="flex bg-white text-blue-400 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="/facebook"
                className="flex bg-white text-blue-400 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="/dribbble"
                className="flex bg-white text-pink-400 hover:text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="/github"
                className="flex bg-white text-green-500 hover:text-green-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-1/2 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/aboutus"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/faqs"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/events"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/newsletter"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/aboutapp"
                    >
                      About Sunshine App
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Sunshine Team
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/teams"
                    >
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/management-team"
                    >
                      Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/buddies"
                    >
                      Buddies
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-300 block pb-2 text-sm"
                      href="/mentors"
                    >
                      Mentors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> Sunshine, IIT
              Hyderabad
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
