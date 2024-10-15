'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import PDC from "../web-project/PDC-Background.png"
import PDCOne from "../web-project/PDC-Recycle.png"
import PDCTheme from "../web-project/pdc-judul.png"
import Link from "next/link"



export default function MyPortofolio(){
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [firstBlink, setFirstBlink] = useState(true);
  const [secondBlink, setSecondBlink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstBlink(false);
      setShowSecondParagraph(true);
      setSecondBlink(true);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);
  
    return(

        <>
        
    
        <div className="px-20 py-5 bg-black text-white">
        <h1 className="text-2xl">My Portfolio</h1>
        <p className="text-7xl font-lilita">Project</p>
        <br/>
        <p className="animate-pulseZoom">
        This is my previous project and work. My portfolio covers several areas of programming languages, graphic design, code writing, digital marketing, and many more. It provides examples of work
      
          completed for clients and personal projects, offering insight into my skills and work style to help you in your upcoming endeavors.
        </p>
  
        <br/>
        <h2 className="font-bold text-2xl">Website</h2>
        <div className="p-5">
        <p className="flex justify-center font-bold">PDC Recycle</p>
        <Link href='https://docs.google.com/presentation/d/1SDYUIc_tX5h5iWNASJA8MH6MWc6OhWnHiRzCg2A1flg/edit#slide=id.p' className="flex justify-center"><u>Info Detail</u></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Project 1",
              img: PDCTheme,
            },
            {
              name: "Project 2",
              img: PDC,
            },
            {
              name: "Project 3",
              img: PDCOne,
            },
            
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md  overflow-hidden transition-transform duration-500 hover:scale-105">
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-50 object-cover"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
        <br/>
        
      </div></>
    )
}
