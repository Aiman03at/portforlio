import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // Import Framer Motion

export default function Header() {
  return (
    <motion.header
      className="text-gray-800 bg-gray-900 body-font"
      initial={{ opacity: 0, y: -50 }}  // Initial state
      animate={{ opacity: 1, y: 0 }}   // Final state
      transition={{ duration: 1 }}     // Transition properties
    >
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <motion.div
          className="flex justify-between items-center w-full md:w-auto"
          initial={{ opacity: 0, x: -50 }}   // Initial state for links
          animate={{ opacity: 1, x: 0 }}     // Final state for links
          transition={{ duration: 1, delay: 0.3 }} // Animation delay
        >
          <motion.div
            whileHover={{ scale: 1.1 }}     // Hover effect: links scale up
            className="text-lg md:text-xl font-semibold mr-5 hover:text-white transition duration-300"
          >
            <Link to="/">About</Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}     // Hover effect: links scale up
            className="text-lg md:text-xl font-semibold mr-5 hover:text-white transition duration-300"
          >
            <Link to="/projects">Projects</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}     // Hover effect: links scale up
            className="text-lg md:text-xl font-semibold mr-5 hover:text-white transition duration-300"
          >
            <Link to="/skills">Skills</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}     // Hover effect: links scale up
            className="text-lg md:text-xl font-semibold mr-5 hover:text-white transition duration-300"
          >
            <Link to="/contact">Contact</Link>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
