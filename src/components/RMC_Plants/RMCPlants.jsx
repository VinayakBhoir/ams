import React from 'react';
import { motion } from 'framer-motion';
import plants from '../../data/plants.json';

const RMCPlants = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our RMC Plants
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {plants.map((plant, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-4 border border-gray-300 rounded-xl w-44 h-44 flex items-center justify-center shadow hover:shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={plant.logo}
              alt={plant.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RMCPlants;
