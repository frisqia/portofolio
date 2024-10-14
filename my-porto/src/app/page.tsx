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
import Form from "./component/form/page";
import MyPortofolio from "./component/project/web-project/page";
import Navbar from "./component/navbar/page";
import WavingHand from "./component/wavinhand/wavingHand";


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
      <div className="justify-center items-center">
      <Navbar/>
      <div className="px-20 py-60 bg-black">
        
        <div className="flex">

        <div className="grid">
        <div className="flex">
        <h1 className="text-2xl md:text-4xl xl:text-5xl text-pink-200/50 animate-fadeIn" style={{ textShadow: '2px 2px 4px rgba(255, 20, 147, 0.5)' }}>Hello! I'm Frisqia Fatmalaningsih</h1> <WavingHand/>
        </div>
       
        <p className="text-sm md:text-2xl lg:text-3xl text-white animate-fadeInTwo">
        I'm a high school graduate who is interested in software engineering, especially in the field of Front-end Developer, user interfaces and web application
        </p>
        <Link href="https://docs.google.com/document/d/1nEDnag8t90e_RDDduG1zx_XXOUD-pLVCeEp7bp-xDbc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 p-2 bg-pink-400/50 shadow-xl shadow-pink-300/50 text-white rounded hover:bg-pink-300 hover:text-black">
            Check My Cv
          </button>
        </Link>
      
        </div>
        <div className="flex-1 flex justify-center items-center">
              <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden">
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 animate-fadeInTwo filter grayscale saturate-150"
                  onClick={() => handleImageClick(currentImage)}
                />
              </div>
            </div>
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
  <div className="flex flex-wrap gap-2 justify-center">
    <Link href="https://www.linkedin.com/in/frisqia-fatmalaningsih-325967221/" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 md:w-6 md:h-6 mr-2 fill-current text-white">
          <path d="M100.28 448H7.4V149.1h92.88zm-46.44-334.2c-31.6 0-57.24-25.65-57.24-57.24 0-31.6 25.64-57.23 57.24-57.23 31.6 0 57.23 25.64 57.23 57.23 0 31.59-25.63 57.24-57.23 57.24zm345.4 334.2h-92.7V302.4c0-34.7-12.7-58.4-44.6-58.4-24.3 0-38.8 16.4-45.2 32.3-2.3 5.6-2.8 13.5-2.8 21.4v150.2h-92.78s1.24-243.6 0-268.9h92.78v38.1c12.3-19 34.4-46.2 83.6-46.2 61 0 106.7 39.8 106.7 125.4z" />
        </svg>
        LinkedIn
      </button>
    </Link>
    <Link href="https://github.com/frisqia" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6 mr-2 fill-current text-white">
          <path d="M12 2C6.477 2 2 6.484 2 12.016c0 4.418 2.865 8.167 6.839 9.49.5.091.682-.217.682-.482 0-.237-.01-1.025-.015-1.86-2.782.604-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.532 2.341 1.09 2.91.834.09-.646.348-1.09.634-1.34-2.223-.253-4.56-1.1-4.56-4.893 0-1.08.385-1.963 1.018-2.65-.102-.253-.442-1.271.097-2.649 0 0 .83-.266 2.724 1.018A9.423 9.423 0 0112 3.543c.84.004 1.685.113 2.465.331 1.895-1.284 2.724-1.018 2.724-1.018.539 1.378.199 2.396.097 2.649.635.687 1.018 1.57 1.018 2.65 0 3.797-2.34 4.634-4.57 4.883.359.313.678.928.678 1.868 0 1.351-.012 2.439-.012 2.775 0 .267.18.577.688.48C21.138 20.184 24 16.435 24 12c0-5.516-4.477-10-10-10z" />
        </svg>
        GitHub
      </button>
    </Link>
    <Link href="https://web.facebook.com/frifani.xiaocia/" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 md:w-6 md:h-6 mr-2 fill-current text-white">
          <path d="M279.14 288l14.22-92.66H204.91v-60.08c0-26.7 12.9-52.73 54.13-52.73h41.4V7.26S260.89 0 226.53 0C138.12 0 90.23 53.29 90.23 149.06v64.28H0v92.66h90.23V512h100.2V288z" />
        </svg>
        Facebook
      </button>
    </Link>
    <Link href="https://twitter.com/xiaocia__" target="_blank" rel="noopener noreferrer">
      <button className="mt-4 p-2 bg-gray-500 text-white rounded hover:bg-blue-700 flex items-center transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6 mr-2 fill-current text-white">
          <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.017-.607 1.794-1.57 2.163-2.724-.949.564-2.004.974-3.127 1.195-.896-.955-2.173-1.55-3.593-1.55-2.724 0-5.006 2.172-5.006 4.848 0 .379.045.742.128 1.097C7.691 8.093 4.066 6.13 1.64 3.161c-.427.733-.666 1.577-.666 2.487 0 1.72.862 3.232 2.178 4.123-.804-.025-1.56-.246-2.228-.615v.063c0 2.396 1.677 4.397 3.908 4.853-.409.112-.839.173-1.284.173-.313 0-.616-.03-.917-.086.617 1.92 2.416 3.314 4.548 3.353-1.668 1.307-3.766 2.083-6.038 2.083-.392 0-.779-.023-1.164-.067 2.153 1.367 4.705 2.164 7.434 2.164 8.911 0 13.785-7.394 13.785-13.794 0-.21-.005-.421-.014-.63.947-.684 1.77-1.54 2.415-2.51z" />
        </svg>
        Twitter
      </button>
    </Link>
  </div>
</div>

      </div>
    </>
  );
}
