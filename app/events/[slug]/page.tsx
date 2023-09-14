import events from "../events";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);
  if (!event) {
    return (
      <>
        <div>Event not found</div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-white rounded-lg shadow-md p-4 m-2">
          <div className="flex flex-col lg:flex-row justify-between mb-2 py-4">
            <h2 className="text-2xl text-slate-800 font-semibold mb-2 lg:mb-0">
              {event.title}
            </h2>
            <p className="text-gray-600 lg:self-end">{event.date}</p>
          </div>
          <p className="text-neutral-800">{event.description}</p>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 mt-4">
            {event.images.map((image, imgIndex) => (
              <div className="w-full p-2">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Event ${event.slug} Image ${imgIndex + 1}`}
                    layout="responsive"
                    objectFit="cover"
                    width={60}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
