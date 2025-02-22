import React from "react";
import { Timeline } from "../(components)/ui/timeline";
import Image from "next/image";
import Navbar from "../(components)/layout/Navbar";

const About = () => {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            voluptates ab rem porro fuga ipsam dolor eius a? Deserunt ut
            recusandae reprehenderit veritatis saepe dolores modi laborum
            suscipit quibusdam iste.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            voluptates ab rem porro fuga ipsam dolor eius a? Deserunt ut
            recusandae reprehenderit veritatis saepe dolores modi laborum
            suscipit quibusdam iste.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            voluptates ab rem porro fuga ipsam dolor eius a? Deserunt ut
            recusandae reprehenderit veritatis saepe dolores modi laborum
            suscipit quibusdam iste.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <Image
              src="/sample.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="w-full bg-gradient-to-b from-[#536897] via-[#2C4172] via-20% to-[#2C4172] dark:bg-neutral-950 font-sans md:px-10 ">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
};

export default About;
