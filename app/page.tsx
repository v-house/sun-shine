"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import MyComponent from "./Team";
import Gallery from "./Gallery";
import AboutApp from "./AboutApp";
import FeaturesBlocks from "./Card";
import FeatureCard from "./BuddyMentor";
import Experiences from "./ExperienceBar";
import Testimonial from "./Testimonials";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const logoScrollFactor = 0.1;

    const logo = document.querySelector(".logo") as HTMLElement;

    if (logo) {
      logo.style.transform = `translateY(${scrollY * logoScrollFactor}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="bg-white overflow-x-hidden">
            <div className="outer-container relative">
              <div className="flex items-center h-96 bg-gradient-to-br from-sky-400 via-orange-200 to-slate-500 bg-fixed">
                <div className="logo relative transform transition-transform duration-1000">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    className="w-24 md:w-32 lg:w-56"
                    height={108}
                    width={108}
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-4xl lg:text-8xl font-bold text-blue-900 heading animate-fade-right animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-forwards">
                    Sunshine
                  </h1>
                  <h3 className="text-sm lg:text-lg text-gray-600 subheading animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
                    The Counselling Cell of IIT Hyderabad
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-1 lg:p-2">
              <Gallery />
            </div>

            {/* Cards for mentor and buddy program */}
            <FeatureCard />

            <FeaturesBlocks />

            <MyComponent />
            <AboutApp />
            <Testimonial />
            <Experiences />
          </div>
        )}
      </div>
    </>
  );
}
