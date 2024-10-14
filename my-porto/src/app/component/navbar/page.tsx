'use client';

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="shadow-xl shadow-pink-500/50 fixed top-0 left-0 w-full h-16 flex justify-between items-center bg-black text-white px-20 z-50">
             <h1 className="text-2xl text-bold">
        <span className="text-pink-500 shadow-lg shadow-pink-500">F</span>F
    </h1>
            <div className="hidden md:flex space-x-6 ">
                <button className="hover:text-pink-200">Home</button>
                <button className="hover:text-pink-200">About Me</button>
                <button className="hover:text-pink-200">Project</button>
                <button className="hover:text-pink-200">Blog</button>
                <button className="hover:text-pink-200">Experience</button>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>


            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
                    <button onClick={toggleMenu}>Home</button>
                    <button onClick={toggleMenu}>About Me</button>
                    <button onClick={toggleMenu}>Project</button>
                    <button onClick={toggleMenu}>Blog</button>
                    <button onClick={toggleMenu}>Experience</button>
                </div>
            )}
        </nav>
    );
}
