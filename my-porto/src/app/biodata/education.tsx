import React from "react";
import school from "../biodata/sma.jpg"
import revoU from "../biodata/revoU.jpg"
import Image from "next/image";


export default function Education() {
  return (
    <>
      <div className="px-2 md:px-6 lg:px-10">
      <h1 className="text-base md:text-xl lg:text-2xl font-bold font-poppins">Education</h1>
      <div className="flex flex-wrap gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-5">
              <Image
                src={revoU}
                alt="revoU"
                className="w-[50px] h-[50px] rounded-full"
              ></Image>
              <p className="text-sm md:text-lg lg:text-xl font-bold">RevoU Indonesia</p>
            </div>
            <p className="text-right text-sm md:text-lg lg:text-xl">January, 2024 – August 2024</p>
          </div>
          <div className="grid px-20 text-xs md:text-sm lg:text-base">
            <p>
              <i>
                <u>Fullstack Software Engineering</u>
              </i>
            </p>
            <ul className="list-disc pl-5 ">
              <li>
                Proficient in JavaScript, TypeScript, React, Node.js, Python,
                and Flask.
              </li>
              <li>
                Collaborated on the development of an E-commerce platform
                project with a team of three.
              </li>
              <li>
                Gained experience in front-end, back-end development, and
                database management.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-5">
              <Image
                src={school}
                alt="school"
                className="w-[50px] h-[50px] rounded-full"
              ></Image>
              <p className="text-sm md:text-lg lg:text-xl font-bold">SMA Bina Pendidikan</p>
            </div>

            <p className="text-right text-sm md:text-lg lg:text-xl">April, 2015 – July 2017</p>
          </div>

          <p className="px-20 text-xs md:text-sm lg:text-base">
            <i>
              <u>Major : Ilmu pengetahuan ALam (Biologi)</u>
            </i>
          </p>
        </div>
      </div>
    </>
  );
}
