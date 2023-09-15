import React from "react";
import TeamCard from "./TeamCardCoordinator";
import TeamCardCounsellors from "./TeamCardCounsellors";
import TeamCardFaculty from "./TeamCardFaculty";

import facultyCoordinators from "./facultycoordinators";
import professionalCounselors from "./professionalCounsellors";
import facultyRepresentatives from "./facultyRepresentatives";

export default function Teams() {
  return (
    <div className="bg-white p-2 lg:pt-16 text-center rounded-lg m-1">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-950">
        The Sunshine Team
      </h1>
      <hr className="h-px my-8 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="space-y-4 space-x-2 mt-4">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          Management Team
        </button>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          UG Mentors and Buddies
        </button>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
          PG Mentors and Buddies
        </button>
      </div>
      <div className="mt-8 text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet
        accusantium consequatur doloremque commodi? Obcaecati delectus rem sequi
        exercitationem qui maiores iste. Accusamus quidem at illo cupiditate,
        mollitia voluptatibus asperiores eveniet enim!
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Faculty Coordinators
        </h2>
        <div className={`flex flex-wrap justify-center mt-4`}>
          {facultyCoordinators.map((member, index) => (
            <div key={index} className="w-80">
              <TeamCard
                name={member.name}
                email={member.email}
                department={member.department}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Professional Counsellors
        </h2>
        <div className={`flex flex-wrap justify-center mt-4`}>
          {professionalCounselors.map((member, index) => (
            <div key={index} className="w-80">
              <TeamCardCounsellors
                name={member.name}
                email={member.email}
                phone={member.phone}
                image={member.image}
                designation={member.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Faculty Representatives
        </h2>
        <div className={`flex flex-wrap justify-center mt-4`}>
          {facultyRepresentatives.map((member, index) => (
            <div key={index} className="w-72">
              <TeamCardFaculty
                name={member.name}
                email={member.email}
                department={member.department}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
