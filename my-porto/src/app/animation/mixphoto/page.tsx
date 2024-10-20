"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import profileImage from "../mixphoto/asset/cia.jpg";
import profileImageOne from "../mixphoto/asset/cia1.jpg";
import profileImageTwo from "../mixphoto/asset/cia2.jpg";
import profileImageThree from "../mixphoto/asset/cia3.jpg";
import profileImageFour from "../mixphoto/asset/cia4.jpg";


interface ImageType {
    src: StaticImageData;
    alt: string;
  }
  export default function MixPhoto() {
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
    
    return(
        <>
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
        </>
    )
}