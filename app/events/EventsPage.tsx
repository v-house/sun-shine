"use client";

import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface Event {
  slug: string;
  date: string;
  title: string;
  summary: string;
}

interface EventsPageProps {
  posts: Event[];
  maxDisplay: number;
}

const EventsPage: FC<EventsPageProps> = ({ posts, maxDisplay }) => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 p-6">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          quibusdam sunt harum nobis libero placeat temporibus obcaecati vel
          accusamus error nisi repudiandae aspernatur, voluptatem, sed totam.
          Voluptatem error ducimus repellat facilis provident quo eligendi velit
          dolorem. Velit quas, dignissimos perferendis neque in culpa harum
          molestias perspiciatis exercitationem temporibus libero ut
          consequatur, autem ex ea ullam ipsam debitis architecto placeat
          nesciunt porro amet dolorum facilis. Sequi, ipsum.
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && "No past events"}
        {(showAll ? posts : posts.slice(0, maxDisplay)).map((post) => {
          const { slug, date, title, summary } = post;
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Happened on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <a
                            href="#"
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </a>
                        </h2>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <button
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        onClick={() => router.push(`/events/${slug}`)}
                      >
                        View Gallery &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="bg-primary-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-600 border border-spacing-1 mt-4"
          >
            View Past Events
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
