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
    <section id={id} className="pt-8 bg-blue-400">
      <div className="mb-8">
        <div className="mb-2 flex items-center">
          <hr className="border-t-2 border-white flex-grow" />
          <h2 className="text-3xl font-semibold text-blue-600 mx-4">
            {teamName}
          </h2>
          <hr className="border-t-2 border-white flex-grow" />
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={teamPhotoUrl}
              alt={teamName}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="">{teamDescription}</div>
          </div>
        </div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default EachTeam;
