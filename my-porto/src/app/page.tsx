'use client'
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import profileImage from "../asset/cia.jpg";
import profileImageOne from "../asset/cia1.jpg";
import profileImageTwo from "../asset/cia2.jpg";
import profileImageThree from "../asset/cia3.jpg";
import profileImageFour from "../asset/cia4.jpg";


import Link from "next/link";
import Head from "next/head";

import AbaoutMe from "./biodata/page";
import MyPortofolio from "./project/web-project/page";
import Form from "./form/page";


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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/devicon@2.14.0/devicon.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="p-20 bg-black">
        <h1 className="text-2xl md:text-4xl xl:text-5xl text-red-700 animate-fadeIn">Hello! I'm Frisqia Fatmalaningsih</h1>
        <p className="text-sm md:text-2xl lg:text-3xl text-white animate-fadeInTwo">
        I'm a high school graduate who is interested in software engineering, especially in the field of Front-end Developer, user interfaces and web application
        </p>
        <Link href="https://docs.google.com/document/d/1nEDnag8t90e_RDDduG1zx_XXOUD-pLVCeEp7bp-xDbc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 p-2 bg-red-700 text-white rounded hover:bg-red-500">
            Check My Cv
          </button>
        </Link>
      </div>

      <div className="carousel flex justify-center items-center m-10 ">
        <div className="carousel-item relative w-[500px] h-[500px] overflow-hidden">
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 animate-fadeInTwo"
            onClick={() => handleImageClick(currentImage)}
          />
        </div>
      </div>

      {/* <div className="flex justify-center gap-2 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`p-2 rounded-full ${index === currentImage ? "bg-red-500" : "bg-gray-400"}`}
            onClick={() => handleImageClick(index)} // Manual navigation to the desired image
          />
        ))}
      </div>
       */}
      
      <MyPortofolio/>
      <AbaoutMe/>
      <Form/>
      <div className="p-20">
        <h3 className="text-2xl md:text-4xl xl:text-5xl">Find me!</h3>
        <div className="flex gap-2">
          <Link href="http://linkedin.com/in/frisqia-fatmalaningsih" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 mr-2 fill-current text-white">
                <path d="M100.28 448H7.4V149.1h92.88zm-46.44-334.2c-31.6 0-57.24-25.65-57.24-57.24 0-31.6 25.64-57.23 57.24-57.23 31.6 0 57.23 25.64 57.23 57.23 0 31.59-25.63 57.24-57.23 57.24zm345.4 334.2h-92.7V302.4c0-34.7-12.7-58.4-44.6-58.4-24.3 0-38.8 16.4-45.2 32.3-2.3 5.6-2.8 13.5-2.8 21.4v150.2h-92.78s1.24-243.6 0-268.9h92.78v38.1c12.3-19 34.4-46.2 83.6-46.2 61 0 106.7 39.8 106.7 125.4z" />
              </svg>
              LinkedIn
            </button>
          </Link>
          <Link href="https://github.com/frisqia" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current text-white">
                <path d="M12 2C6.477 2 2 6.484 2 12.016c0 4.418 2.865 8.167 6.839 9.49.5.091.682-.217.682-.482 0-.237-.01-1.025-.015-1.86-2.782.604-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.532 2.341 1.09 2.91.834.09-.646.348-1.09.635-1.34-2.22-.254-4.56-1.113-4.56-4.943 0-1.091.39-1.988 1.031-2.686-.103-.254-.446-1.287.096-2.684 0 0 .841-.27 2.75 1.031a9.54 9.54 0 012.5-.337c.849.003 1.697.115 2.5.337 1.91-1.301 2.75-1.031 2.75-1.031.544 1.397.198 2.43.097 2.684.644.698 1.032 1.596 1.032 2.686 0 3.838-2.344 4.686-4.571 4.934.358.309.677.916.677 1.843 0 1.329-.012 2.402-.012 2.725 0 .268.179.575.685.476A10.023 10.023 0 0022 12.016C22 6.484 17.523 2 12 2z" />
              </svg>
              GitHub
            </button>
          </Link>
          <Link href="https://web.facebook.com/frifani.xiaocia/" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 mr-2 fill-current text-white">
                <path d="M279.14 288l14.22-92.66H204.91v-60.08c0-26.7 12.9-52.73 54.13-52.73h41.4V7.26S260.89 0 226.53 0C138.12 0 90.23 53.29 90.23 149.06v64.28H0v92.66h90.23V512h100.2V288z" />
              </svg>
              Facebook
            </button>
          </Link>
        </div>
      </div>
      <footer className="bg-black text-white text-center p-5">
        <p>&copy; 2024 Frisqia Fatmalaningsih. All rights reserved.</p>
      </footer>
    </>
  );
}
