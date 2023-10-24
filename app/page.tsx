"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import ExperienceBar from "./ExperienceBar";
import PeopleCards from "./Card";
import MyComponent from "./Team";
import { FaUserFriends, FaChalkboardTeacher, FaWhatsapp } from "react-icons/fa";
import Gallery from "./Gallery";
import AboutApp from "./AboutApp";
import FeaturesBlocks from "./Card";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const logoScrollFactor = 0.1;

    const logo = document.querySelector(".logo") as HTMLElement;

    if (logo) {
      logo.style.transform = `translateY(${scrollY * logoScrollFactor}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="bg-white overflow-x-hidden">
            <div className="outer-container relative">
              <div className="flex items-center h-96 bg-gradient-to-br from-sky-400 via-orange-200 to-slate-500 bg-fixed">
                <div className="logo relative transform transition-transform duration-1000">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    className="w-24 md:w-32 lg:w-56"
                    height={108}
                    width={108}
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-4xl lg:text-8xl font-bold text-blue-900 heading animate-fade-right animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-forwards">
                    Sunshine
                  </h1>
                  <h3 className="text-sm lg:text-lg text-gray-600 subheading animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
                    The Counselling Cell of IIT Hyderabad
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-1 lg:p-2">
              <Gallery />
            </div>

            {/* Cards for mentor and buddy program */}
            <div className="lg:flex lg:px-2 my-2 lg:my-4">
              <div className="p-1 lg:p-2 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-blue-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                    <FaUserFriends size={40} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-blue-500 text-lg title-font font-medium mb-3">
                      Sunshine Buddy Program
                    </h2>
                    <p className="leading-relaxed text-base line-clamp-3 text-black">
                      Sunshine is happy to present you the Buddy Program. In
                      this program, we invite volunteers from the student body
                      to be a Buddy to support their batch/peers of their
                      Department. There can be multiple buddies from a single
                      batch department.
                    </p>
                    <button className="mt-3 text-blue-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-1 lg:p-2 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-blue-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                    <FaChalkboardTeacher size={40} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-blue-500 text-lg title-font font-medium mb-3">
                      Sunshine Mentor Program
                    </h2>
                    <p className="leading-relaxed text-base line-clamp-3 text-black">
                      Sunshine Mentors help the students to make an easy and
                      fun-filled transition from school life to the IITH way of
                      life. In this program, we invite students from all
                      departments to apply for mentorship since having student
                      mentors from all departments makes it easier for the
                      students to find a person to adapt to their department.
                    </p>
                    <button className="mt-3 text-blue-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <FeaturesBlocks />

            <MyComponent />
            <AboutApp />
            <ExperienceBar />
          </div>
        )}
      </div>
    </>
  );
}
