"use client";

import React, { useState } from "react";
import events from "../events";
import Banner from "./Head";
import Photos from "./Photos";

const GalleryPage = ({ params }: { params: { slug: string } }) => {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-500">Event not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <Banner date={event.date} title={event.title} />

      <div className="container mx-auto p-3 md:p-6 relative">
        <p className="text-black">{event.summary}</p>
        <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
        <Photos event={event} />
      </div>
    </div>
  );
};

export default GalleryPage;
