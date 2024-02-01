import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <a href="/">
              <Image
                width={100}
                height={100}
                src="/logo.png"
                alt="Sunshine"
                className="w-24"
                priority
              />
            </a>
            <h4 className="text-3xl font-semibold text-white">Sunshine</h4>
            <h5 className="text-sm mt-0 mb-2 text-gray-300">
              The Counselling Cell of IIT Hyderabad
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <a
                href="https://www.linkedin.com/company/sunshine-iith/"
                className="flex bg-white text-blue-400 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/sunshineiith"
                className="flex bg-white text-blue-400 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="https://www.instagram.com/sunshine_iith/"
                className="flex bg-white text-pink-400 hover:text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={`https://wa.me/918331036053`}
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
        <div className="flex flex-wrap items-center md:justify-between justify-center mt-6">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-cyan-300 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span> Sunshine, IIT
              Hyderabad
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto text-center mt-4 md:mt-0">
            <div className="flex justify-center space-x-4">
              <a
                href="/developers"
                className="text-cyan-300 hover:text-white font-semibold text-sm"
              >
                Developers Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
