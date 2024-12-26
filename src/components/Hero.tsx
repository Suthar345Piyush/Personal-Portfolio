import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Frontend Developer
              </motion.span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block text-gray-900 dark:text-white">Piyush Suthar</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Passionate about projects to solve real world projects , and to create interactive webpages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2  group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-96 h-96 rounded-3xl ml-5 overflow-hidden ">
              <div className="absolute inset-0  bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-96 h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;