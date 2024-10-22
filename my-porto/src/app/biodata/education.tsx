import React from "react";
import school from "../biodata/sma.jpg"
import revoU from "../biodata/revoU.jpg"
import Image from "next/image";


export default function Education() {
  return (
    <>
      <div className="py-4 px-2 md:px-6 lg:px-10">
  
      <div className="flex flex-wrap gap-5">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-5">
              <Image
                src={revoU}
                alt="revoU"
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
              ></Image>
              <p className="text-xs md:text-xl lg:text-2xl font-bold">RevoU Indonesia</p>
            </div>
            <p className="text-right text-sm md:text-xl lg:text-2xl  ">January, 2024 – August 2024</p>
          </div>
          <div className="grid px-5 text-xs md:text-lg lg:text-xl">
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
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full"
              ></Image>
              <p className="text-sm md:text-xl lg:text-2xl  font-bold">SMA Bina Pendidikan</p>
            </div>

            <p className="text-right text-sm md:text-xl lg:text-2xl ">April, 2015 – July 2017</p>
          </div>

          <p className="px-5 text-xs md:text-sm lg:text-base">
            <i>
              <u>Major : Ilmu pengetahuan ALam (Biologi)</u>
            </i>
          </p>
        </div>
      </div>
    </>
  );
}
