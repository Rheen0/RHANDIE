import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const AboutCard = () => {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("web"); // Default category

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await fetch("/data/about.json");
        const info = await response.json();
        setAboutInfo(info);
      } catch (error) {
        console.error("Error fetching about info:", error);
      }
    };

    fetchAboutInfo();
  }, []);

  if (!aboutInfo) return <p className="text-white">Loading...</p>;

  return (
    <div className="mb-28 text-white">
      {/* Name */}
      <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-black max-w-4xl">
        About Me
      </h2>

      {/* Profile Picture & Bio */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-5 mb-4 bg-btn/10 hover:bg-[#445e9b] transition-colors rounded shadow-lg backdrop-blur-sm">
        <Image
          src={aboutInfo.profilePicture}
          alt={aboutInfo.name}
          width={120}
          height={120}
          className="rounded-full border-2 border-white"
        />

        <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal px-5 text-justify">
          {aboutInfo.bio}
        </p>
      </div>

      {/* Tech Stack Display */}
      <div className="bg-btn/10 hover:bg-[#445e9b] transition-colors rounded shadow-lg backdrop-blur-sm p-5 my-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {aboutInfo.techStack[selectedCategory]?.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={tech.image} alt={tech.alt} width={50} height={50} />
              <p className="text-xs mt-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Category Buttons */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {Object.keys(aboutInfo.techStack).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-lg transition ${
                selectedCategory === category
                  ? "bg-[#445e9b] text-white"
                  : "bg-btn/10 hover:bg-[#445e9b]"
              }`}
            >
              {category.replace(/([A-Z])/g, " $1")}{" "}
              {/* Format category names */}
            </button>
          ))}
        </div>

        {/* Show More Button (Right-Aligned) */}
        <Link href="/about">
          <button className="px-4 py-2 rounded-lg bg-btn/10 hover:bg-[#445e9b] shadow-lg backdrop-blur-sm transition">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
