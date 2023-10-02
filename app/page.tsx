"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import ExperienceBar from "./ExperienceBar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="bg-white p-1">
            <div className="flex items-center m-4">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-20 md:w-24 lg:w-32"
                height={108}
                width={108}
              />
              <div className="ml-4">
                <h1 className="text-2xl lg:text-4xl font-bold text-blue-900">
                  Sunshine
                </h1>
                <h3 className="text-sm lg:text-lg text-gray-600">
                  The Councelling Cell of IIT Hyderabad
                </h3>
              </div>
            </div>
            <hr className="border-t border-blue-900 my-4" />

            {/* Welcome note */}
            <div className="bg-blue-100 p-6 m-4 rounded-lg shadow-lg">
              {/* Image gallery */}
              <div className="max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8">
                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <Image
                    src="/training_10.jpg"
                    alt="Two each of gray, white, and black shirts laying flat."
                    className="h-full w-full object-cover object-center"
                    width={108}
                    height={108}
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <Image
                      src="/training_11.jpg"
                      alt="Model wearing plain black basic tee."
                      className="h-full w-full object-cover object-center"
                      width={108}
                      height={108}
                    />
                  </div>
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <Image
                      src="/training_12.jpg"
                      alt="Model wearing plain gray basic tee."
                      className="h-full w-full object-cover object-center"
                      width={108}
                      height={108}
                    />
                  </div>
                </div>
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <Image
                    src="/training_13.jpg"
                    alt="Model wearing plain white basic tee."
                    className="h-full w-full object-cover object-center"
                    width={108}
                    height={108}
                  />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-blue-900 my-4">Hello!</h1>
              <p className="text-lg text-gray-800 mb-4">
                We are Sunshine, your buddies to talk with.
              </p>
              <p className="text-base text-gray-700 mb-4">
                College and hostel are exciting places. But at times they tend
                to get a bit overwhelming and stressful. It is in those times
                that talking with someone who has already been a part of the
                system helps a great deal. Be it anything from homesickness,
                language issues, academic pressure, career guidance, emotional
                instability, time management, unexplainable laziness, lack of
                concentration, to losing interest in life, losing confidence,
                addiction of any sorts, etc. we are always here to hear you out
                and help you make the right choices.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Counselling is often misinterpreted to be an advisory one.
                However, we at Sunshine believe in helping you to help yourself.
                Talking with a member of Sunshine does not imply a failure to
                solve your problem. Instead, it implies your motivation to take
                your challenges head on and get it solved by looking at it from
                different perspectives. This is what Sunshine believes in and
                helps you achieve.
              </p>
              <p className="text-base text-gray-700 mb-4">
                So if you are experiencing any difficulties or have any doubts
                or just have an urge to talk with someone, why don't you just
                come over and meet one of us. Let us sit back, relax, and have a
                chat about what is on your mind.
              </p>
            </div>

            {/* Cards for mentor and buddy program */}
            <div className="lg:flex lg:px-2 my-2 lg:my-4">
              <div className="bg-gray-200 shadow-lg rounded-lg p-4 mx-2 flex-1">
                <h2 className="text-2xl text-blue-500 font-bold mb-2">
                  Sunshine Buddy Program
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Sunshine is happy to present you the Buddy Program. In this
                  program, we invite volunteers from the student body to be a
                  Buddy to support their batch/peers of their Department.There
                  can be multiple buddies from a single batch's department.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Buddy Programme
                </button>
              </div>
              <div className="bg-gray-200 shadow-lg rounded-lg p-4 mx-2 flex-1">
                <h2 className="text-2xl text-blue-500 font-bold mb-2">
                  Sunshine Mentor Program
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Sunshine Mentors help the students to make an easy and
                  fun-filled transition from school life to the IITH way of
                  life. In this program, we invite students from all departments
                  to apply for mentorship since having student mentors from all
                  departments makes it easier for the students to find a person
                  to adapt to their department.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Mentor Programme
                </button>
              </div>
            </div>
            <ExperienceBar />
          </div>
        )}
      </div>
    </>
  );
}
