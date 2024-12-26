import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5 , FaCss3Alt , FaJsSquare , FaReact , FaNodeJs  , FaPython , FaGitAlt}  from "react-icons/fa";
import { SiRedux  , SiExpress , SiMongodb , SiMysql , SiCplusplus , SiTailwindcss} from "react-icons/si";

const technologies = [
  { name: 'HTML', icon: <FaHtml5 />},
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon:  <FaReact />},
  { name: 'Redux', icon:  <SiRedux />},
  { name: 'Node.js', icon: <FaNodeJs />},
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon:  <SiMongodb />},
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'C', icon:  'C'},
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Tailwind CSS', icon:  <SiTailwindcss /> },
  { name: 'Git', icon: <FaGitAlt /> }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
      <h1 className=" text-center font-bold text-3xl text-purple-600 m-5 ">Tech Stack</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
           <motion.div
           key={tech.name}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1 }}
           className="bg-white dark:bg-gray-700 hover:bg-teal-400 dark:hover:bg-teal-600 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
         >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;