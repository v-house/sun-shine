import React from "react";
import NftBanner from "./Testing";

const BestDealSection: React.FC = () => {
  return (
    <>
      <section className="py-6 md:py-20  bg-gradient-to-b from-white to-yellow-300 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="px-4 md:mr-6 mt-2 animate-jump-in animate-ease-in-out">
            <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
              With our diverse range of lenders, we fight hard to get you the
              best deal.
            </h3>
            <p className="mt-4 text-stone-800 text-xl font-medium">
              With our diverse range of lenders, we fight hard to get you the
              best deal.
            </p>
          </div>
          <div className="animate-fade-left animate-ease-in-out">
            <div className="bg-yellow-400 transform -translate-x-10 relative h-64 rounded-lg"></div>
            <div className="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 shadow-lg -ml-4 -mt-44 p-8 space-y-2">
              <div className="px-4 sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                <img src="./app1.png" alt="Lender 1" />
                <img src="./app3.png" alt="Lender 1" />
                <img src="./app4.png" alt="Lender 1" />
                <img src="./app5.png" alt="Lender 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-yellow-300 to-white rounded-l-lg">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
            data-taos-offset="400"
          >
            <img
              className="object-cover mx-auto h-screen border border-zinc-900"
              alt="hero"
              src="./app1.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Discover the extraordinary in every day. Sunshine is your portal
              to a world of inspiration and happiness. Explore and experience
              life in a whole new way.
            </p>
            <a
              href="/aboutapp"
              className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all bg-sky-300 text-black rounded hover:bg-blue-600 group shadow-md"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                View App Features
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-yellow-300 rounded-l-lg">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Discover the extraordinary in every day. Sunshine is your portal
              to a world of inspiration and happiness. Explore and experience
              life in a whole new way.
            </p>
            <a
              href="/aboutapp"
              className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all bg-sky-300 text-black rounded hover:bg-blue-600 group shadow-md"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                View App Features
              </span>
            </a>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
            data-taos-offset="400"
          >
            <img
              className="object-cover mx-auto h-screen border border-zinc-900"
              alt="hero"
              src="./app3.png"
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-yellow-300 to-white rounded-l-lg">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
            data-taos-offset="400"
          >
            <img
              className="object-cover mx-auto h-screen border border-zinc-900"
              alt="hero"
              src="./app4.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Discover the extraordinary in every day. Sunshine is your portal
              to a world of inspiration and happiness. Explore and experience
              life in a whole new way.
            </p>
            <a
              href="/aboutapp"
              className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all bg-sky-300 text-black rounded hover:bg-blue-600 group shadow-md"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                View App Features
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-yellow-300 rounded-l-lg">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Discover the extraordinary in every day. Sunshine is your portal
              to a world of inspiration and happiness. Explore and experience
              life in a whole new way.
            </p>
            <a
              href="/aboutapp"
              className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all bg-sky-300 text-black rounded hover:bg-blue-600 group shadow-md"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                View App Features
              </span>
            </a>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
            data-taos-offset="400"
          >
            <img
              className="object-cover mx-auto h-screen border border-zinc-900"
              alt="hero"
              src="./app5.png"
            />
          </div>
        </div>
      </section>
      <NftBanner />
    </>
  );
};

export default BestDealSection;
