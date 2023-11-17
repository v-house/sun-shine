"use client";
import events from "./events";

function InfiniteScroll() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_56px,_black_calc(100%-56px),transparent_100%)]">
      <ul className=" animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {events.map((entry, index) => {
          return (
            <li key={entry.slug}>
              <img
                src={entry.images[1]}
                alt={entry.title}
                className="rounded-lg aspect-video md:max-h-80 md:max-w-96 object-cover border-4 border-sky-100 shadow-md"
              />
            </li>
          );
        })}
      </ul>
      <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {events.map((entry, index) => {
          return (
            <li key={entry.slug}>
              <img
                src={entry.images[1]}
                alt={entry.title}
                className="rounded-lg h-80 w-96 md:max-h-80 md:max-w-96  object-cover border-4 border-sky-100 shadow-md"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfiniteScroll;
