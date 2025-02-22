"use client";

import { useInView } from "react-intersection-observer";
import AboutSection from "./(components)/sections/AboutSection";
import Hero from "./(components)/sections/Hero";
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from "./(components)/layout/Navbar";

const Home = () => {
  const lenis = useLenis(({ scroll }) => {}); // Smooth scrolling

  // Track if AboutSection is visible
  const { ref: aboutRef, inView: isAboutVisible } = useInView({
    threshold: 0.55, // Fires when 20% of AboutSection is visible
    triggerOnce: false, // Ensures it toggles when scrolling back up
  });

  console.log("Is About Section in View:", isAboutVisible); // Debugging

  return (
    <ReactLenis root>
      {/* Debugging: Add bg color */}
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          isAboutVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      <div className="relative">
        <Hero />
        <div className="w-full bg-gradient-to-b from-[#536897] via-[#2C4172] via-20% to-[#2C4172] dark:bg-neutral-950 font-sans md:px-10 ">
          <AboutSection ref={aboutRef} />
        </div>

        {/* Pass ref directly to AboutSection */}
      </div>
    </ReactLenis>
  );
};

export default Home;
