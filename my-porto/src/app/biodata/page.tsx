'use client'
import React, { useState } from "react";
import school from "../biodata/sma.jpeg";
import revoU from "../biodata/revoU.jpg";
import Image from "next/image";

export default function AboutMe() {
  // State untuk mengontrol tampilan detail
  const [showSchoolDetail, setShowSchoolDetail] = useState(false);
  const [showRevoUDetail, setShowRevoUDetail] = useState(false);

  return (
    <>
      <div className="p-20">
        <h1 className="text-7xl font-lilita">About Me</h1>
        <br />
        <p className="text-2xl font-bold font-poppins">Education</p>
        <br />
        <div className="flex flex-wrap justify-center gap-5">
          {/* Gambar School */}
          <div className="relative">
            <Image
              src={school}
              alt="School"
              width={500}
              height={300}
              className="filter grayscale cursor-pointer hover:filter-none"
              onClick={() => setShowSchoolDetail(!showSchoolDetail)} // Toggle untuk detail School
            />
            <h2 className="text-xl font-bold">SMA Bina Pendidikan</h2>
            <p>Jurusan: Ilmu Pengetahuan Alam (Biologi)</p>
            <p>April, 2015 –  July 2017</p>
            {/* Detail SMA yang muncul jika gambar diklik */}
            {showSchoolDetail && (
              <div className="absolute top-0 left-0 p-5 bg-white text-black shadow-lg rounded-md z-10 w-full">
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => setShowSchoolDetail(false)}
                >
                  Close
                </button>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9398894807787!2d107.09804634515312!3d-6.27163534522334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69855fed9be061%3A0xe2b2ad1504d266d7!2sSMK%20Bina%20Pendidikan%201%20Bekasi!5e0!3m2!1sid!2sid!4v1728649072120!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h2 className="text-xl font-bold mt-3">SMA Bina Pendidikan</h2>
                <p>Jurusan: Ilmu Pengetahuan Alam (Biologi)</p>
                <p>April, 2015 –  July 2017</p>
                <ul className="list-disc pl-5">
                  <li>Keanekaragaman makhluk hidup dan perannya</li>
                  <li>Virus</li>
                  <li>Ekosistem</li>
                  <li>Perubahan lingkungan</li>
                  <li>Biologi sel</li>
                  <li>Sistem organ</li>
                  <li>Evolusi dan genetika</li>
                  <li>Pertumbuhan dan perkembangan</li>
                  <li>Inovasi biologi</li>
                </ul>
              </div>
            )}
          </div>

          {/* Gambar RevoU */}
          <div className="relative">
            <Image
              src={revoU}
              alt="RevoU"
              width={500}
              height={200}
              className="filter grayscale cursor-pointer hover:filter-none"
              onClick={() => setShowRevoUDetail(!showRevoUDetail)} // Toggle untuk detail RevoU
            />
            <h2 className="text-xl font-bold">RevoU Program</h2>
            <p>Fullstack Software Engineering</p>
            <p>January , 2024 – September 2024</p>
            {/* Detail RevoU yang muncul jika gambar diklik */}
            {showRevoUDetail && (
              <div className="absolute top-0 left-0 p-5 bg-white text-black shadow-lg rounded-md z-10 w-full">
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => setShowRevoUDetail(false)}
                >
                  Close
                </button>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2770232878192!2d106.82384771081564!3d-6.22716016096029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4734a8de3%3A0xb2ad7eacc88d7f3e!2sRevoU!5e0!3m2!1sid!2sid!4v1728649662660!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h2 className="text-xl font-bold mt-3">RevoU Program</h2>
                <p>Program Full-Stack Web Development</p>
                <p>January , 2024 – September 2024</p>
                <ul className="list-disc pl-5">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Node.js</li>
                  <li>SQL & NoSQL Databases</li>
                  <li>API Development</li>
                  <li>Deployment and Cloud Computing</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-20">
    
  <p className="text-2xl font-bold font-poppins mb-5">Experience</p>
  <table className="min-w-full">
    <thead>
      <tr >
        <th className="py-2 px-4 text-xl text-left font-semibold text-gray-700">Company</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td className="py-3 px-4 text-lg">PT. Metiska Farma</td>
        <td className="py-3 px-4 text-end">August 2021 - June 2024</td>
      </tr>
      <tr >
        <td className="py-3 px-4 text-lg">PT. Palugada Informatika</td>
        <td className="py-3 px-4 text-end">March 2020 - August 2021</td>
      </tr>
      <tr >
        <td className="py-3 px-4 text-xl">PT. Haengsung Raya Indonesia</td>
        <td className="py-3 px-4 text-end">April 2018 - October 2018</td>
      </tr>
      <tr >
        <td className="py-3 px-4 text-xl">PT. Tempo Scan Pacific, tbk</td>
        <td className="py-3 px-4 text-end">October 2017 - March 2018</td>
      </tr>
    </tbody>
  </table>


              
      </div>
      <div className="px-20">
      <p className="text-2xl font-bold font-poppins">Hobby</p>
      </div>
      
    </>
  );
}
