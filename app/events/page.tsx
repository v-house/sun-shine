"use client";
import EventsPage from "./EventsPage";

import events from "./events";

const MAX_DISPLAY = 5;

function YourPage() {
  return (
    <div>
      <EventsPage posts={events} maxDisplay={MAX_DISPLAY} />
    </div>
  );
}

export default YourPage;
