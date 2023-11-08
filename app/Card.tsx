"use client";

import { useState } from "react";
import { Tooltip, Button } from "@nextui-org/react";

export default function FeaturesBlocks() {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isCopied3, setIsCopied3] = useState(false);
  const handleCopyToClipboard = (phone: string, indd: number) => {
    navigator.clipboard.writeText(phone);
    if (indd == 1) {
      setIsCopied(true);
    } else if (indd == 2) {
      setIsCopied2(true);
    } else if (indd == 3) {
      setIsCopied3(true);
    }
    setTimeout(() => {
      setIsCopied(false);
      setIsCopied2(false);
      setIsCopied3(false);
    }, 2000);
  };
  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-b from-white to-sky-300 bg-white lg:bg-sky-300 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="text-xl lg:text-4xl font-extrabold text-black mb-4">
              Professional Counsellors
            </h2>
            <p className="text-xl text-gray-600">
              There are times when you might need more than a friendly chat, and
              that&apos;s okay. We have trained counsellors available for
              one-on-one and group counselling sessions. They&apos;re here to
              offer professional support when you need it.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-4xl">
            {/* 1st item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-72 h-80 relative overflow-hidden group">
                <img
                  src="./homepage/mariaMorris.jpg"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
                <div className="absolute top-0 right-2 pt-4 px-2 pb-2 rounded-b-xl bg-sky-500">
                  {isCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <Tooltip showArrow={true} content="Copy">
                      <button
                        onClick={() => handleCopyToClipboard("8331036081", 1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </button>
                    </Tooltip>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    Maria Morris
                  </h4>
                  <p className="text-gray-200 text-sm">
                    maria.morris@admin.iith.ac.in
                  </p>
                  <p className="text-gray-200 text-sm">
                    Office Address: A4 - Aryabhatta block
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-72 h-80 relative overflow-hidden group">
                <img
                  src="https://sunshine.iith.ac.in/images/faculty/IMG_1257%20-%20Yukti%20Rastogi.JPG"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
                <div className="absolute top-0 right-2 pt-4 px-2 pb-2 rounded-b-xl bg-sky-500">
                  {isCopied2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <Tooltip showArrow={true} content="Copy">
                      <button
                        onClick={() => handleCopyToClipboard("8331036080", 2)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </button>
                    </Tooltip>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    Yukti Rastogi
                  </h4>
                  <p className="text-gray-200 text-sm">
                    yukti.rastogi@admin.iith.ac.in
                  </p>
                  <p className="text-gray-200 text-sm">
                    Office Address: 112/a - Acad-Block C
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center bg-white rounded shadow-xl border border-gray-300">
              <div className="w-72 h-80 relative overflow-hidden group">
                <img
                  src="https://sunshine.iith.ac.in/images/faculty/phani.jpeg"
                  alt="Image 2"
                  className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>
                <div className="absolute top-0 right-2 pt-4 px-2 pb-2 rounded-b-xl bg-sky-500">
                  {isCopied3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <Tooltip showArrow={true} content="Copy">
                      <button
                        onClick={() => handleCopyToClipboard("8331036082", 3)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          />
                        </svg>
                      </button>
                    </Tooltip>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-opacity-100 text-center">
                  <h4 className="text-xl font-semibold leading-snug tracking-tight mb-1">
                    D. Phani Bhushan
                  </h4>
                  <p className="text-gray-200 text-sm">
                    phani.bhushan@admin.iith.ac.in
                  </p>
                  <p className="text-gray-200 text-sm">
                    Office Address: G5 - Hostel Block
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
