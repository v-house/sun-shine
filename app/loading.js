"use client";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <h1 className="text-4xl font-bold text-indigo-600">Sunshine</h1>
      <h2 className="text-sm text-gray-600 mb-4">
        The Counseling Cell of IITH
      </h2>
      <div className="w-64 h-3 bg-gray-200 rounded-full">
        <div
          className="h-3 bg-indigo-600 rounded-full"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      <div className="text-xs text-blue-500 mt-8">
        Serving since January, 2012
      </div>
    </div>
  );
};

export default Loading;
