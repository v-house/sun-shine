import React, { useEffect, useRef, useState } from "react";

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
  return (
    <RevealOnScroll direction="left">
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-white">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Introducing Sunshine App
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-medium transition-all rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View About App
              </span>
            </a>
          </div>
          <RevealOnScroll direction="right">
            <div
              className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4 mx-auto"
              data-taos-offset="400"
            >
              <img
                className="object-cover object-center rounded-lg shadow-lg"
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
