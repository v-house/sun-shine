import React from "react";
import {
  FaUser,
  FaUserMd,
  FaChalkboardTeacher,
  FaUsers,
  FaBusinessTime,
  FaUsersCog,
  FaUserFriends,
} from "react-icons/fa";

const AboutPage = () => {
  const categories = [
    {
      value: "1",
      position: "Faculty Incharge",
      role: "To take care of the students",
    },
    {
      value: "3",
      position: "Psychollogical Counsellors",
      role: "To take care of the students",
    },
    {
      value: "19",
      position: "Faculty Representatives",
      role: "To take care of the students",
    },
    {
      value: "12",
      position: "Student Heads",
      role: "To take care of the students",
    },
    {
      value: "33",
      position: "Management Members",
      role: "To take care of the students",
    },
    {
      value: "23",
      position: "Buddies",
      role: "To take care of the students",
    },
    {
      value: "81",
      position: "Mentors",
      role: "To take care of the students",
    },
  ];

  return (
    <section className="flex flex-wrap justify-evenly gap-4 md:gap-16 p-4 md:p-10 bg-gradient-to-b from-sky-300 to-white">
      {categories.map((category) => (
        <div key={category.value} className="w-32 md:w-48">
          <h2>
            <span className="flex text-slate-900 text-5xl font-extrabold mb-2">
              {category.value}
            </span>
            <span className="inline-flex font-semibold bg-clip-text text-transparent bg-blue-500 mb-2">
              {category.position}
            </span>
          </h2>
          <p className="text-sm text-slate-500">{category.role}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutPage;
