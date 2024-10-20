'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Mesh } from 'three';
import Link from 'next/link';

function PhotoBox() {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(['/cia.jpg', '/cia1.jpg', '/cia2.jpg', '/cia3.jpg', '/cia4.jpg', '/cia5.jpg', '/cia6.jpg']);

  // Animasi rotasi
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 3, 2]} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 2, 1.5]} /> {/* Ukuran box badge */}
      <meshStandardMaterial map={texture[0]} attach="material-0" /> {/* Sisi depan */}
      <meshStandardMaterial map={texture[1]} attach="material-1" /> {/* Sisi belakang */}
      <meshStandardMaterial map={texture[2]} attach="material-2" /> {/* Sisi kiri */}
      <meshStandardMaterial map={texture[3]} attach="material-3" /> {/* Sisi kanan */}
      <meshStandardMaterial map={texture[4]} attach="material-4" /> {/* Sisi atas */}
      <meshStandardMaterial map={texture[5]} attach="material-5" /> {/* Sisi bawah */}
    </mesh>
  );
}

export default function Page() {
  return (
    <div className="max-w-[180px] sm:max-w-[200px] md:max-w-xs lg:max-w-sm flex flex-col items-center justify-center rounded-lg bg-gray-100/20 shadow-xl p-4 sm:p-6 transition-transform duration-500 hover:scale-105">
      {/* Container untuk logo dan header */}
      <div className="flex justify-start w-full mb-2 sm:mb-4">
        <h1 className="text-pink-500 text-xs sm:text-sx md:text-md lg:text-2xl font-bold">
          Fri<span className="text-white">Fani</span>
        </h1>
      </div>

      {/* Container untuk PhotoBox */}
      <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[180px] h-[180px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden mb-4">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <PhotoBox />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Nama dan Deskripsi */}
      <h2 className="text-xs sm:text-sm text-pink-500 font-bold">Frisqia Fatmalaningsih</h2>
      <p className="text-xs sm:text-sm text-gray-400 underline">Front-End Developer</p>

      <br />

      {/* Email dan Icon */}
      <div className="flex justify-center items-center w-full">
        <div className="flex items-center gap-1">
          {/* Button untuk email */}
          <Link href="mailto:frifani123@gmail.com">
            <button className="w-4 h-4 md:w-5 md:5 lg:w-6 lg:h-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex justify-center items-center transition duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 md:w-3 md:w-3 lg:w-4 lg:h-4 fill-current text-white"
              >
                <path d="M1.5 4.5A3 3 0 0 1 4.5 1.5h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15zm17.25 1.5h-12l6 4.5 6-4.5zm1.5 2.25-6.29 4.717a1.5 1.5 0 0 1-1.71 0L6 8.25v10.5h12V8.25z" />
              </svg>
            </button>
          </Link>

          {/* Teks Email */}
          <p className="text-gray-400 text-xs sm:text-sm">frifani123@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
