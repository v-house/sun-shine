"use client";

import { Code } from "@nextui-org/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DevelopersTeamPage: React.FC = () => {
  return (
    <section className="flex items-center bg-gray-800">
      <div className="p-4 mx-auto">
        <div className="mb-20 my-10 lg:my-16 text-center">
          <h1 className="text-4xl font-bold text-white py-2 px-4 rounded-lg font-mono">
            $ Developers
          </h1>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 gap-4 lg:gap-16 lg:grid-cols-2">
            <div className="relative mb-10 border-b-4 border-t-4 border-blue-400 w-full">
              <div className="pt-8 pb-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-20 h-20 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

                <div className="text-center">
                  <div className="relative inline-block w-48 h-48 mb-6 text-xs text-white rounded overflow-hidden">
                    <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.licdn.com/dms/image/C4E03AQGpVXUVLFUksQ/profile-displayphoto-shrink_800_800/0/1655722648837?e=1706745600&v=beta&t=eT00ZXRqEUQN0RRgAD3s23RGf9gx4d1Qo2G_pPGm5lE"
                      alt=""
                    />
                    <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="text-lg font-bold leading-9 mb-3 mx-auto">
                    <Code size="lg">Jeripothula Charan Teja</Code>
                  </h2>
                  <span className="block text-xs font-semibold uppercase text-blue-400 mb-1 mx-auto">
                    <Code size="sm">Btech in Civil Engineering, 2020-24</Code>
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href="http://www.linkedin.com/in/jeripothula-charan-teja-892840242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>
            <div className="relative mb-10 border-b-4 border-t-4 border-blue-400 w-full">
              <div className="pt-8 pb-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-20 h-20 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

                <div className="text-center">
                  <div className="relative inline-block w-48 h-48 mb-6 text-xs text-white rounded overflow-hidden">
                    <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.licdn.com/dms/image/D5603AQGbZ7Itnw3MzQ/profile-displayphoto-shrink_400_400/0/1694713181862?e=1704931200&v=beta&t=jgniOCaEyA8wQLsfFeaisXJtxUgcgNXldJL6XJvDQ7g"
                      alt=""
                    />
                    <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="text-lg font-bold leading-9 mb-3 mx-auto">
                    <Code size="lg">K Vivek Kumar</Code>
                  </h2>
                  <span className="block text-xs font-semibold uppercase text-blue-400 mb-1 mx-auto">
                    <Code size="sm">Btech in Computer Science, 2021-25</Code>
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/k-vivek-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>
            <div className="relative mb-10 border-b-4 border-t-4 border-blue-400 w-full">
              <div className="pt-8 pb-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-20 h-20 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

                <div className="text-center">
                  <div className="relative inline-block w-48 h-48 mb-6 text-xs text-white rounded overflow-hidden">
                    <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.licdn.com/dms/image/D4E03AQHzmIhJjJ-qKQ/profile-displayphoto-shrink_400_400/0/1699903163867?e=1705536000&v=beta&t=jNd3X47tCTszD8wdpADDn3DJhje7EBoTEOXsNEEqwv4"
                      alt=""
                    />
                    <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="text-lg font-bold leading-9 mb-3 mx-auto">
                    <Code size="lg">Rishitha Surineni</Code>
                  </h2>
                  <span className="block text-xs font-semibold uppercase text-blue-400 mb-1 mx-auto">
                    <Code size="sm">Btech in Computer Science, 2022-26</Code>
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rishitha-surineni-6a821829b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>
            <div className="relative mb-10 border-b-4 border-t-4 border-blue-400 w-full">
              <div className="pt-8 pb-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-20 h-20 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

                <div className="text-center">
                  <div className="relative inline-block w-48 h-48 mb-6 text-xs text-white rounded overflow-hidden">
                    <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.licdn.com/dms/image/D4D03AQEKraOHYxid9A/profile-displayphoto-shrink_400_400/0/1694021760821?e=1705536000&v=beta&t=h_uoTgJFkULwirktMorW2-Qu2fyB7elGCfwLuoPLVpg"
                      alt=""
                    />
                    <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="text-lg font-bold leading-9 mb-3 mx-auto">
                    <Code size="lg">Advait Jain</Code>
                  </h2>
                  <span className="block text-xs font-semibold uppercase text-blue-400 mb-1 mx-auto">
                    <Code size="sm">Btech in Computer Science, 2022-26</Code>
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/advait-jain-2958a9281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>
            <div className="relative mb-10 border-b-4 border-t-4 border-blue-400 w-full">
              <div className="pt-8 pb-5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-20 h-20 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>

                <div className="text-center">
                  <div className="relative inline-block w-48 h-48 mb-6 text-xs text-white rounded overflow-hidden">
                    <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                    <img
                      className="object-cover w-full h-full"
                      src="https://media.licdn.com/dms/image/D5603AQEtS89VBOl3og/profile-displayphoto-shrink_400_400/0/1696979700002?e=1705536000&v=beta&t=fzZh1akrhLmuBDRT99hohSF-YKGGrYFLUMF54wrHvDY"
                      alt=""
                    />
                    <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                  </div>
                </div>
                <div className="flex justify-center flex-col">
                  <h2 className="text-lg font-bold leading-9 mb-3 mx-auto">
                    <Code size="lg">Bhaskar Mandal</Code>
                  </h2>
                  <span className="block text-xs font-semibold uppercase text-blue-400 mb-1 mx-auto">
                    <Code size="sm">Btech in Material Science, 2022-26</Code>
                  </span>
                </div>
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/bhaskaraa45/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersTeamPage;
