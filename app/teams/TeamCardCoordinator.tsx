import React from "react";

const TeamCard = (props: {
  name: string;
  email: string;
  department: string;
  image: string;
}) => {
  return (
    <div className="bg-white border rounded-md p-4 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center mx-4 mb-8">
      <img
        src={props.image}
        alt={props.name}
        className="rounded-full w-48 h-48 mx-auto shadow-lg object-contain"
      />
      <div className="mt-4">
        <p className="text-xl font-semibold text-white">{props.name}</p>
        <p className="text-gray-500">{props.email}</p>
        <p className="text-gray-500">{props.department}</p>
      </div>
    </div>
  );
};

export default TeamCard;
