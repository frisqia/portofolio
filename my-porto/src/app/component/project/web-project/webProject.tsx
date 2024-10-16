import React from "react";
import Image from "next/image";
import PDCOne from "../web-project/PDC-Recycle.png";
import PokeReact from "../web-project/pokemon.png";
import Link from "next/link";

export default function WebProject(){
    return(
        <>
        <div className="p-4">
        <p className="text-3xl md:text-5xl lg:text-7xl font-lilita">Project</p>
        <h2 className="font-bold text-2xl">Website</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl">
          {[ // Array of project items
            {
              name: "Pokemon Web - Use React Framework",
              img: PokeReact,
              description: [
                "This is the first project to use a react app to display Pokémon data using an API.",
                "Search for Pokémon using private routing before going to the dashboard.",
                "Using Tailwind CSS as the design framework."
              ],
              githubLink: "https://github.com/frisqia/milestone-2",
              infoLink: "https://docs.google.com/presentation/d/1SDYUIc_tX5h5iWNASJA8MH6MWc6OhWnHiRzCg2A1flg/edit#slide=id.p"
            },
            {
              name: "PDC Recycle - E-commerce",
              img: PDCOne,
              description: ["My team projects as front-end and is trusted to create user dashboards",
                            "A project focused on recycling and sustainability, featuring various initiatives.",],
              githubLink: "https://github.com/philipnathan/gfp-group-el",
              infoLink: "https://docs.google.com/presentation/d/1SDYUIc_tX5h5iWNASJA8MH6MWc6OhWnHiRzCg2A1flg/edit#slide=id.p"
            },
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden shadow-md transition-transform duration-500 hover:scale-105">
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-100 object-cover rounded-xl filter brightness-75 backdrop-opacity-10 backdrop-invert bg-pink/30" // Adjust brightness on hover
                width={300}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="p-2">{Array.isArray(item.description) ? item.description.join(" ") : item.description}</p>
                <div className="flex justify-center mt-2">
                  <Link href={item.infoLink} className="text-pink-500  hover:text-pink-200 mx-2">Info Detail</Link>
                  <Link href={item.githubLink} className="text-pink-500 hover:text-pink-200 mx-2">GitHub</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </>
    )
}