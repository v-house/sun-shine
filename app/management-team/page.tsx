'use client';
import React, { useEffect, useState } from "react";
import teams from "../management";
import TeamCard from "./TeamCard";

  const Page: React.FC = () => {
    let teamsObject = Object.entries(teams);
    const [sideDisplay, setSideDisplay] = useState(teamsObject.map(([teamName]) => (teamName[0])));
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


    const showSideNav = (element:HTMLElement) => {
      element.classList.remove("bg-gray-900");
      element.classList.add("bg-[linear-gradient(to_right,_rgba(17,24,39,1),_rgba(17,24,39,0.5))]");
      console.log(element.classList);
      setSideDisplay(teamsObject.map(([teamName]) => (teamName)));
    };
    const removeSideNav = (element:HTMLElement) => {
      setSideDisplay(teamsObject.map(([teamName]) => (teamName[0])));
      element.classList.remove("bg-[linear-gradient(to_right,_rgba(17,24,39,1),_rgba(17,24,39,0.5))]");
      element.classList.add("bg-gray-900");
    };

    return (
      <>
        <div
          className="side-nav z-10 bg-grey-900 [transition:width_0.2s_ease-in-out] sticky top-0 side-bar w-max pl-6 pr-6 h-screen flex flex-col justify-center  overflow-x-hidden"
          style={{ transition: 'width 0.2s ease-in-out' }}
          onMouseEnter={(e) => {
            showSideNav(e.target as HTMLElement);
          }}
          onMouseLeave={(e) => {
            removeSideNav(e.target as HTMLElement);
          }}
        >
            {teamsObject.map(([teamName], index) => {
              // var a=0;
              return(
              <div key={teamName} className="mb-4">
                <a
                  href={`#${teamName}`}
                  className="text-white text-4xl font-extrabold opacity-60 block "
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(teamName);
                  }}
                >
                  {sideDisplay[index]}
                </a>
              </div>

            );})}
          </div>
        {/* <div
          className="side-nav z-10 bg-gray-900 sticky top-0 side-bar w-20 h-screen flex flex-col justify-center"
          onMouseEnter={() => {
            showSideNav();
          }}
          onMouseLeave={() => {
            removeSideNav();
          }}
        >
          <div className="">
            {teamsObject.map(([teamName]) => (
              <div key={teamName} className="mb-4">
                <a
                  href={`#${teamName}`}
                  className="text-white text-4xl font-extrabold opacity-60 text-center block"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(teamName);
                  }}
                >
                  {teamName[0]}
                </a>
              </div>

            ))}
          </div>
        </div> */}
        <div className="mb-0 bg-blue-400 w-full p-1 md:p-2 md:pl-24 pt-0 block -translate-y-[calc(100vh)]">
          <h1 className="mt-6 mb-10 text-6xl font-extrabold text-white text-center ">
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
              natus repellendus, accusantium ducimus dignissimos ad nihil tempore
              doloremque assumenda ipsam magnam itaque sit ipsa!
            </div>
          </div>
          {teamsObject.map(([teamName, teamMembers]) => (
            <div id={teamName} className="team-section w-full" key={teamName}>
              <h1 className="pt-4 pb-4 bg-inherit text-4xl font-extrabold text-white text-center">
                {teamName}
              </h1>
              <div className="flex flex-wrap justify-center">
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
      </>
    );
  };

  export default Page;
