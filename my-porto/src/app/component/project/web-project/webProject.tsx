"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PDCOne from "../web-project/PDC-Recycle.png";
import PokeReact from "../web-project/pokemon.png";
import ApiBank from "../web-project/milestone-3.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function WebProject() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Cek saat pertama kali render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="p-4">
      {/* Filter Buttons */}
      <div className="mb-4">
        {["all", "front-end", "back-end", "full-stack"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm md:text-base lg:text-xl font-semibold mr-2 ${
              selectedCategory === category ? "text-pink-300 underline" : "text-white"
            } transition-all`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* **Mode Geser di HP, Grid di Laptop** */}
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Menampilkan 1.2 slide agar terlihat swipe
          centeredSlides={true}
          loop={true} // Bisa geser terus tanpa batas
          className="w-full"
        >
          {filteredProjects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-full h-72 object-cover transition-all duration-300 grayscale group-hover:grayscale-0 
                         rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
                  width={400}
                  height={400}
                />
                {/* Project Details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-3 rounded-b-xl mt-2">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-xs">
                    {Array.isArray(item.description)
                      ? item.description.join(" ")
                      : item.description}
                  </p>
                  <div className="flex justify-start mt-2 space-x-2">
                    {item.infoLink && (
                      <Link href={item.infoLink} className="text-pink-500 hover:text-pink-200">
                        Info Detail
                      </Link>
                    )}
                    <Link href={item.githubLink} className="text-pink-500 hover:text-pink-200">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <div key={index} className="relative group">
              {/* Image */}
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover transition-all duration-300 grayscale group-hover:grayscale-0 
                         rounded-xl group-hover:rounded-t-xl group-hover:rounded-b-none"
                width={400}
                height={400}
              />
              {/* Project Details */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-3 rounded-b-xl mt-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-xs">
                  {Array.isArray(item.description)
                    ? item.description.join(" ")
                    : item.description}
                </p>
                <div className="flex justify-start mt-2 space-x-2">
                  {item.infoLink && (
                    <Link href={item.infoLink} className="text-pink-500 hover:text-pink-200">
                      Info Detail
                    </Link>
                  )}
                  <Link href={item.githubLink} className="text-pink-500 hover:text-pink-200">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
