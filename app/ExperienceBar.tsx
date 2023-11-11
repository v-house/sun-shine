import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const handleEventsClick = () => {
    router.push("/events");
  };
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-extrabold text-center text-gray-900 mb-10 animate-fade-up">
        Sunshine Events
      </h1>
      <div className="gap-2 grid grid-cols-12 grid-rows-2 px-4 mx-auto mb-5">
        <Card className="group col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Regular
            </p>
            <h4 className="text-white font-medium text-large">
              Departmental Meets
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./homepage/8.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/25  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
        </Card>
        <Card className="group col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Special
            </p>
            <h4 className="text-white font-medium text-large">
              Creative Events
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./homepage/9.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/25  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
        </Card>
        <Card className="group col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-tiny text-white/40 uppercase font-bold">
              Necessary
            </p>
            <h4 className="text-white font-medium text-large">
              Counselling Sessions
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="./homepage/10.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/25  opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
        </Card>
        <Card className="group w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-tiny text-white uppercase font-bold">Reveals</p>
            <h4 className="text-white font-medium text-2xl">Untold Stories</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="./homepage/11.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/25 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-blue-800 uppercase font-bold">Fun</p>
            <h4 className="text-black font-medium text-xl">Work Together</h4>
          </CardHeader> */}
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="./homepage/12.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-9 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full h-10"
                src="./logo.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  Every part of the year
                </p>
                <p className="text-tiny text-white/60">So Many Events</p>
              </div>
            </div>
            <Button onClick={handleEventsClick} radius="full" size="sm">
              View Events
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
