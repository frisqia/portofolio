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
          '0%': { opacity: '0', transform: 'translateY(-20px)' }, // Masukkan dari atas
          '100%': { opacity: '1', transform: 'translateY(0)' }, // Berhenti di tempat
        },
        fadeInTwo: { // Perbaiki penamaan di sini
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Durasi animasi
        fadeInTwo: 'fadeInTwo 1s ease-in-out', // Perbaiki penamaan di sini
      },
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'], // Definisikan font kustom Anda di sini
      },
    },
  },
  plugins: [],
};
export default config;
