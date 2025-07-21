import React from 'react';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <motion.div
      className="bg-accent min-h-screen py-24 px-6 md:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Completed & Ongoing Projects
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto font-light">
            A showcase of our collaborations with renowned developers across landmark projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.04]"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image container */}
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.logo}
                  alt={project.name}
                  title={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-colors duration-300">
                <div className="absolute bottom-0 w-full text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-2xl font-semibold drop-shadow-sm">
                    {project.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
