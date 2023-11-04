"use client";

import React from "react";
import TeamMember from "./TeamCard";

interface TeamMemberProps {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string;
}

interface EachTeamProps {
  id: string;
  teamName: string;
  teamPhotoUrl: string;
  teamDescription: string;
  teamMembers: TeamMemberProps[];
}

const EachTeam: React.FC<EachTeamProps> = ({
  id,
  teamName,
  teamPhotoUrl,
  teamDescription,
  teamMembers,
}) => {
  return (
    <div className="bg-blue-400 mb-8">
      <section id={id} className="py-2 lg:py-4 lg:pt-6">
        <div className="mb-8 px-4 rounded-lg">
          <div className="mb-4 text-center">
            <div className="relative inline-flex items-center">
              <h2 className="text-4xl font-extrabold text-white">{teamName}</h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <img
                src={teamPhotoUrl}
                alt={teamName}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 text-white">
              <p className="text-sm lg:text-lg">{teamDescription}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EachTeam;
