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
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const backgroundImages = [
    "url('https://bl-i.thgim.com/public/news/fsearh/article67036452.ece/alternates/FREE_1200/MEMAU_30_6_2022_19_0_3_2_1011.jpg')",
    "url('https://www.iith.ac.in/assets/images/towers/tower1.jpg')",
    "url('https://qph.cf2.quoracdn.net/main-qimg-ebd12cac0e67d86a5ab98004a491ba7c-lq')",
    "url('https://arcop.co.in/images/product-options/enlarge-image/20160928032703_primage.jpg')",
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const logoScrollFactor = 0.3;
    const headingScrollFactor = 0.3;
    const subheadingScrollFactor = 0.3;

    const logo = document.querySelector(".logo") as HTMLElement;
    const heading = document.querySelector(".heading") as HTMLElement;
    const subheading = document.querySelector(".subheading") as HTMLElement;

    if (logo) {
      logo.style.transform = `translateY(${scrollY * logoScrollFactor}px)`;
    }
    if (heading) {
      heading.style.transform = `translateY(${
        scrollY * headingScrollFactor
      }px)`;
    }
    if (subheading) {
      subheading.style.transform = `translateY(${
        scrollY * subheadingScrollFactor
      }px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentBackgroundIndex < backgroundImages.length - 1) {
        setCurrentBackgroundIndex(currentBackgroundIndex + 1);
      } else {
        setCurrentBackgroundIndex(0);
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentBackgroundIndex]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div>
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
            onLoad={handleImageLoad}
            style={{ display: "none" }}
          />
        ))}
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <div className="bg-white overflow-x-hidden">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[92vh]">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed bg-slide-animation z-0"
                style={{
                  backgroundImage: backgroundImages[currentBackgroundIndex],
                  transition: "background-image 2s",
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-60 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full px-4 ml-auto mr-auto text-center flex flex-col justify-center items-center">
                    <div className="logo relative transform transition-transform duration-1000">
                      <Image
                        src="/logo.png"
                        alt="Sunshine IITH logo"
                        className="w-24 md:w-32 lg:w-56"
                        height={108}
                        width={108}
                        priority
                      />
                    </div>
                    <div className="ml-4">
                      <h1 className="text-4xl lg:text-8xl font-bold text-white heading animate-fade-right animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
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

            <div className="bg-sky-300">
              <Gallery />
            </div>

            {/* Cards for mentor and buddy program */}
            <FeatureCard />

            <FeaturesBlocks />

            <MyComponent />
            <div className="bg-gradient-to-bl from-sky-300 via-sky-300 to-blue-700 pt-2 pl-2 lg:pt-4 lg:pl-4">
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
