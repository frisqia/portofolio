import React, { useState, useEffect } from "react";
import Image from "next/image";
import PDCOne from "../web-project/PDC-Recycle.png";
import PokeReact from "../web-project/pokemon.png";
import ApiBank from "../web-project/milestone-3.png";
import Link from "next/link";

export default function WebProject() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const projects = [
    {
      name: "Pokemon Web - Use React Framework",
      img: PokeReact,
      description: [
        "This is the first project to use a react app to display Pokémon data using an API.",
        "Search for Pokémon using private routing before going to the dashboard.",
        "Using Tailwind CSS as the design framework.",
      ],
      githubLink: "https://github.com/frisqia/milestone-2",
      infoLink: "",
      category: "front-end",
    },
    {
      name: "API Bank Transaction",
      img: ApiBank,
      description: [
        "Create a transaction bank API, with a MYSQL database that can carry out transfer transactions between banks and between users.",
      ],
      githubLink: "https://github.com/frisqia/API-Bank-Transaction.git",
      infoLink: "",
      category: "back-end",
    },
    {
      name: "PDC Recycle - E-commerce",
      img: PDCOne,
      description: [
        "My team projects as front-end and is trusted to create user dashboards.",
        "A project focused on recycling and sustainability, featuring various initiatives.",
      ],
      githubLink: "https://github.com/frisqia/PDC-Recycle-E-commerce.git",
      infoLink:
        "https://docs.google.com/presentation/d/1SDYUIc_tX5h5iWNASJA8MH6MWc6OhWnHiRzCg2A1flg/edit#slide=id.p",
      category: "full-stack",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    if (currentIndex >= filteredProjects.length) {
      setCurrentIndex(0);
    }
  }, [selectedCategory, filteredProjects.length]);

  const isValidProject =
    filteredProjects.length > 0 && currentIndex < filteredProjects.length;

  return (
    <div className="p-4">
      <p className="text-3xl md:text-5xl lg:text-7xl font-lilita">Project</p>
      <br />
      <div className="mb-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${
            selectedCategory === "all" ? "pink-300 underline" : "white"
          } transition-all`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("front-end")}
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${
            selectedCategory === "front-end" ? "pink-300 underline" : "white"
          } transition-all`}
        >
          Front-end
        </button>
        <button
          onClick={() => setSelectedCategory("back-end")}
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${
            selectedCategory === "back-end" ? "pink-300 underline" : "white"
          } transition-all`}
        >
          Back-end
        </button>
        <button
          onClick={() => setSelectedCategory("full-stack")}
          className={`text-sm md:text-base lg:text-xl font-semibold text-${
            selectedCategory === "full-stack" ? "pink-300 underline" : "white"
          } transition-all`}
        >
          Full-stack
        </button>
      </div>

      {/* Carousel for Mobile View */}
      <div className="relative block md:hidden flex items-center justify-center">
        {/* Button Prev */}
        {filteredProjects.length > 1 && ( // Check if there are multiple projects
          <>
            <button
              onClick={handlePrev}
              className=" text-white p-1 rounded-full mr-1"
            >
              {"<"}
            </button>
          </>
        )}

        <div className="relative overflow-hidden shadow-md transition-transform duration-500">
          {isValidProject ? (
            <>
              <Image
                src={filteredProjects[currentIndex].img}
                alt={filteredProjects[currentIndex].name}
                className="w-full h-48 object-cover rounded-xl" // Mengubah ukuran gambar
                width={600} // Ukuran tetap sesuai proporsi
                height={300}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center rounded-xl text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-xs">
                  {filteredProjects[currentIndex].name}
                </p>
                <p className="p-2 text-xs">
                  {Array.isArray(filteredProjects[currentIndex].description)
                    ? filteredProjects[currentIndex].description.join(" ")
                    : filteredProjects[currentIndex].description}
                </p>
                <div className="flex justify-center mt-2">
                  {filteredProjects[currentIndex].infoLink && (
                    <Link
                      href={filteredProjects[currentIndex].infoLink}
                      className="text-xs text-pink-500 hover:text-pink-200 mx-1"
                    >
                      Info Detail
                    </Link>
                  )}
                  <Link
                    href={filteredProjects[currentIndex].githubLink}
                    className="text-xs text-pink-500 hover:text-pink-200 mx-1"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <p>No projects available</p>
          )}
        </div>

        {/* Button Next */}
        {filteredProjects.length > 1 && ( // Check if there are multiple projects
          <>
            <button
              onClick={handleNext}
              className=" text-white p-1 rounded-full mr-1"
            >
              {">"}
            </button>
          </>
        )}
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover rounded-xl"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center rounded-xl text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="p-2 text-xs">
                  {Array.isArray(item.description)
                    ? item.description.join(" ")
                    : item.description}
                </p>
                <div className="flex justify-center mt-2">
                  {item.infoLink && (
                    <Link
                      href={item.infoLink}
                      className="text-pink-500 hover:text-pink-200 mx-2"
                    >
                      Info Detail
                    </Link>
                  )}
                  <Link
                    href={item.githubLink}
                    className="text-pink-500 hover:text-pink-200 mx-2"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
