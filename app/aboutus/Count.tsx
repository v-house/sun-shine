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
      value: "1 Faculty Incharge",
    },
    {
      icon: <FaUserMd size={64} />,
      value: "3 Psychological Counsellors",
    },
    {
      icon: <FaChalkboardTeacher size={64} />,
      value: "19 Faculty Representatives",
    },
    {
      icon: <FaUsers size={64} />,
      value: "12 Student Heads",
    },
    {
      icon: <FaBusinessTime size={64} />,
      value: "33 Management Team Members",
    },
    {
      icon: <FaUsersCog size={64} />,
      value: "81 Mentors",
    },
    {
      icon: <FaUserFriends size={64} />,
      value: "23 Buddies",
    },
  ];

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {categories.map((category, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <div className="flex flex-col items-center h-full">
                  {category.icon}
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {category.value}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
