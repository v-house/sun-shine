"use client";

import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-16 right-6 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md transition duration-1000"
        style={{
          animation: "fadeInUp 10s",
        }}
      >
        <FiArrowUp className="h-4 w-4 lg:h-6 lg:w-6" />
      </button>
    )
  );
};

export default BackToTopButton;
