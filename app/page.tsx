"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import ExperienceBar from "./ExperienceBar";
import PeopleCards from "./Card";
import MyComponent from "./Team";
import { FaUserFriends, FaChalkboardTeacher, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMobile } from "react-icons/ai";
import Gallery from "./Gallery";
import AboutApp from "./AboutApp";

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
          <div className="bg-white">
            <div className="outer-container relative">
              <div className="flex items-center h-96 bg-gradient-to-br from-sky-400 via-orange-200 to-slate-500">
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
                <div className="flex items-end space-x-4 lg:space-x-4 p-2 absolute top-0 right-0">
                  <a
                    href="/about-app"
                    target="_blank"
                    className="text-blue-500 hover:bg-white p-2 rounded-lg hover:text-blue-700"
                  >
                    <AiOutlineMobile size={24} />
                    <p className="text-sm font-medium mt-2">About App</p>
                  </a>
                  <button
                    onClick={() => {}}
                    className="text-blue-500 hover:bg-white p-2 rounded-lg hover:text-blue-700"
                  >
                    <AiOutlineUser size={24} />
                    <p className="text-sm font-medium mt-2">Booking Portal</p>
                  </button>
                </div>
              </div>
              <div className="social-icons absolute bottom-4 rounded-lg p-1 md:p-2 lg:p-4 right-4 flex gap-2 lg:gap-4 bg-white">
                <a href="https://facebook.com" target="_blank">
                  <FaFacebook
                    size={24}
                    className="text-blue-500 hover:scale-110"
                  />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <FaTwitter
                    size={24}
                    className="text-blue-500 hover:scale-110"
                  />
                </a>
                <a href="https://whatsapp.com" target="_blank">
                  <FaWhatsapp
                    size={24}
                    className="text-blue-500 hover:scale-110"
                  />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram
                    size={24}
                    className="text-blue-500 hover:scale-110"
                  />
                </a>
              </div>
            </div>

            <div className="bg-white">
              {/* Welcome note */}
              <div className="bg-blue-100 p-6 shadow-lg">
                {/* Image gallery */}
                <Gallery />
                {/* <h1 className="text-3xl font-bold text-blue-900 my-4">
                  Hello!
                </h1>
                <p className="text-lg text-gray-800 mb-4">
                  We are Sunshine, your buddies to talk with.
                </p>
                <p className="text-base text-gray-700 mb-4">
                  College and hostel are exciting places. But at times they tend
                  to get a bit overwhelming and stressful. It is in those times
                  that talking with someone who has already been a part of the
                  system helps a great deal. Be it anything from homesickness,
                  language issues, academic pressure, career guidance, emotional
                  instability, time management, unexplainable laziness, lack of
                  concentration, to losing interest in life, losing confidence,
                  addiction of any sorts, etc. we are always here to hear you
                  out and help you make the right choices.
                </p>
                <p className="text-base text-gray-700 mb-4">
                  Counselling is often misinterpreted to be an advisory one.
                  However, we at Sunshine believe in helping you to help
                  yourself. Talking with a member of Sunshine does not imply a
                  failure to solve your problem. Instead, it implies your
                  motivation to take your challenges head on and get it solved
                  by looking at it from different perspectives. This is what
                  Sunshine believes in and helps you achieve.
                </p>
                <p className="text-base text-gray-700 mb-4">
                  So if you are experiencing any difficulties or have any doubts
                  or just have an urge to talk with someone, why do not you just
                  come over and meet one of us. Let us sit back, relax, and have
                  a chat about what is on your mind.
                </p> */}
                <div className="h-6"></div>
                <PeopleCards />
              </div>
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

            <MyComponent />
            <AboutApp />
            <ExperienceBar />
          </div>
        )}
      </div>
    </>
  );
}
