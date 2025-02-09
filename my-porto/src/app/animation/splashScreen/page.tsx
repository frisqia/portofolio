"use client";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-2xl font-bold">
      <p className="mb-4 pb-5">🚀 Loading... {progress}%</p>
      <div className="w-64 h-2 bg-gray-700 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="pt-5">You're about to see something awesome...</p>
      <p className="pt-5 pb-5 text-2xl md:text-3xl lg:text-5xl">
        🎊 Welcome to Frisqia Fatmalaningsih's website! 🎊
      </p>
      <p>Created with love by Frisqia Fatmalaningsih.</p>
    </div>
  );
};

export default SplashScreen;
