import React from "react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                The Sunshine Mentor Program in Action
              </h2>
              <p className="text-gray-600">
                Sunshine mentors are students who help freshers adjust to the
                social, academic, and emotional expectations that come with
                college life. In this program, we have students from all
                departments apply for mentorship roles to make it easier for
                other students to approach and relate to them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mentorship
              </h2>
              <p className="text-gray-600">
                Sunshine mentors are paired with first-year students to provide
                guidance and support you need to adjust and adapt to the
                Institute.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg my-6">
            <p className="text-gray-600">
              College life can be a rollercoaster ride with inevitable gruelling
              nights. Tough situations can be of any sort, from academic
              pressure to homesickness, addiction to unexplainable predicament.
              To face a life of toil, having a judgement-free and confidential
              zone to hear out your plight helps a great deal. As the
              counselling cell of IITH, Sunshine aims to establish a vibrant
              atmosphere on campus by aiding you in making the right choices. We
              strive to be a point of contact for your mental and social help by
              offering mentorship, an interface to interact with the diverse
              community of IITH, and the support required to heal yourself.
            </p>
            <p className="text-gray-600 mt-4">
              If you ever feel overwhelmed or stressed, come over, and have a
              chat with us without reluctance as we at Sunshine believe, for
              times unsparing, you will need some caring too.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 my-4">
              Professional Counsellors
            </h2>
            <p className="text-gray-600 mt-4">
              There are times when you might need more than a friendly chat, and
              that&apos;s okay. We have trained counsellors available for
              one-on-one and group counselling sessions. They&apos;re here to
              offer professional support when you need it.
            </p>
          </div>
        </div>
      </section>

      <section id="about-buddies" className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About Our Buddies
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
                Sunshine Buddies
              </h2>
              <p className="text-gray-600">
                Our Buddies are fellow students from various academic
                backgrounds who volunteer to be your go-to contact for any
                assistance you may need. They are approachable and ready to lend
                an empathetic ear, offering help on social, mental, or academic
                fronts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Roles and Responsibilities
                </h3>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>
                    Point of contact of Fellow Batchmates and resources for
                    Academic, Social and Emotional help.
                  </li>
                  <li>
                    Coordinate Departmental Catch-up sessions across batches.
                    Catch Ups are fun meetings for the whole department
                    organised by the buddies, where a few games are usually
                    played.
                  </li>
                  <li>
                    Helping Sunshine reaches out to peers and conduct
                    departmental group sessions and activities.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Benefits of Being a Buddy
                </h3>
                <ul className="list-disc list-inside text-gray-600 pl-4">
                  <li>
                    Certification for your remarkable work towards Sunshine.
                  </li>
                  <li>Personalized Sessions for your welfare.</li>
                  <li>Networking among your peers.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                The Sunshine Buddy Program in Action
              </h2>
              <p className="text-gray-600">
                In addition to our dedicated team, the Sunshine Buddy Program
                offers a range of services:
              </p>
              <div className="mt-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Fun Meetups and Events
                </h3>
                <p className="text-gray-600">
                  In addition to Buddy Meets, we regularly host a variety of fun
                  and engaging events that provide opportunities to socialize,
                  learn, and have a great time. These events range from themed
                  parties, workshops, and outdoor adventures to movie nights and
                  more. It&apos;s all about fostering a sense of community and
                  joy.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Supportive Meetups
              </h2>
              <p className="text-gray-600">
                Once you&apos;re matched with your Sunshine Buddy, you have the
                freedom to arrange meetups. These Buddy Meets are a cornerstone
                of the program, and they can be tailored to your needs. Whether
                it&apos;s a casual conversation over coffee, assistance with
                academic challenges, a walk in the park, or simply a friendly
                chat over the phone, these meetups are all about building
                strong, supportive relationships.
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
                    Be recognized as the &quot;Mentor of the Month&quot; in the
                    Mentor Spotlight.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                The Sunshine Mentor Program in Action
              </h2>
              <p className="text-gray-600">
                Sunshine mentors are students who help freshers adjust to the
                social, academic, and emotional expectations that come with
                college life. In this program, we have students from all
                departments apply for mentorship roles to make it easier for
                other students to approach and relate to them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mentorship
              </h2>
              <p className="text-gray-600">
                Sunshine mentors are paired with first-year students to provide
                guidance and support you need to adjust and adapt to the
                Institute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
