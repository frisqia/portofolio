"use client";

import Link from "next/link";
import Form from "./component/form/page";
import WavingHand from "./animation/wavinhand/wavingHand";
import ContactMe from "./component/contact/page";
import MyPortofolio from "./component/project/web-project/page";
import SplashScreen from "./animation/splashScreen/page";
import { useState } from "react";
import SplineViewer from "./animation/splineViewer";


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  return (
    <>
      <div className="bg-black">
        <div className="justify-center items-center">
          <div className="p-10 md:p-15 lg:p-20 ">
            <div className="flex flex-col md:flex-row">
              <div className="grid">
                <div className="flex animate-fadeIn text-base md:text-3xl xl:text-5xl">
                  <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                    Hello! I'm Frisqia Fatmalaningsih
                  </h1>
                  <WavingHand />
                </div>
                <div className="text-xs md:text-sm lg:text-base text-gray-200/80 flex">
                  <p>frontend-developer | </p>
                  <Link href="mailto:frifani123@gmail.com">
                    | frifani123@gmail.com |
                  </Link>
                  <Link href="https://wa.me/6285713290699">
                    {" "}
                    | 085713290699
                  </Link>
                </div>
                <p className="text-sm md:text-base lg:text-2xl text-white animate-fadeInTwo">
                  I'm interested in software engineering, especially in the
                  field of Front-end Developer, user interfaces and web
                  application
                </p>
                <ContactMe />
                <div className="flex items-center justify-between">
                  <button
                    className="animate-pulseZoom w-[70px] h-[28px] md:w-[85px] md:h-[31px] lg:w-[100px] lg:h-[35px] mt-4 p-2 
                bg-gradient-to-r bg-linear-65 from-pink-500 to-purple-400 text-xs md:text-sm lg:text-base text-white rounded"
                  >
                    <Link
                      href="https://docs.google.com/document/d/1dUH5zVyeLzPVeaTbayJYYZBNpC0kJJzoLY5Px6m7EMA/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My CV
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SplineViewer />
          <div className="px-10 md:p-15 lg:p-20 ">
          <p className=" mt-3 text-white text-xs md:text-xl lg:text-2xl">
            This is my previous project and work. My portfolio covers several
            areas of programming languages, graphic design, code writing,
            digital marketing, and many more. It provides examples of work
            completed for clients and personal projects, offering insight into
            my skills and work style to help you in your upcoming endeavors.
          </p>
          
          <MyPortofolio />
          </div>
          

          <Form />
          <footer className="bg-black text-white text-center p-5">
            <p>&copy; 2024 FRISQIA FATMALANINGSIH. All RIGHTS RESERVED.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
