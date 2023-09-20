"use client";

import React, { useEffect, useRef, useState } from "react";
import EachTeam from "./Eachteam";

import teams from "./management-team";

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
    <div className="m-1 bg-white rounded-lg">
      <div className="flex flex-wrap space-x-4 justify-evenly">
        {teams.map((team) => (
          <div key={team.id} className="m-4">
            <a
              id={`button-${team.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:scale-95"
            >
              {team.teamName}
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
