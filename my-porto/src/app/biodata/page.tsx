"use client";
import React, { useState } from "react";
import AboutMeContent from "./aboutme";
import Education from "./education";
import MySkill from "./skill";
import MyExperience from "./experience";

export default function AboutMe() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("aboutme");

  return (
    <>
      {/* <h1 className="text-3xl md:text-5xl lg:text-7xl font-lilita p-4">Profile</h1> */}
      
      <div className="flex flex-col items-center">
      {/* Navigation Tabs */}
    
      <div className="flex justify-center items-center space-x-6 text-white  rounded-lg p-1 w-full max-w-lg">
        {["aboutme", "education", "experience", "skill"].map((section) => (
          <button
            key={section}
            className={`px-2 py-2 text-xs md:text-base lg:text-xl font-semibold ${
              activeSection === section ? "text-white border-b-2 border-white" : "text-pink-300"
            } hover:text-white hover:border-b-2 hover:border-white transition-colors`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Container for the content */}
      {/* <div className="p-10 mt-6 shadow-pink-200 rounded-lg shadow-md w-full max-w-6xl"> */}
        {/* Conditional Rendering of Sections */}
        {activeSection === "aboutme" && (
          <section id="aboutme">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-lilita">About Me</h1>
            <AboutMeContent />
          </section>
        )}

        {activeSection === "education" && (
          <section id="education">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-lilita">Education</h1>
            <Education />
          </section>
        )}

        {activeSection === "experience" && (
          <section id="experience">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-lilita">Experience</h2>
            <MyExperience />
          </section>
        )}

        {activeSection === "skill" && (
          <section id="skill">
            <h2 className="  flex justify-center p-2 text-3xl md:text-5xl lg:text-7xl font-lilita">Skills</h2>
            <MySkill />
          </section>
        )}
      {/* </div> */}
    </div></>
   
  );
}
