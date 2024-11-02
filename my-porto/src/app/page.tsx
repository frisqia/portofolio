"use client";

import Link from "next/link";
import Form from "./component/form/page";
import WavingHand from "./animation/wavinhand/wavingHand";
import ContactMe from "./component/contact/page";
import MyPortofolio from "./component/project/web-project/page";
import PhotoBox from "./animation/photobox/page";

export default function Home() {
  return (
    <>
      <div className="justify-center items-center">
        <div className="p-10 md:p-15 lg:p-20 bg-black">
          <div className="flex flex-col md:flex-row">
            <div className="grid">
              <div className="flex animate-fadeIn text-base md:text-3xl xl:text-5xl">
                <h1
                  className="text-pink-500"
                  // style={{ textShadow: "2px 2px 5px rgb(255, 204, 255)" }}
                >
                  Hello! I'm Frisqia Fatmalaningsih
                </h1>{" "}
                <WavingHand />
              </div>

              <p className="text-sm md:text-base lg:text-2xl text-white animate-fadeInTwo">
                I'm interested in software engineering, especially in the field
                of Front-end Developer, user interfaces and web application
              </p>

              <ContactMe />

              <div className="flex items-center justify-between">
                <button className="animate-pulseZoom w-[70px] h-[28px] md:w-[85px] md:h-[31px] lg:w-[100px] lg:h-[35px] mt-4 p-2 bg-pink-500 text-xs md:text-sm lg:text-base text-white rounded hover:bg-pink-600">
                  <Link
                    href="https://docs.google.com/document/d/1dUH5zVyeLzPVeaTbayJYYZBNpC0kJJzoLY5Px6m7EMA/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  My CV
                  </Link>
                </button>

                {/* Show PhotoBox only on small screens and larger */}
                <div className="hidden lg:hidden md:flex ml-4">
                  <PhotoBox />
                </div>
              </div>
            </div>

            {/* Hide PhotoBox on small screens */}
            <div className="lg:grid hidden md:hidden">
              <PhotoBox />
            </div>
          </div>
          <div className=" p-4 flex justify-center md:hidden md:block">
            <PhotoBox />
          </div>
        </div>

        <MyPortofolio />

        <Form />
{/* 
        <footer className="bg-black text-white text-center p-5">
          <p>&copy; 2024 Frisqia Fatmalaningsih. All rights reserved.</p>
        </footer> */}
      </div>
    </>
  );
}
