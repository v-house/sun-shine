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
      icon: <FaUser size={64} />,
      description: "1 Faculty Incharge",
    },
    {
      icon: <FaUserMd size={64} />,
      description: "3 Psychological Counsellors",
    },
    {
      icon: <FaChalkboardTeacher size={64} />,
      description: "19 Faculty Representatives",
    },
    {
      icon: <FaUsers size={64} />,
      description: "12 Student Heads",
    },
    {
      icon: <FaBusinessTime size={64} />,
      description: "33 Management Team Members",
    },
    {
      icon: <FaUsersCog size={64} />,
      description: "81 Mentors",
    },
    {
      icon: <FaUserFriends size={64} />,
      description: "23 Buddies",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-6 mx-auto">
        <div className="flex flex-col text-center items-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Meet Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get to know the dedicated individuals who make our program possible.
          </p>
        </div>
        <div className="flex flex-wrap text-center justify-center">
          {categories.map((category, index) => (
            <div key={index} className="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div className="bg-blue-200 p-4 rounded-lg h-full flex flex-col justify-center items-center">
                {category.icon}
                <p className="leading-relaxed text-gray-700 text-lg mt-4">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
