"use client";
import React, { useState } from "react";
import WebProject from "./webProject";
import AboutMe from "@/app/biodata/page";

export default function MyPortofolio() {
  const [activeSection, setActiveSection] = useState("project");

  return (
    <>
      <div className="flex flex-col mt-8  px-10 md:p-15 lg:p-20 md:p-5 lg:p-6 bg-gray-200/15 rounded-lg text-white">
        {/* Button Section */}
        <div className="flex justify-start space-x-6 w-full max-w-6xl">
          {["project", "profile"].map((section) => (
            <button
              key={section}
              className={`px-4 py-2 text-sm md:text-base lg:text-xl font-semibold rounded-md shadow-md transition-all 
        ${
          activeSection === section
            ? "bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg hover:from-purple-500 hover:to-pink-500"
            : "bg-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
        }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="p-10 mt-10 shadow-xl rounded-lg w-full max-w-9xl text-white text-lg md:text-xl lg:text-2xl">
          {/* Conditional Rendering of Sections */}
          {activeSection === "project" && (
            <section id="project">
              <WebProject />
            </section>
          )}

          {activeSection === "profile" && (
            <section id="profile">
              <AboutMe />
            </section>
          )}
        </div>
      </div>
    </>
  );
}
