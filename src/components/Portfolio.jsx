import React, { useState } from "react";
import pic1 from "../assets/pic1.png";
import project2 from "../assets/project2.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: pic1,
    title: "Project: Learn, Locate and Connect",
    description: "UI for College Project using Figma.",
    links: {
      github: "#",
    },
  },
  {
    img: project2,
    title: "Project: E-Commerce Website",
    description: "A fullstack application built with PERN Stack.",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div
              className="w-full md:w-1/2 p-4 relative"
              onClick={() => toggleActive(index)}
            >
              <img
                src={project.img}
                alt={project.title}
                className={`w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ${
                  activeIndex === index ? "scale-105 rotate-3" : ""
                }`}
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
