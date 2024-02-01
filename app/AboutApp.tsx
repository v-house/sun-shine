import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const RevealOnScroll = (props: {
  children: any;
  direction?: "left" | "right";
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-transform duration-1000
      ${
        isVisible
          ? props.direction === "right"
            ? "translate-x-0 opacity-100"
            : "translate-x-0 opacity-100"
          : props.direction === "right"
          ? "translate-x-20 opacity-0"
          : "translate-x-20 opacity-0"
      }`;

  return (
    <div ref={ref} className={classes}>
      {props.children}
    </div>
  );
};

const AboutApp = () => {
  const router = useRouter();
  const handleViewClick = () => {
    router.push("/aboutapp");
  };
  return (
    <RevealOnScroll direction="left">
      <section className="text-gray-600 body-font bg-white rounded-l-lg">
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white p-6 rounded-md shadow-md">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome to the Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Discover the extraordinary in every day. Sunshine is your portal
              to a world of inspiration and happiness. Explore and experience
              life in a whole new way.
            </p>
            <div className="flex flex-col md:flex-row">
              <a
                href="/aboutapp"
                className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all bg-sky-300 text-black rounded hover:bg-blue-600 group shadow-md mb-3 md:mb-0 md:mr-3"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                  View App Features
                </span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sunshine.iith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 mt-2 text-white bg-black rounded-lg h-14"
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
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          <RevealOnScroll direction="right">
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
              data-taos-offset="400"
            >
              <img
                className="object-cover object-center"
                alt="hero"
                src="./app2.png"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default AboutApp;
