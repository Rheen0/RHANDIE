"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    // Fetch the JSON file (simulate API call)
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  // Toggle selected tags
  const handleTagClick = (tag) => {
    let updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(updatedTags);

    // Filter projects based on selected tags
    if (updatedTags.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.tags.some((t) => updatedTags.includes(t))
        )
      );
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Filter Card */}
      <div className="bg-gray-800/10 text-white p-4 rounded-lg shadow-md mb-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-2">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 text-sm rounded ${
                selectedTags.includes(tag)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Project Display Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-btn/10 hover:bg-[#445e9b] rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-neutral-200 text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-neutral-200 text-sm">{project.description}</p>
              <div className="flex flex-wrap mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
