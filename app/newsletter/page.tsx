"use client";
import { useState } from "react";
import Image from "next/image";

const magazineLinks = [
  {
    id: 1,
    title: "The First Edition",
    minidescription:
      "'Move for Mental Health - Let's invest'. The cover story was based on the college experience of a student in IITH, his placement journey, dealing with his FRs, etc. to which most student even in the present can relate. Along with this, quotes, stories, art, etc spreading the same message as the theme was published in the newsletter.",
    cover: "/newsletter/Volume1cover.png",
    link: "./newsletter/Pulse-Volume-1.pdf",
  },
  {
    id: 2,
    title: "It's Second Edition",
    minidescription:
      "'Happiness lies in walking the success path chosen by you' focused on the importance of joy and happiness, an essential part of any human's life. In an ideal situation, the fulfillment of personal goals and desires makes one happy. It is an integral part of our life and without it, there is no point in living.",
    cover: "/newsletter/Volume2cover.png",
    link: "./newsletter/Pulse-Volume-2.pdf",
  },
  {
    id: 3,
    title: "The third edition of 'Pulse'",
    minidescription:
      "'Mental health is Important for all'. It created awareness of the importance of mental health for everyone , about the stigma in society about 'depression' and different types of help available for people suffering from mental health problems.",
    cover: "/newsletter/Volume3cover.png",
    link: "./newsletter/Pulse-Volume-3.pdf",
  },
];

const NewsletterPage = () => {
  const [currentMagazine, setCurrentMagazine] = useState(2);

  const navigateMagazine = (direction: string) => {
    if (direction === "next") {
      setCurrentMagazine((prev) =>
        prev === magazineLinks.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentMagazine((prev) =>
        prev === 0 ? magazineLinks.length - 1 : prev - 1
      );
    }
  };

  const totalPages = magazineLinks.length;

  return (
    <div className="text-center bg-white p-4 lg:p-10">
      <span className="text-xl lg:text-3xl font-bold text-slate-950 p-1 text-left">
        Sunshine Newsletters
      </span>
      <hr className="h-px my-8 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <p className="text-black mb-4">
        &ldquo;Pulse&rdquo; is Sunshine&apos;s (the counseling cell of IITH)
        newsletter, released every year on October 10th, on the World Mental
        Health Day. It features a collection of poems, artwork, and write-ups
        centered around mental health and well-being. This creative platform
        aims to raise awareness and provide support to the college community,
        fostering a positive and understanding atmosphere surrounding mental
        health.
      </p>
      <div className="hidden lg:block">
        {magazineLinks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMagazine(index)}
            className={`relative inline-flex items-center px-4 py-2 m-2 text-sm font-semibold ${
              currentMagazine === index
                ? "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            }`}
          >
            Volume {index + 1}
          </button>
        ))}
      </div>
      <div className="text-left my-4">
        <h2 className="text-xl font-semibold text-slate-800">
          {magazineLinks[currentMagazine].title}
        </h2>
        <p className="text-gray-500">
          {magazineLinks[currentMagazine].minidescription}
        </p>
      </div>
      <div className="hidden lg:block">
        <iframe
          src={magazineLinks[currentMagazine].link}
          width="100%"
          height="700px"
          title={`Magazine Volume ${currentMagazine + 1}`}
        ></iframe>
      </div>
      <div className="text-center my-4 lg:hidden flex flex-col justify-center rounded-md">
        <Image
          src={magazineLinks[currentMagazine].cover}
          alt="Cover Photo"
          width={100}
          height={400}
          className="w-full"
        />
        <a
          href={magazineLinks[currentMagazine].link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-3 px-6 text-lg hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300 rounded-lg my-2"
        >
          Download
        </a>
      </div>

      <div className="mt-8">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={() => navigateMagazine("prev")}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {magazineLinks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMagazine(index)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                currentMagazine === index
                  ? "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => navigateMagazine("next")}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NewsletterPage;
