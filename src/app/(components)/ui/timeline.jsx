"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import RecentProjectCard from "./RecentProject";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {/* May margin sa ilalim */}

        <h2 className="text-lg md:text-4xl mt-24 mb-4 text-white dark:text-black max-w-4xl">
          Academic Background
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          {/* I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey. */}
        </p>
      </div>
      {/* Buong Container */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 "
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full ">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center ">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 " />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white dark:text-neutral-500  ">
                {item.title}
              </h3>
            </div>
            {/*  */}
            <div className="ml-12 mx-auto">
              <div className="relative w-10/12 py-5 px-16 md:pl-4 lg:py-7 lg:px-5 m-auto bg-btn/10 hover:bg-[#445e9b] transition-colors rounded shadow-lg  backdrop-blur-sm ">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute max-h-full md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]  "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute max-h-full inset-x-0 top-0 w-[2px] 
            bg-gradient-to-t from-[#8FA6D4] via-[#6B85B8] to-transparent 
            from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
