import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients', value: 120 },
  { label: 'Ongoing Projects', value: 15 },
  { label: 'Completed Projects', value: 60 },
  { label: 'Clients Served', value: 40 },
];

const Achievements = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Achievements
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
