import events from "../events";
import Image from "next/image";
import Banner from "./Head";

export default function Page({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-red-500">Event not found</p>
      </div>
    );
  } else {
    return (
      <div className="bg-white rounded-lg shadow-md">
        <Banner
          date={event.date}
          title={event.title}
          source={event.images[1]}
        />
        <div className="p-2 lg:p-6">
          <p className="text-gray-800">{event.description}</p>
          <hr className="my-6 border-t-2 border-gray-300 dark:border-gray-700" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {event.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Event ${event.slug} Image ${imgIndex + 1}`}
                  layout="responsive"
                  objectFit="cover"
                  width={400}
                  height={250}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
