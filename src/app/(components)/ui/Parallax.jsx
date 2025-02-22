"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Base Layer */}
      <Image
        src="/parallax/1.png"
        alt="1"
        fill
        priority
        className="object-cover"
      />

      {/* Parallax Header Title */}
      {/* <h1
        className="absolute text-white font-bold text-5xl md:text-7xl lg:text-8xl z-10"
        style={{
          transform: `translateY(${scrollY * -0.3}px) scale(${
            1 + scrollY * 0.001
          })`,
          transition: "transform 0.1s ease-out",
        }}
      >
        RHANDIE
      </h1> */}

      {/* Parallax Images */}
      <Image
        src="/parallax/2.png"
        alt="2"
        fill
        className="absolute inset-0 object-cover"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <Image
        src="/parallax/3.png"
        alt="3"
        fill
        className="absolute inset-0 object-cover"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <Image
        src="/parallax/4.png"
        alt="4"
        fill
        className="absolute inset-0 object-cover"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />
      <Image
        src="/parallax/5.png"
        alt="5"
        fill
        className="absolute inset-0 object-cover"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      />
    </div>
  );
};

export default Parallax;
