import { useRouter } from "next/navigation";
import { FC } from "react";

interface Event {
  slug: string;
  date: string;
  title: string;
  summary: string;
  images: string[];
}

interface EventsPageProps {
  posts: Event[];
}

const EventsPage: FC<EventsPageProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-1 lg:px-5 py-4 lg:py-16 mx-auto flex flex-wrap">
        {posts.map((post, index) => (
          <div
            className="relative lg:pb-8 sm:items-center md:w-2/3 mx-auto"
            key={post.slug}
          >
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 h-6 rounded-full mt-10 p-4 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
              {post.date}
            </div>
            <div className="flex-grow md:pl-4 pl-2 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 sm:mt-0">
                <div className="p-4">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="w-full aspect-video object-cover object-center"
                      src={post.images[0]}
                      alt={post.title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {post.date}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{post.summary}</p>
                      <div className="flex items-center flex-wrap">
                        <a
                          className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                          onClick={() => router.push(`/events/${post.slug}`)}
                        >
                          View Gallery &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
