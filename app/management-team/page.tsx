"use client";
import React, { useEffect, useState } from "react";
import teams from "../management";
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
// ...

const Page: React.FC = () => {
  let teamsObject = Object.entries(teams);
  const sideShow = [
    <span key={0} className="">
      <FaUserCog size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">UG Heads</span>
    </span>,
    <span key={1}>
      <FaUserCog size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">
        PG/PhD Heads
      </span>
    </span>,
    <span key={2}>
      <FaCode size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Web App</span>
    </span>,
    <span key={3}>
      <MdAccountBalance size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Finance</span>
    </span>,
    <span key={4}>
      <TfiWrite size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Content</span>
    </span>,
    <span key={5}>
      <ImFileOpenoffice size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Design</span>
    </span>,
    <span key={6}>
      <ImCogs size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Logistics</span>
    </span>,
    <span key={7}>
      <ImNewspaper size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Newsletter</span>
    </span>,
    <span key={8}>
      <RiMegaphoneFill size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">Publicity</span>
    </span>,
    <span key={9}>
      <FaCameraRetro size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">
        Photography
      </span>
    </span>,
    <span key={10}>
      <PiVideoFill size={20} className="inline mr-6 text-white" />
      <span className="text-lg text-gray-300 hover:text-white">
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

  const showSideNav = (element: HTMLElement) => {
    element.classList.remove("bg-gray-900");
    element.classList.add("bg-gradient-to-r");
    element.classList.add("from-gray-900");
    element.classList.add("to-transparent");
    element.classList.add("pr-16");
    console.log(element.classList);
    setSideDisplay(sideShow);
  };
  const removeSideNav = (element: HTMLElement) => {
    setSideDisplay(iconMap);
    element.classList.remove("bg-gradient-to-r");
    element.classList.remove("from-gray-900");
    element.classList.remove("to-transparent");
    element.classList.remove("pr-16");
    element.classList.add("bg-gray-900");
  };
  const toggleSlideNav = () => {
    const element = document.querySelector(".slide-nav");
    element?.classList.toggle("-translate-x-full");
    document.querySelector(".page-body")?.classList.toggle("hidden");
  };
  // var height = " mb-0 bg-blue-400 p-2 lg:pl-24 w-full flex flex-col justify-center lg:-translate-y-[calc("+document.querySelector("side-nav")?.clientHeight+"px)]" ;
  // console.log(height);
  return (
    <>
      <div className="bg-blue-400">
        <div
          className={`hidden lg:flex side-nav z-10 top-0 side-bar w-max p-3 min-h-screen sticky flex-col justify-between overflow-x-hidden ${
            isSideNavVisible
              ? "bg-gradient-to-r from-gray-900 pr-16"
              : "bg-gray-900"
          } transition-all duration-1000`}
          style={{ transition: "width 0.2s ease-in-out" }}
          onMouseEnter={() => {
            setIsSideNavVisible(true);
            setSideDisplay(sideShow);
          }}
          onMouseLeave={() => {
            setIsSideNavVisible(false);
            setSideDisplay(iconMap);
          }}
        >
          <span className="hidden lg:inline-block pt-0 pb-0 font-extrabold text-2xl align-start text-white">
            Teams
          </span>
          {teamsObject.map(([teamName], index) => (
            <div
              key={teamName}
              className="mb-1 ml-1 hover:translate-x-1 transition-transform duration-300"
            >
              <a
                href={`#${teamName}`}
                className={`text-lg font-bold ${
                  activeElement === teamName ? "ml-1" : ""
                } transition-transform duration-300`}
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
          className="mb-0 bg-blue-400 p-2 lg:pl-32 w-full flex flex-col justify-center lg:-translate-y-[calc(100vh)] "
          style={{ transition: "all 0.2s ease-in-out" }}
        >
          <div className="mt-8 ml-4 hidden side-button">
            <Button
              color="primary"
              onPress={() => {
                toggleSlideNav();
              }}
              className="mb-3"
            >
              View Teams
            </Button>
          </div>
          {/* <div
            className="bg-blue-400 slide-nav flex side-nav z-10 bg-grey-900  -translate-x-full [transition:translate_0.4s_ease-in-out] absolute top-0 left-0 side-bar w-screen pl-6 pt-6 pr-6 min-h-screen  flex-col justify-center  overflow-x-hidden"
            // onMouseEnter={(e) => {
            // showSideNav(e.target as HTMLElement);
            // }}
            // onMouseLeave={(e) => {
            //   removeSideNav(e.target as HTMLElement);
            // }}
          >
            {teamsObject.map(([teamName], index) => {
              return (
                <div key={teamName} className="mb-4 ">
                  <a
                    href={`#${teamName}`}
                    className="text-white text-2xl !opacity-100 font-extrabold block "
                    onClick={(e) => {
                      e.preventDefault();
                      // toggleSlideNav();
                      scrollToSection(teamName);
                    }}
                  >
                    {teamName}
                  </a>
                  <hr className="pt-1"></hr>
                </div>
              );
            })}
          </div> */}
          <div className="page-body mb-0">
            <h1 className="mt-4 lg:mt-6 mb-10 lg:text-4xl text-2xl font-extrabold text-white text-center">
              Sunshine Management
            </h1>
            <div className="mb-10 flex flex-col lg:flex-row space-y-4 justify-around">
              <img
                src="https://sunshine.iith.ac.in/images/about-slider/3.JPG"
                alt=""
                className="lg:w-2/5 mb-4 lg:mb-0 float-left w-full h-auto mx-auto rounded-lg object-cover shadow-lg"
              />
              <div className="text-sm lg:text-sm inline-block pl-4 basis-full lg:w-2/5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                ipsum. Aut veritatis, repellendus quidem nisi ipsa mollitia eum
                delectus? Exercitationem, dolore enim libero ea provident nulla
                vitae minima esse tempora! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veniam aliquid, est eligendi vel
                quasi nostrum natus repellendus, accusantium ducimus dignissimos
                ad nihil tempore doloremque assumenda ipsam magnam itaque sit
                ipsa!
              </div>
            </div>
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
