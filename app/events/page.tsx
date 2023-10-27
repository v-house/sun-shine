"use client";
import EventsPage from "./EventsPage";

import events from "./events";
import InfiniteScroll from "./infiniteScroll";
const MAX_DISPLAY = 5;

function YourPage() {
  return (
    <div className="bg-sky-100 rounded-lg m-1">
      <div className="text-center pt-8">
        <h1 className="text-6xl font-semibold text-gray-900 mb-4">
          Sunshine Events
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
      </div>
      <InfiniteScroll/>
      <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
      <p className="text-2xl font-medium text-gray-700 mt-4 text-center pb-8 pt-8 animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
          Scroll down to find the Amazing Events we held!!
        </p>
      <EventsPage posts={events} />
      <div className="text-center pb-8">
        <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        <p className="text-2xl font-medium text-gray-700 mt-4">
          Many more events coming up!!
        </p>
      </div>
    </div>
  );
}

export default YourPage;
