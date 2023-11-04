import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
interface TeamMemberProps {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  about: string;
  department: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  photoUrl,
  email,
  phone,
  about,
  department,
}) => {

  return (
    <div className="group w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  ">
      <div className="shadow:0_4px_8px_0_transparent,_0_6px_20px_0_transparent] [transition:box-shadow_0.3s_ease-in-out,_transform_0.8s_ease-in-out] hover:[box-shadow:0_4px_8px_0_rgba(0,_0,_0,_0.6),_0_6px_20px_0_rgba(0,_0,_0,_0.19)] relative group-hover:[transform:rotateY(180deg)] group-hover:cursor-pointer bg-white shadow-md rounded-lg [transform-style:preserve-3d] ">
        <div className="front-card [backface-visibility:hidden] ">
          <div className="relative">
            <img
              src={photoUrl}
              alt={name}
              className="w-full md:h-80 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4 relative">
            <div className="flex flex-col justify-between items-center">
              <h3 className="text-md font-semibold text-gray-950">{name}</h3>
              <span className="text-blue-500 bg-blue-100 py-1 px-2 rounded-full text-sm">
                {department}
              </span>
              <div className="flex space-x-2 mt-2">
                <button className="bg-blue-500 text-white p-2 rounded-full">
                  <FiPhoneCall />
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full">
                  <FiMail />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-y-auto back-card pt-1 pl-2 pr-2 absolute top-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[white] text-gray-950"><h1>About Me:</h1>{about}</div>
      </div>
    </div>
  );
};

export default TeamMember;
