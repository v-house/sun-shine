import React from "react";

export default function Banner(props: { date: any; title: any; source: any }) {
  return (
    <div className="relative">
      <div
        className="w-full h-96 sm:h-80 md:h-96 lg:h-96 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full opacity-50 bg-black"
        ></span>
      </div>
      <main className="profile-page text-black relative z-1">
        <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 bg-blueGray-200 relative z-1">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-sky-200 w-full mb-6 shadow-xl rounded-lg -mt-36 sm:-mt-48 md:-mt-36 lg:-mt-48">
              <div className="px-6 m-8 md:m-16">
                <div className="text-center">
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-normal text-blueGray-400 font-bold">
                    {props.date}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight m-2 text-blueGray-700">
                    {props.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
