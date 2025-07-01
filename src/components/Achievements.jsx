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
    <section className="py-20 bg-[var(--color-muted)] text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Achievements
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 md:px-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[var(--color-surface)] p-6 rounded-2xl shadow-soft hover:shadow-md transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-4xl font-extrabold text-[var(--color-primary)]">{stat.value}</p>
            <p className="text-[var(--color-text-sub)] mt-2 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
