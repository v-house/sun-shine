import React from "react";

const FeatureCard = () => (
  <div className="relative overflow-hidden bg-gradient-to-b from-sky-300 to-white pt-16 pb-32 space-y-24">
    {/* Feature 1: Image on the left, text on the right */}
    <div className="relative">
      <div className="container mx-auto px-4 py-16 lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="max-w-lg mx-auto lg:max-w-none lg:py-16 lg:px-0">
          <div className="text-center lg:text-left">
            <div className="mb-6 lg:mb-8">
              <img
                src="./homepage/buddies.png"
                alt="Sunshine Buddies"
                className="w-48 mx-auto lg:mx-0"
              />
            </div>
            <h2 className="text-3xl font-bold text-black">Sunshine Buddies</h2>
            <p className="mt-4 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores officia dolore earum nihil laudantium repellendus velit
              sint quisquam, placeat laborum voluptatibus maiores quos obcaecati
              atque minima nostrum? Rerum, officia cumque.
            </p>
            <div className="mt-6">
              <a
                className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-blue-700"
                href="/buddies"
              >
                Our Buddies
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              style={{ color: "transparent" }}
              src="./homepage/6.jpg"
              alt="NLP Image"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: Image on the right, text on the left */}
    <div className="relative">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
          <div className="text-center lg:text-left">
            <div>
              <div className="mb-6 lg:mb-8">
                <img
                  src="./homepage/mentors.png"
                  alt="Sunshine Buddies"
                  className="w-48 mx-auto lg:mx-0"
                />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-black">
                Sunshine Mentors
              </h2>
              <p className="mt-4 text-lg text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium porro dolorum praesentium provident id ab dolore, non
                vitae ea, modi alias necessitatibus aliquid sapiente! Incidunt
                distinctio officia eveniet quia veniam!
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  href="/mentors"
                >
                  Our Mentors
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              alt="Inbox user interface"
              loading="lazy"
              width="647"
              height="486"
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              style={{ color: "transparent" }}
              src="./homepage/7.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeatureCard;
