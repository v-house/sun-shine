import React from "react";
import Count from "./Count";

const SunshineWhyChooseUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-sky-300 text-blue-900">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-blue-500 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            THE COUNCELLING CELL OF IIT HYDERABAD
          </span>
          <h2 className="block w-full font-bold text-3xl sm:text-4xl text-blue-900">
            Sunshine
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-blue-700">
            Our templates allow for maximum customization. No technical skills
            required - our intuitive design tools let you get the job done
            easily.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Customizable */}
          <div className="rounded-md border border-blue-200 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                background:
                  "linear-gradient(to bottom, #FFFFFF 0%, #87CEEB 100%)",
                borderColor: "#93BFF0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-color-swatch"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
              </svg>
            </div>
            <h3 className="mt-6 text-blue-900">Customizable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-blue-700">
              Tailor your landing pages look and feel, from the color scheme to
              the font size, to the design of the page.
            </p>
          </div>

          {/* Fast Performance */}
          <div className="rounded-md border border-blue-200 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                background:
                  "linear-gradient(to bottom, #FFFFFF 0%, #3B82F6 100%)",
                borderColor: "#93BFF0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bolt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
              </svg>
            </div>
            <h3 className="mt-6 text-blue-900">Fast Performance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-blue-700">
              We build our templates for speed in mind, for super-fast load
              times so your customers never waver.
            </p>
          </div>

          {/* Fully Featured */}
          <div className="rounded-md border border-blue-200 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                background:
                  "linear-gradient(to bottom, #FFFFFF 0%, #3B82F6 100%)",
                borderColor: "#93BFF0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-tools"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
              </svg>
            </div>
            <h3 className="mt-6 text-blue-900">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-blue-700">
              Everything you need to succeed and launch your landing page, right
              out of the box. No need to install anything else.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SunshineWhyChooseUs;
