"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import profileImage from "../asset/cia.jpg";
import profileImageOne from "../asset/cia1.jpg";
import profileImageTwo from "../asset/cia2.jpg";
import profileImageThree from "../asset/cia3.jpg";
import profileImageFour from "../asset/cia4.jpg";

import Link from "next/link";

import Form from "./component/form/page";
import WavingHand from "./component/wavinhand/wavingHand";
import ContactMe from "./component/contact/page";
import MyPortofolio from "./component/project/web-project/page";

interface ImageType {
  src: StaticImageData;
  alt: string;
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [lastClicked, setLastClicked] = useState<Date | null>(null);

  const images: ImageType[] = [
    { src: profileImage, alt: "Profile Image 1" },
    { src: profileImageOne, alt: "Profile Image 2" },
    { src: profileImageTwo, alt: "Profile Image 3" },
    { src: profileImageThree, alt: "Profile Image 4" },
    { src: profileImageFour, alt: "Profile Image 5" },
  ];

  useEffect(() => {
    const handleAnimation = () => {
      if (isAnimating) {
        const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    };

    handleAnimation();
  }, [isAnimating, images.length]);

  const handleImageClick = (index: number) => {
    setIsAnimating(false);
    setCurrentImage(index);
    setLastClicked(new Date());
  };

  useEffect(() => {
    const checkForAutoResume = () => {
      if (lastClicked) {
        const now = new Date();
        const timeDiff = now.getTime() - lastClicked.getTime();

        if (timeDiff > 30000) {
          setIsAnimating(true);
          setLastClicked(null);
        }
      }
    };

    const interval = setInterval(checkForAutoResume, 1000);
    return () => clearInterval(interval);
  }, [lastClicked]);

  return (
    <>
      <div className="justify-center items-center">
        <div className="p-10 md:p-15 lg:p-20 bg-black">
          <div className="flex">
            <div className="grid">
              <div className="flex animate-fadeIn text-xl md:text-3xl xl:text-5xl">
                <h1
                  className=" text-pink-500 "
                  style={{ textShadow: "2px 2px 4px rgba(255, 20, 147, 0.5)" }}
                >
                  Hello! I'm Frisqia Fatmalaningsih
                </h1>{" "}
                <WavingHand />
              </div>

              <p className="text-sm md:text-base lg:text-2xl text-white animate-fadeInTwo">
                I'm interested in software
                engineering, especially in the field of Front-end Developer,
                user interfaces and web application
              </p>
              <ContactMe/>
              
                <button className="animate-pulseZoom w-[70px] h-[28px] md:w-[85px] md:h-[31px] lg:w-[100px] lg:h-[35px] mt-4 p-2 bg-pink-500 text-xs md:text-sm lg:text-base  text-white rounded hover:bg-pink-600 ">
                <Link
                href="https://docs.google.com/document/d/1dUH5zVyeLzPVeaTbayJYYZBNpC0kJJzoLY5Px6m7EMA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              > Check My 
              </Link>
                </button>
              
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 animate-fadeIn filter grayscale saturate-150"
                  onClick={() => handleImageClick(currentImage)}
                />
              </div>
            </div>
          </div>
        </div>
        <MyPortofolio />
       
        
        <Form />
        <footer className="bg-black text-white text-center p-5">
          <p>&copy; 2024 Frisqia Fatmalaningsih. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
