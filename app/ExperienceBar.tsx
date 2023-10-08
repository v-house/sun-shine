import React, { useEffect, useRef } from "react";

const ExperienceBar: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      name: "John Doe",
      position: "Web Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl:
        "https://i.pinimg.com/originals/a8/6d/3e/a86d3e70e2a59cfa3b54c84ec6a2e754.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolomod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://wallpapercave.com/wp/wp5090673.jpg",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;

      let scrollLeft = 0;
      let animationFrameId: number | null = null;

      const scroll = () => {
        if (scrollLeft < scrollWidth - containerWidth) {
          scrollLeft += 1;
        } else {
          scrollLeft = 0;
        }

        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollLeft;
        }

        animationFrameId = requestAnimationFrame(scroll);
      };

      scroll(); // Start the scrolling animation

      return () => {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, []);

  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 px-5 font-bold text-4xl text-blue-500">
        Experiences
      </h1>
      <style>
        {`
          .hide-scroll-bar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap ml-5 space-x-6">
          {experiences.map((experience, index) => (
            <div key={index} className="w-80 md:w-96">
              <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-16 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                  <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 14"
                    >
                      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <p className="text-center text-gray-900 line-clamp-2 mb-2">
                    {experience.text}
                  </p>
                  <img
                    className="mx-auto w-16 h-16 object-cover rounded-full"
                    src={experience.imageUrl}
                    alt=""
                  />
                  <div className="mt-6 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      {experience.name}
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width="3"
                      height="3"
                      aria-hidden="true"
                      className="fill-gray-900"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <div className="text-gray-600">{experience.position}</div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBar;
