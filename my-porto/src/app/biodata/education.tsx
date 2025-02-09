"use client"
import React from "react";
import school from "../biodata/sma.jpg";
import revoU from "../biodata/revoU.jpg";
import Image from "next/image";

export default function Education() {
  const educations = [
    {
      image: revoU,
      school: "RevoU Indonesia",
      major: "Fullstack Software Engineering",
      date: "January, 2024 – August 2024",
      description: [
        "Proficient in JavaScript, TypeScript, React, Node.js, Python, and Flask.",
        "Collaborated on the development of an E-commerce platform project with a team of three.",
        "Gained experience in front-end, back-end development, and database management.",
      ],
    },
    {
      image: school,
      school: "SMA Bina Pendidikan",
      date: "April, 2015 – July 2017",
      major: "Ilmu Pengetahuan Alam (Biologi)",
      description: [],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center py-20 gap-5">
      {educations.map((edu) => (
        <div key={edu.school} className="group w-96 h-96 [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Sisi Depan */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-400 text-white rounded-xl p-5">
              <Image
                src={edu.image}
                alt={edu.school}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h2 className="text-lg font-bold mt-2">{edu.school}</h2>
              <p className="text-sm">{edu.date}</p>
            </div>

            {/* Sisi Belakang */}
            <div className="absolute inset-0 flex flex-col bg-pink-400 text-black p-5 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3 className="text-lg font-semibold">{edu.major}</h3>
              {edu.description.length > 0 ? (
                <ul className="text-sm md:text-base lg:text-lg mt-2">
                  {edu.description.map((desc, i) => (
                    <li key={i} className="mt-1">• {desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm italic mt-2">No additional details.</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
