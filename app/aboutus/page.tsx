import React from "react";
import GalleryCarousel from "./Gallery";
import Count from "./Count";

const AboutUsPage = () => {
  return (
    <div className="bg-sky-300">
      <section id="about-sunshine" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About Sunshine
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              Since its inception on January 12, 2012, Sunshine - the counseling
              cell at IIT-H, has been committed to helping the student
              community. The dedicated team of Sunshine comprises of a Faculty
              in-Charge, three Psychological Counselors, nineteen faculty
              representatives, twelve student heads, thirty-three management
              team members, eighty-one mentors, and twenty-three buddies.
            </p>
            <p className="text-gray-600 mt-4">
              On the whole, the program aims to provide the incoming students
              with a cordial environment to make their transition to the IITH
              way of life as smooth and fun-filled as possible.
            </p>
            <a
              href="/faqs"
              className="text-blue-600 hover:underline mt-6 inline-block"
            >
              Have some queries? Visit our FAQ page.
            </a>
          </div>
        </div>
      </section>

      <section id="about-buddies" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About Buddies
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-6 lg:mb-8">
                <img
                  src="./homepage/buddies.png"
                  alt="Sunshine Buddies"
                  className="w-48 mx-auto lg:mx-0"
                />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Who Are We?
              </h2>
              <p className="text-gray-600">
                When college life gets a bit twisted, the Sunshine Buddy Program
                is here to help you untangle those mental knots. We are a team
                of compassionate individuals who understand the challenges of
                college life. Whether you're navigating the social scene,
                dealing with academic pressures, or just need someone to talk
                to, we've got your back.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Buddies
                </h3>
                <p className="text-gray-600">
                  Our Buddies are fellow students from various academic
                  backgrounds who volunteer to be your go-to contact for any
                  assistance you may need. They are approachable and ready to
                  lend an empathetic ear, offering help on social, mental, or
                  academic fronts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Professional Counsellors
                </h3>
                <p className="text-gray-600">
                  There are times when you might need more than a friendly chat,
                  and that's okay. We have trained counsellors available for
                  one-on-one and group counselling sessions. They're here to
                  offer professional support when you need it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Stressed Out? We Can Help!
            </h2>
            <p className="text-gray-600">
              Feeling stressed in college is entirely normal. We all go through
              it, and it's a natural response to the challenges we face. The
              Sunshine Buddy Program cares about how you're feeling and wants to
              make sure you have the support you need. Don't hesitate to reach
              out; we're here for you.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              The Sunshine Buddy Program in Action
            </h2>
            <p className="text-gray-600 mb-4">
              In addition to our dedicated team, the Sunshine Buddy Program
              offers a range of services:
            </p>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Supportive Meetups
              </h3>
              <p className="text-gray-600">
                Once you're matched with your Sunshine Buddy, you have the
                freedom to arrange meetups. These Buddy Meets are a cornerstone
                of the program, and they can be tailored to your needs. Whether
                it's a casual conversation over coffee, assistance with academic
                challenges, a walk in the park, or simply a friendly chat over
                the phone, these meetups are all about building strong,
                supportive relationships.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Fun Meetups and Events
              </h3>
              <p className="text-gray-600">
                In addition to Buddy Meets, we regularly host a variety of fun
                and engaging events that provide opportunities to socialize,
                learn, and have a great time. These events range from themed
                parties, workshops, and outdoor adventures to movie nights and
                more. It's all about fostering a sense of community and joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-mentor" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About Our Mentors
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-6 lg:mb-8">
                <img
                  src="./homepage/mentors.png"
                  alt="Sunshine Buddies"
                  className="w-48 mx-auto lg:mx-0"
                />
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Sunshine Mentors
              </h2>
              <p className="text-gray-600">
                Our Sunshine mentors are dedicated students who provide
                invaluable guidance and support to newcomers, helping them adapt
                to college life seamlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Roles and Responsibilities
                </h3>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Assist students in their transition to IITH.</li>
                  <li>
                    Conduct regular mentor-mentee meetings to ensure well-being.
                  </li>
                  <li>
                    Collaborate in organizing various events and programs.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Benefits of Being a Mentor
                </h3>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>Enhance interpersonal and communication skills.</li>
                  <li>Participate in stress management training sessions.</li>
                  <li>Receive a certificate and a letter of recommendation.</li>
                  <li>
                    Achieve personal growth in people management skills and
                    self-confidence.
                  </li>
                  <li>
                    Be recognized as the "Mentor of the Month" in the Mentor
                    Spotlight.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
