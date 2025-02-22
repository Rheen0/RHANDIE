import Image from "next/image";
import React, { forwardRef } from "react";
import { Timeline } from "../ui/timeline";
import AboutCard from "../ui/AboutCard";
import RecentProjectCard from "../ui/RecentProject";

const AboutSection = forwardRef((props, ref) => {
  return (
    // Kapag nagloko ilagay yung classname sa section
    <section ref={ref}>
      <div className="min-h-screen max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <AboutCard />
        <RecentProjectCard />
      </div>
    </section>
  );
});

export default AboutSection;
