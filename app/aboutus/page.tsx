import React from "react";
import GalleryCarousel from "./Gallery";
import Count from "./Count";

const AboutUsPage = () => {
  return (
    <div className="py-8 px-4 bg-white rounded-lg m-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        About Sunshine Counselling Cell
      </h1>
      <hr className="h-px my-8 mt-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <GalleryCarousel />
      <Count />
      <p className="text-gray-600 mb-6">
        Since its inception on January 12, 2012, Sunshine - the counseling cell
        at IIT-H, has been committed to helping the student community. The
        dedicated team of Sunshine comprises of a Faculty in-Charge, two
        Psychological Counsellors, fifteen faculty representatives, three
        student heads, seven management team members, and thirty-six student
        mentors.
      </p>

      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        Student Mentorship Programme
      </h2>
      <p className="text-gray-600 mb-6">
        The Student Mentor Program is run by Sunshine, the counseling cell of
        IITH. The student mentors are selected by the Sunshine counselors
        through an interview and are trained in basic counseling skills, thereby
        making them competent to help other students in an unbiased manner and
        enabling them to run the program efficiently.
      </p>

      <p className="text-gray-600 mb-6">
        The student mentorship program is aimed at offering the incoming
        students an interface to understand and interact with the diverse
        student community at IITH. With the institute having a strict
        anti-ragging policy, the program also doubles up as an excellent
        ice-breaker.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Objectives of the Student Mentor Program
      </h3>
      <ul className="list-disc list-inside text-gray-600 mb-6 pl-4">
        <li>Welcoming and orienting the new students of IITH.</li>
        <li>
          Guiding the new students about life at IITH campus, the Student
          Gymkhana and its activities, college fests, etc.
        </li>
        <li>Providing academic guidance to the students.</li>
        <li>Enforcing the anti-ragging rule.</li>
      </ul>

      <p className="text-gray-600">
        On the whole, the program aims to provide the incoming students with a
        cordial environment to make their transition to the IITH way of life as
        smooth and fun-filled as possible.
      </p>

      <p className="text-indigo-600 font-semibold mt-8">
        Have some queries?{" "}
        <a href="/faqs" className="underline hover:text-indigo-800">
          Visit our FAQ page.
        </a>
      </p>
    </div>
  );
};

export default AboutUsPage;
