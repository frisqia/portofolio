"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Spline scene="https://prod.spline.design/Y30fkQios2Bnaa1f/scene.splinecode" />
      
      {/* Overlay gelap supaya teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
