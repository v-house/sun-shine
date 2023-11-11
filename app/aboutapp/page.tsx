"use client";
import React from "react";
import App from "./Testing";

const BestDealSection: React.FC = () => {
  return (
    <>
      <section className="py-6 md:py-20  bg-gradient-to-b from-white to-yellow-300 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="px-4 md:mr-6 mt-2 animate-jump-in animate-ease-in-out">
          <a
              href="https://play.google.com/store/apps/details?id=app.iith.sunshine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 mb-2 text-white bg-black rounded-lg w-52"
            >
              <div className="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  ></path>
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-xs">DOWNLOAD ON</div>
                <div className="-mt-1 font-sans text-xl font-semibold">
                  Google Play
                </div>
              </div>
            </a>
            <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
              Sunshine is happily announcing its first App Version for the
              students welfare.
            </h3>
            <p className="mt-4 text-stone-800 text-xl font-medium">
              To help you reach out to us even more easily and quickly.
            </p>
            
            <App />
          </div>
          <div className="animate-fade-left animate-ease-in-out">
            <div className="bg-yellow-400 transform -translate-x-10 relative h-64 rounded-lg"></div>
            <div className="transform md:rounded-md bg-white scale-110 translate-x-10 shadow-lg -ml-4 -mt-44 p-8 space-y-2">
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
    </>
  );
};

export default BestDealSection;
