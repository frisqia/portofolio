'use client';
import React, { useEffect, useState } from "react";
import WebProject from "./webProject";
import AboutMe from "@/app/biodata/page";

export default function MyPortofolio() {
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [firstBlink, setFirstBlink] = useState(true);
  const [secondBlink, setSecondBlink] = useState(false);
  const [activeSection, setActiveSection] = useState("project");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstBlink(false);
      setShowSecondParagraph(true);
      setSecondBlink(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 bg-black text-white min-h-screen">
        <h1 className="text-base md:text-xl lg:text-3xl font-bold">My Portfolio</h1>
        <br />
        <p className="text-base md:text-xl lg:text-2xl text-center max-w-4xl">
          This is my previous project and work. My portfolio covers several areas of programming languages, graphic design, code writing, digital marketing, and many more. It provides examples of work completed for clients and personal projects, offering insight into my skills and work style to help you in your upcoming endeavors.
        </p>
        
        {/* Button Section */}
        <div className="flex justify-end mt-6 space-x-6 w-full max-w-6xl">
          {["project", "profile"].map((section) => (
            <button
              key={section}
              className={`px-4 py-2 text-sm md:text-base lg:text-xl font-semibold rounded-md shadow-md ${
                activeSection === section ? "bg-pink-600 shadow-lg" : "bg-pink-500 hover:bg-pink-600"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Content Section */}
        <div className="p-10 mt-10 bg-gray-100/20 shadow-xl rounded-lg w-full max-w-9xl text-white text-lg md:text-xl lg:text-2xl">
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
