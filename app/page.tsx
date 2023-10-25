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
            <div
              className="relative pt-16 pb-32 flex content-center items-center justify-center"
              style={{
                minHeight: "75vh",
              }}
            >
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full px-4 ml-auto mr-auto text-center flex flex-col justify-center items-center">
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
                      <h1 className="text-4xl lg:text-8xl font-bold text-white heading animate-fade-right animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-forwards">
                        Sunshine
                      </h1>
                      <h3 className="text-sm lg:text-lg text-gray-200 subheading animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
                        The Counselling Cell of IIT Hyderabad
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-300 p-1 lg:p-2">
              <Gallery />
            </div>

            {/* Cards for mentor and buddy program */}
            <FeatureCard />

            <FeaturesBlocks />

            <MyComponent />
            <div className="bg-gradient-to-b from-sky-300 to-blue-600 pt-2 px-2 lg:pt-4 lg:px-4">
              <AboutApp />
            </div>

            <Testimonial />
            <Experiences />
          </div>
        )}
      </div>
    </>
  );
}
