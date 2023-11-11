import React from "react";

const TeamCard = (props: {
  name: string;
  email: string;
  department: string;
  image: string;
}) => {
  return (
    <div className="bg-white p-4 pb-8 text-center mx-4 mb-8">
      <img
        src={props.image}
        alt={props.name}
        className="rounded-lg w-48 h-48 mx-auto mt-4 shadow-lg object-cover hover:scale-105 overflow-hidden transition-transform duration-400"
      />
      <div className="mt-4">
        <p className="text-lg font-semibold text-black">{props.name}</p>
        <p className="text-gray-500">{props.department}</p>
        <p className="text-gray-500">{props.email}</p>
      </div>
    </div>
  );
};

export default TeamCard;
