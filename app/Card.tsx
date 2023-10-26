export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-sky-300 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-xl lg:text-4xl font-extrabold text-black mb-4">
              Counsellors Team
            </h2>
            <p className="text-xl text-gray-600">
              Sunshine has an experienced faculties leading the whole club.
              Among them are these three psychological counsellors always
              ready-to-serve sunshine.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
            {/* 1st item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-108 h-108 relative overflow-hidden group">
                <img
                  src="./homepage/mariaMorris.jpg"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    Maria Morris
                  </h4>
                  <p className="text-gray-200 text-sm">
                    maria.morris@admin.iith.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-108 h-108 relative overflow-hidden group">
                <img
                  src="https://sunshine.iith.ac.in/images/faculty/IMG_1257%20-%20Yukti%20Rastogi.JPG"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    Yukti Rastogi
                  </h4>
                  <p className="text-gray-200 text-sm">
                    yukti.rastogi@admin.iith.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-108 h-108 relative overflow-hidden group">
                <img
                  src="https://sunshine.iith.ac.in/images/faculty/phani.jpeg"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    D. Phani Bhushan
                  </h4>
                  <p className="text-gray-200 text-sm">
                    phani.bhushan@admin.iith.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
