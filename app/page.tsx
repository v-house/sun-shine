"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";

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
          // Your actual homepage content goes here
          <div className="min-h-screen flex flex-col justify-center items-center bg-white">
            {/* Your homepage content */}
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              Welcome to Sunshine!
            </h1>
            <p className="text-xl text-gray-600">HOMEPAGE</p>
          </div>
        )}
      </div>
    </>
  );
}
