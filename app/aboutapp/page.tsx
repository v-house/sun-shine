"use client";
import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  FaUser,
  FaUserMd,
  FaChalkboardTeacher,
  FaUsers,
  FaBusinessTime,
  FaUsersCog,
  FaUserFriends,
} from "react-icons/fa";
import App from "./Testing";

const BestDealSection: React.FC = () => {
  return (
    <>
      <section className="py-6 md:py-20  bg-gradient-to-b from-white to-yellow-300 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="px-4 md:mr-6 mt-2 animate-jump-in animate-ease-in-out">
            <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
              Sunshine is happily announcing its first App Version for the
              students welfare.
            </h3>
            <p className="mt-4 text-stone-800 text-xl font-medium">
              To help you reach out to us even more easily and quickly.
            </p>
            <App />
          </div>
          <div className="animate-fade-left animate-ease-in-out">
            <div className="bg-yellow-400 transform -translate-x-10 relative h-64 rounded-lg"></div>
            <div className="transform md:rounded-md bg-white scale-110 translate-x-10 shadow-lg -ml-4 -mt-44 p-8 space-y-2">
              <div className="px-4 sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                <img src="./app1.png" alt="Lender 1" />
                <img src="./app3.png" alt="Lender 1" />
                <img src="./app4.png" alt="Lender 1" />
                <img src="./app5.png" alt="Lender 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestDealSection;
