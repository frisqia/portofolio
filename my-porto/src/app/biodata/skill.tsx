import React from "react";
import { 
  SiJavascript, SiTypescript, SiPython, 
  SiReact, SiNextdotjs, SiFlask, 
  SiMysql, SiMongodb, SiGit, 
  SiHtml5, SiCss3, SiTailwindcss, 
  SiNetlify, SiDocker, SiCanva 
} from "react-icons/si";


const categories = [
  {
    title: "Bahasa Pemrograman",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, experience: "1 years", projects: "Web apps, APIs" },
      { name: "TypeScript", icon: <SiTypescript />, experience: "1 years", projects: "Frontend, Backend" },
      { name: "Python", icon: <SiPython />, experience: "1 years", projects: "Web Apps, APIs" },
    ],
  },
  {
    title: "Framework & Library",
    skills: [
      { name: "React", icon: <SiReact />, experience: "1 years", projects: "Web & Mobile apps" },
      { name: "Next.js", icon: <SiNextdotjs />, experience: "1 years", projects: "Fullstack Web Apps" },
      { name: "Flask", icon: <SiFlask />, experience: "1 years", projects: "Backend APIs" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, experience: "1 years", projects: "Modern UI/UX" },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "MySQL", icon: <SiMysql />, experience: "1 years", projects: "Databases for Web Apps" },
      { name: "MongoDB", icon: <SiMongodb />, experience: "1 years", projects: "NoSQL Databases" },
      { name: "Git", icon: <SiGit />, experience: "1 years", projects: "Version Control" },
      { name: "HTML", icon: <SiHtml5 />, experience: "1 years", projects: "Web Development" },
      { name: "CSS", icon: <SiCss3 />, experience: "1 years", projects: "Web Styling" },
      { name: "Canva", icon: <SiCanva />, experience: "1 years", projects: "UI/UX Design" },
      { name: "Netlify", icon: <SiNetlify />, experience: "1 years", projects: "Frontend Deployment" },
      { name: "Docker", icon: <SiDocker />, experience: "1 years", projects: "Containerization" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="flex flex-col items-center py-10 gap-10">
      {categories.map((category) => (
        <div key={category.title} className="w-full max-w-4xl">
          {/* Judul Kategori */}
          <p className="text-xl font-bold text-center mb-4">{category.title}</p>
          
          {/* Grid Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
            {category.skills.map((skill) => (
              <div key={skill.name} className="group [perspective:1000px]">
                <div className="relative w-32 h-40 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* FRONT CARD */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-400 text-white rounded-xl shadow-lg p-4 [backface-visibility:hidden]">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-center text-sm font-semibold">{skill.name}</p>
                  </div>

                  {/* BACK CARD */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-pink-400 text-black p-4 rounded-xl shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="font-bold text-lg">{skill.name}</p>
                    <p className="text-sm">Experience: {skill.experience}</p>
                    <p className="text-sm">Projects: {skill.projects}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
