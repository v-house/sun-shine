"use client";
import React, { useEffect, useState } from "react";
import teams from "./management";
import TeamCard from "./TeamCard";
import { Button, ButtonGroup, toggle } from "@nextui-org/react";
import { MdAccountBalance } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { ImNewspaper } from "react-icons/im";
import { RiMegaphoneFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { FaCameraRetro, FaCode, FaUserCog } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { ImFileOpenoffice } from "react-icons/im";
import { ImCogs } from "react-icons/im";

const Page: React.FC = () => {
  let teamsObject = Object.entries(teams);
  const sideShow = [
    <span key={0} className="group flex items-center">
      <FaUserCog size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        UG Heads
      </span>
    </span>,
    <span key={1} className="group flex items-center">
      <FaUserCog size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        PG/PhD Heads
      </span>
    </span>,
    <span key={2} className="group flex items-center">
      <FaCode size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Web App
      </span>
    </span>,
    <span key={3} className="group flex items-center">
      <MdAccountBalance size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Finance
      </span>
    </span>,
    <span key={4} className="group flex items-center">
      <TfiWrite size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Content
      </span>
    </span>,
    <span key={5} className="group flex items-center">
      <ImFileOpenoffice size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Design
      </span>
    </span>,
    <span key={6} className="group flex items-center">
      <ImCogs size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Logistics
      </span>
    </span>,
    <span key={7} className="group flex items-center">
      <ImNewspaper size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Newsletter
      </span>
    </span>,
    <span key={8} className="group flex items-center">
      <RiMegaphoneFill size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Publicity
      </span>
    </span>,
    <span key={9} className="group flex items-center">
      <FaCameraRetro size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Photography
      </span>
    </span>,
    <span key={10} className="group flex items-center">
      <PiVideoFill size={20} className="inline mr-6 text-white" />
      <span
        className="z-50 group-hover:opacity-100 transition-opacity bg-transparent px-1 text-lg text-gray-100 rounded-md absolute left-1/2 
       opacity-0 m-4 mx-auto w-48"
      >
        Videography
      </span>
    </span>,
  ];

  const iconMap = [
    <FaUserCog key={0} size={20} className="inline" />,
    <FaUserCog key={1} size={20} className="inline" />,
    <FaCode key={2} size={20} className="inline" />,
    <MdAccountBalance key={3} size={20} className="inline" />,
    <TfiWrite key={4} size={20} className="inline" />,
    <ImFileOpenoffice key={5} size={20} className="inline" />,
    <ImCogs key={6} size={20} className="inline" />,
    <ImNewspaper key={7} size={20} className="inline" />,
    <RiMegaphoneFill key={8} size={20} className="inline" />,
    <FaCameraRetro key={9} size={20} className="inline" />,
    <PiVideoFill key={10} size={20} className="inline" />,
  ];

  const [sideDisplay, setSideDisplay] = useState(iconMap);

  const [activeElement, setActiveElement] = useState<string | null>(null);
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveElement(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const options = {
      rootMargin: "-50px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const elements = document.querySelectorAll(".team-section");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex bg-blue-400">
        <div
          className={`group hidden lg:flex side-nav z-50 top-0 side-bar min-w-max p-3 h-screen sticky flex-col justify-between ${
            isSideNavVisible
              ? "bg-gradient-to-r from-gray-900 to-transparent"
              : "bg-gray-900"
          }`}
          style={{ transition: "width 1s ease-in-out" }}
          onMouseEnter={() => {
            setIsSideNavVisible(true);
            setSideDisplay(sideShow);
          }}
          onMouseLeave={() => {
            setIsSideNavVisible(false);
            setSideDisplay(iconMap);
          }}
        >
          <span className="pt-0 pb-0 font-extrabold text-2xl align-start text-white">
            Teams
          </span>
          {teamsObject.map(([teamName], index) => (
            <div
              key={teamName}
              className="mb-1 min-w-max ml-1 hover:translate-x-1 transition-transform duration-300"
            >
              <a
                href={`#${teamName}`}
                className={`text-lg font-bold transition-transform duration-1000`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(teamName);
                }}
              >
                {sideDisplay[index]}
              </a>
            </div>
          ))}
        </div>

        <div
          className="mb-0 bg-blue-400 p-2 w-full flex flex-col justify-center "
          style={{ transition: "all 0.2s ease-in-out" }}
        >
          {/* <div className="mt-8 ml-4 hidden side-button">
            <Button
              color="primary"
              onPress={() => {
                toggleSlideNav();
              }}
              className="mb-3"
            >
              View Teams
            </Button>
          </div> */}
          <div className="">
            <h1 className="mt-4 lg:mt-6 mb-10 lg:text-4xl text-2xl font-extrabold text-white text-center">
              Sunshine Management Team
            </h1>
            <div className="">
              {teamsObject.map(([teamName, teamMembers]) => (
                <section
                  id={teamName}
                  className="team-section w-full"
                  key={teamName}
                >
                  <h1 className="pt-8 pb-4 bg-inherit text-xl lg:text-3xl font-extrabold text-white text-center">
                    {teamName}
                  </h1>
                  <div className="flex flex-wrap justify-evenly">
                    {teamMembers.map((member, index) => (
                      <TeamCard
                        key={index}
                        name={member.name}
                        photoUrl={member.photoUrl}
                        email={member.email}
                        phone={member.phone}
                        department={member.department}
                        about={member.about}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
