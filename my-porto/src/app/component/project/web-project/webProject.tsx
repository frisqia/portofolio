import React, { useState } from "react";
import Image from "next/image";
import PDCOne from "../web-project/PDC-Recycle.png";
import PokeReact from "../web-project/pokemon.png";
import ApiBank from "../web-project/milestone-3.png";
import Link from "next/link";

export default function WebProject() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      name: "Pokemon Web - Use React Framework",
      img: PokeReact,
      description: [
        "This is the first project to use a react app to display Pokémon data using an API.",
        "Search for Pokémon using private routing before going to the dashboard.",
        "Using Tailwind CSS as the design framework."
      ],
      githubLink: "https://github.com/frisqia/milestone-2",
      infoLink: "",
      category: "front-end"
    },
    {
      name: "API Bank Transaction",
      img: ApiBank,
      description: [
        "Create a transaction bank API, with a MYSQL database that can carry out transfer transactions between banks and between users."
      ],
      githubLink: "https://github.com/frisqia/API-Bank-Transaction.git",
      infoLink: "",
      category: "back-end"
    },
    {
      name: "PDC Recycle - E-commerce",
      img: PDCOne,
      description: [
        "My team projects as front-end and is trusted to create user dashboards.",
        "A project focused on recycling and sustainability, featuring various initiatives."
      ],
      githubLink: "https://github.com/frisqia/PDC-Recycle-E-commerce.git",
      infoLink: "https://docs.google.com/presentation/d/1SDYUIc_tX5h5iWNASJA8MH6MWc6OhWnHiRzCg2A1flg/edit#slide=id.p",
      category: "full-stack"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="p-4">
      <p className="text-3xl md:text-5xl lg:text-7xl font-lilita">Project</p>
      <br />
      <div className="mb-4">
        <button 
          onClick={() => setSelectedCategory("all")} 
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${selectedCategory === "all" ? 'white underline' : 'pink-300'} transition-all`}
        >
          All
        </button>
        <button 
          onClick={() => setSelectedCategory("front-end")} 
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${selectedCategory === "front-end" ? 'white underline' : 'pink-300'} transition-all`}
        >
          Front-end
        </button>
        <button 
          onClick={() => setSelectedCategory("back-end")} 
          className={`text-sm md:text-base lg:text-xl font-semibold mr-2 text-${selectedCategory === "back-end" ? 'white underline' : 'pink-300'} transition-all`}
        >
          Back-end
        </button>
        <button 
          onClick={() => setSelectedCategory("full-stack")} 
          className={`text-sm md:text-base lg:text-xl font-semibold text-${selectedCategory === "full-stack" ? 'white underline' : 'pink-300'} transition-all`}
        >
          Full-stack
        </button>
      </div>
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
              <p className="p-2">
                {Array.isArray(item.description)
                  ? item.description.join(" ")
                  : item.description}
              </p>
              <div className="flex justify-center mt-2">
                <Link href={item.infoLink} className="text-pink-500 hover:text-pink-200 mx-2">
                  Info Detail
                </Link>
                <Link href={item.githubLink} className="text-pink-500 hover:text-pink-200 mx-2">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
