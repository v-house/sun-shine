"use client";

import React, { useEffect, useRef, useState } from "react";
import EachTeam from "./Eachteam";

import teams from "./buddies";

const Page: React.FC = () => {
  useEffect(() => {
    const handleButtonClick = (teamId: string) => {
      const element = document.getElementById(teamId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    teams.forEach((team) => {
      const buttonId = `button-${team.id}`;
      const teamId = team.id;

      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener("click", () => {
          handleButtonClick(teamId);
        });
      }
    });

    return () => {
      teams.forEach((team) => {
        const buttonId = `button-${team.id}`;
        const button = document.getElementById(buttonId);
        if (button) {
          button.removeEventListener("click", () => {
            handleButtonClick(team.id);
          });
        }
      });
    };
  }, []);

  return (
    <div className="bg-white p-1 md:p-2">
      <div className="flex flex-wrap justify-center">
        {teams.map((team) => (
          <div key={team.id} className="my-2 mx-4 lg:m-4">
            <a
              id={`button-${team.id}`}
              className="pr-4 text-blue-500 font-extrabold rounded-full active:scale-95 hover:cursor-pointer transition-transform duration-300 ease-in-out relative text-xs lg:text-lg"
            >
              {team.teamName}
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>

      {teams.map((team, index) => (
        <div key={team.id} id={team.id}>
          <EachTeam key={index} {...team} />
        </div>
      ))}
    </div>
  );
};

export default Page;
