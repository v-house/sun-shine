import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MyComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="relative m-2 lg:m-4 animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-forwards">
      <img
        src="https://i.pinimg.com/736x/28/52/52/285252b2c89a7aaa86c77d629754ab0a.jpg"
        alt="Team 2023"
        className="w-full h-auto"
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl lg:text-4xl font-bold opacity-0"
        style={{ background: "rgba(0, 0, 0, 0.6)" }}
        animate={controls}
        initial={{ opacity: 0, y: -20 }}
      >
        TEAM-2023
      </motion.div>

      {/* Button container */}
      {/* <div className="absolute bottom-0 left-0 w-full hidden lg:flex flex-wrap justify-evenly p-4">
        <button className="mx-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Faculty Team
        </button>
        <button className="mx-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Management Team
        </button>
        <button className="mx-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          UG Team
        </button>
        <button className="mx-2 mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          PG Team
        </button>
      </div> */}
    </div>
  );
};

export default MyComponent;
