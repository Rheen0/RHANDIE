"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RecentProjectCard = () => {
  const [recentProject, setRecentProject] = useState(null);

  useEffect(() => {
    // Fetch data.json from public folder
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        const projects = await response.json();
        setRecentProject(projects[0]); // Get the first project
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  if (!recentProject) return <p>Loading...</p>;

  return (
    <>
      <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-black max-w-4xl">
        Recent Projects
      </h2>
      <div className=" py-5 px-16 md:pl-4 lg:py-7 lg:px-5 m-auto bg-btn/10 hover:bg-[#445e9b] transition-colors rounded shadow-lg my-5  backdrop-blur-sm">
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
          <Image
            src={recentProject.thumbnail}
            alt={recentProject.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-neutral-200 dark:text-white">
            {recentProject.title}
          </h3>
          <p className="text-neutral-200 dark:text-gray-300 text-sm mt-2">
            {recentProject.description}
          </p>
        </div>
      </div>
      <Link href="/projects">
        <button className="mt-4  bg-btn/10 hover:bg-[#445e9b] text-neutral-200 px-4 py-2 rounded-lg shadow-lg  backdrop-blur-sm transition">
          Show More
        </button>
      </Link>
    </>
  );
};

export default RecentProjectCard;
