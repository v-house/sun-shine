import React from "react";

const TeamCardCounsellors = (props: {
  name: string;
  email: string;
  phone: string;
  image: string;
  designation: string;
}) => {
  return (
    <div className="bg-white p-4 pb-8 text-center mx-4 mb-8">
      <div className="mt-1">
        <p className="text-md font-semibold text-blue-600">
          {props.designation}
        </p>
      </div>
      <img
        src={props.image}
        alt={props.name}
        className="rounded-lg w-48 h-48 mx-auto mt-4 shadow-lg object-cover hover:scale-105 overflow-hidden transition-transform duration-400"
      />
      <div className="mt-4">
        <p className="text-lg font-semibold text-black">{props.name}</p>
        <p className="text-gray-500">{props.email}</p>
        <p className="text-gray-500">{props.phone}</p>
      </div>
    </div>
  );
};

export default TeamCardCounsellors;
