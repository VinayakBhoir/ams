import React from 'react';
import { motion } from 'framer-motion';
import plants from '../../data/plants.json';

const RMCPlants = () => {
  return (
    <section className="py-20 bg-[var(--color-muted)] text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our RMC Plants
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {plants.map((plant, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-2xl w-48 h-56 flex flex-col items-center justify-center 
              border border-[var(--color-border-strong)] shadow-md hover:shadow-lg transition-all hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={plant.logo}
              alt={plant.name}
              className="h-24 w-auto object-contain mb-3"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-[var(--color-primary-dark)] text-center">
              {plant.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RMCPlants;
