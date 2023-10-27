import { useState } from "react";

export default function Photos(props: { event: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === props.event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex: number) =>
      prevIndex === 0 ? props.event.images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = props.event.images[currentImageIndex];
  return (
    <div className="mx-auto max-w-4xl h-4xl">
      <div className="bg-blue-900 p-4 rounded-lg text-white">
        <img
          className="mx-auto h-96 object-contain md:object-cover"
          src={currentImage}
          alt="Image"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="text-blue-500 text-4xl hover-text-blue-900 focus-outline-none border border-blue-500 rounded-full p-4 shadow-md"
          onClick={handlePrev}
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
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
        <button
          className="text-blue-500 text-4xl hover-text-blue-900 focus-outline-none border border-blue-500 rounded-full p-4 shadow-md"
          onClick={handleNext}
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
