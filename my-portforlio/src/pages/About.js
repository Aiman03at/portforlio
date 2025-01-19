import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aiman Mushtaq
            <br />
            <br className="hidden lg:inline-block" />
            Fullstack Developer | Frontend | Backend
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            I am a dedicated full-stack web developer with a strong emphasis on React and Node.js, backed by a Master of Technology in Computer Science. My expertise spans from building dynamic front-end user interfaces to developing efficient back-end systems, ensuring seamless integration and performance across the entire application stack.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/Aiman_pic.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
