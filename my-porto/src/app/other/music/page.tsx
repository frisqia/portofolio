'use client'

import React, { useState, useEffect, useRef } from "react";
import "boxicons"; // Pastikan Boxicons diimport

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const boundaryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Error playing audio:", error);
        }
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    const { clientX } = e;

    const boundary = boundaryRef.current;
    if (boundary) {
      const { left, right } = boundary.getBoundingClientRect();

      // Membatasi posisi X ke pinggir kiri dan kanan
      let newX;
      if (clientX < left + 50) {
        newX = left; // Pinggir kiri
      } else if (clientX > right - 50) {
        newX = right - 50; // Pinggir kanan
      } else {
        return; // Tidak ada perubahan posisi
      }

      if (buttonRef.current) {
        buttonRef.current.style.position = "absolute";
        buttonRef.current.style.left = `${newX}px`;
        buttonRef.current.style.top = "50%"; // Posisikan vertikal di tengah (garis ungu)
      }
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center" ref={boundaryRef}>
      <audio ref={audioRef} src="/BLACKPINK.mp3" loop />

      <button
        ref={buttonRef}
        onClick={toggleMusic}
        onDragStart={handleDragStart}
        onDragEnd={handleDrop}
        draggable
        className="fixed bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        style={{ top: "50%", left: "20px" }} // Posisikan tombol di pinggir kiri sebagai default
      >
        {isPlaying ? (
          <i className='bx bx-pause' style={{ fontSize: "50px" }}></i>
        ) : (
          <i className='fa fa-play-circle' style={{ fontSize: "50px" }}></i>
        )}
      </button>
    </div>
  );
}
