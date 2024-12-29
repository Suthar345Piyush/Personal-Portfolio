import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import gifhubImage from "../assets/gifhub.png";
import blogcraftImage from "../assets/blogcraft.png"
import brainwaveImage from "../assets/brainwave.png";

const projects = [
  {
    title: 'GifHub',
    description: 'A web application where you can find various gifs built with React Js , Tailwind CSS , Giphy API',
    image:  gifhubImage,
    github: 'https://github.com/Suthar345Piyush/GIFHub-Gifs-App',
    live: 'https://gif-hub-gifs-app.vercel.app/'
  },
  {
    title: 'BrainWave',
    description: 'A modern SAAS app like website built with React Js , Tailwind CSS',
    image: brainwaveImage,
    github: 'https://github.com/Suthar345Piyush/BrainWave',
    live: 'https://brain-wave-psi.vercel.app/'
  },
  {
    title: 'BlogCraft',
    description: 'A Whole functional backend of an blogging application built with Nodejs , Expressjs , JWT Authentication , EJS ',
    image: blogcraftImage,
    github: 'https://github.com/Suthar345Piyush/BlogCraft',
    live: 'https://blog-craft.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
           PROJECTS
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="btn-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="btn-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;