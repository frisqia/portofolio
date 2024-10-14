import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }, 
        },
        fadeInTwo: { 
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: 'white' },
          '100%': { borderRightColor: 'transparent' },
        },
        wave: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(15deg)' },
          '60%': { transform: 'rotate(-15deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
        pulseZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', 
        fadeInTwo: 'fadeInTwo 5s ease-in-out',
        slideRight: 'slideRight 6s ease-in-out',
        slideLeft: 'slideLeft 6s ease-in-out',
        typing: 'typing 4s steps(120) forwards', 
        blink: 'blink 0.75s step-end infinite',
        wave: 'wave 1s infinite',
        shake: 'shake 0.5s ease-in-out',
        pulseZoom: 'pulseZoom 1s ease-in-out infinite',
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'], 
      },
    },
  },
  plugins: [],
};
export default config;
