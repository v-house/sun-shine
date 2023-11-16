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
import { FaCameraRetro } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { ImFileOpenoffice } from "react-icons/im";
import { ImCogs } from "react-icons/im";
// ...

const Page: React.FC = () => {
  let teamsObject = Object.entries(teams);
  const sideShow = [
    <span key={0}><GrUserManager size={20} className="inline mr-8"  /><span className="text-[28px]">UG Heads</span></span>,
    <span key={1}><GrUserManager size={20} className="inline mr-8" /><span className="text-[28px]">PG/PhD Heads</span></span>,
    <span key={2}><AiFillCode size={20} className="inline mr-8" /><span className="text-[28px]">Web App</span></span>,
    <span key={3}><MdAccountBalance size={20} className="inline mr-8" /><span className="text-[28px]">Finance</span></span>,
    <span key={4}><TfiWrite size={20} className="inline mr-8" /><span className="text-[28px]">Content</span></span>,
    <span key={5}><ImFileOpenoffice size={20} className="inline mr-8" /><span className="text-[28px]">Design</span></span>,
    <span key={6}><ImCogs size={20} className="inline mr-8" /><span className="text-[28px]">Logistics</span></span>,
    <span key={7}><ImNewspaper size={20} className="inline mr-8" /><span className="text-[28px]">Newsletter</span></span>,
    <span key={8}><RiMegaphoneFill size={20} className="inline mr-8" /><span className="text-[28px]">Publicity</span></span>,
    <span key={9}><FaCameraRetro size={20} className="inline mr-8" /><span className="text-[28px]">Photography</span></span>,
    <span key={10}><PiVideoFill size={20} className="inline mr-8" /><span className="text-[28px]">Videography</span></span>,
  ];
  const iconMap = [
    <GrUserManager key={0} size={20} className="inline"   />,
    <GrUserManager key={1} size={20} className="inline"  />,
    <AiFillCode key={2} size={20} className="inline"  />,
    <MdAccountBalance key={3} size={20} className="inline"  />,
    <TfiWrite key={4} size={20} className="inline"  />,
    <ImFileOpenoffice key={5} size={20} className="inline"  />,
    <ImCogs key={6} size={20} className="inline"  />,
    <ImNewspaper key={7} size={20} className="inline"  />,
    <RiMegaphoneFill key={8} size={20} className="inline"  />,
    <FaCameraRetro key={9} size={20} className="inline"  />,
    <PiVideoFill key={10} size={20} className="inline"  />,
  ];

  const [sideDisplay, setSideDisplay] = useState(iconMap);
  const activateElement = (id: string) => {
    const elements = document.querySelectorAll(".side-nav a");
    elements.forEach((element) => {
      if (element.getAttribute("href") === `#${id}`) {
        (element as HTMLElement).style.opacity = "100%";
      } else {
        (element as HTMLElement).style.opacity = "60%";
      }
    });
    elements.forEach((element) => {
      if (element.getAttribute("href") === `#${id}`) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const options = {
      rootMargin: "-50px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateElement(entry.target.id);
        }
      });
    }, options);

    const elements = document.querySelectorAll(".team-section");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showSideNav = (element: HTMLElement) => {
    element.classList.remove("bg-gray-900");
    element.classList.add(
      "bg-[linear-gradient(to_right,_rgba(17,24,39,1),_rgba(17,24,39,0))]"
    );
    element.classList.add("pr-16");
    console.log(element.classList);
    setSideDisplay(sideShow);
  };
  const removeSideNav = (element: HTMLElement) => {
    setSideDisplay(iconMap);
    element.classList.remove(
      "bg-[linear-gradient(to_right,_rgba(17,24,39,1),_rgba(17,24,39,0))]"
    );
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
      <div
        className="hidden lg:flex side-nav z-10 bg-gray-900 [transition:width_0.2s_ease-in-out] sticky top-0 side-bar w-max p-5 min-h-screen h-fit  flex-col justify-center  overflow-x-hidden"
        style={{ transition: "width 0.2s ease-in-out" }}
        onMouseEnter={(e) => {
          showSideNav(e.target as HTMLElement);
        }}
        onMouseLeave={(e) => {
          removeSideNav(e.target as HTMLElement);
        }}
      >
        <span className="hidden lg:inline-block pt-0 pb-0 translate-y-[-15px] tall:translate-u-[-20px] !m-auto translate-x-[-10px] font-extrabold text-2xl align-start">
          Teams
        </span>
        {teamsObject.map(([teamName], index) => {
          // var a=0;
          return (
            <div key={teamName} className="mb-1">
              <a
                href={`#${teamName}`}
                className="text-white text-[28px] font-extrabold opacity-60 block "
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(teamName);
                }}
                onMouseOver={(e) => {
                  console.log((e.target as HTMLElement).style.opacity);
                  if (
                    (e.target as HTMLElement).style &&
                    (e.target as HTMLElement).style.opacity == "0.6"
                  ) {
                    (e.target as HTMLElement).style.opacity = "0.8";
                  }
                }}
                onMouseOut={(e) => {
                  if ((e.target as HTMLElement).style.opacity == "0.8") {
                    (e.target as HTMLElement).style.opacity = "0.6";
                  }
                }}
              >
                {sideDisplay[index]}
              </a>
            </div>
          );
        })}
      </div>

      <div
        className=" mb-0 bg-blue-400 p-2 lg:pl-24 w-full flex flex-col justify-center lg:-translate-y-[calc(100vh)] "
        style={{ transition: "all 0.2s ease-in-out" }}
      >
        <div className="mt-8 ml-4 lg:hidden side-button">
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
        <div
          className="bg-blue-400 slide-nav flex side-nav z-10 bg-grey-900  -translate-x-full [transition:translate_0.4s_ease-in-out] absolute top-0 left-0 side-bar w-screen pl-6 pt-6 pr-6 min-h-screen  flex-col justify-center  overflow-x-hidden" // onMouseEnter={(e) => {
          //   showSideNav(e.target as HTMLElement);
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
                    toggleSlideNav();
                    scrollToSection(teamName);
                  }}
                >
                  {teamName}
                </a>
                <hr className="pt-1"></hr>
              </div>
            );
          })}
        </div>
        <div className="page-body pl-10">
          <h1 className=" lg:mt-6 mb-10 lg:text-6xl text-4xl font-extrabold text-white text-center ">
            Sunshine Management{" "}
          </h1>
          <div className="mb-10 flex flex-col lg:flex-row space-y-4 justify-around">
            <img
              src="https://sunshine.iith.ac.in/images/about-slider/3.JPG"
              alt=""
              className=" lg:w-2/5 mb-4 lg:mb-0 float-left w-full h-auto rounded-lg object-cover shadow-lg"
            />
            <div className="text-sm lg:text-lg inline-block pl-4 basis-full lg:w-2/5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              ipsum. Aut veritatis, repellendus quidem nisi ipsa mollitia eum
              delectus? Exercitationem, dolore enim libero ea provident nulla
              vitae minima esse tempora! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam aliquid, est eligendi vel quasi nostrum
              natus repellendus, accusantium ducimus dignissimos ad nihil
              tempore doloremque assumenda ipsam magnam itaque sit ipsa!
            </div>
          </div>
          {teamsObject.map(([teamName, teamMembers]) => (
            <div id={teamName} className="team-section w-full" key={teamName}>
              <h1 className="pt-8 pb-4 bg-inherit text-3xl lg:text-4xl font-extrabold text-white text-center">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
