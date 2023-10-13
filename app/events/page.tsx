"use client";
import EventsPage from "./EventsPage";

import events from "./events";

const MAX_DISPLAY = 5;

function YourPage() {
  return (
    <div className="bg-white rounded-lg m-1">
      <div className="text-center pt-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Sunshine Events
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
      </div>
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
