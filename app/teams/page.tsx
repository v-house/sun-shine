"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TeamCard from "./TeamCardCoordinator";
import TeamCardCounsellors from "./TeamCardCounsellors";
import TeamCardFaculty from "./TeamCardFaculty";

import facultyCoordinators from "./facultycoordinators";
import professionalCounselors from "./professionalCounsellors";
import facultyRepresentatives from "./facultyRepresentatives";

export default function Teams() {
  const router = useRouter();
  return (
    <div className="bg-white p-2 pt-4 lg:pt-8 text-center">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-950">
        The Sunshine Team
      </h1>
      <hr className="h-px my-8 mt-1 border-0 bg-gray-700"></hr>
      <div className="mt-4">
        <div className="flex flex-col space-y-2 px-8 md:px-32 md:flex-row md:space-y-0 md:space-x-2">
          <button
            onClick={() => router.push("/management-team")}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Management Team
          </button>
          <button
            onClick={() => router.push("/mentors")}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Mentors
          </button>
          <button
            onClick={() => router.push("/buddies")}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Buddies
          </button>
        </div>
      </div>
      <div className="mt-8 text-slate-700 px-2 md:px-16">
        They act as a bridge between the faculty and the students by
        representing the views of the students across to the faculty.
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-slate-800">
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

      <div className="mt-2">
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
