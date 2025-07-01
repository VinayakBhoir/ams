import React from 'react';
import { motion } from 'framer-motion';

const mixDesigns = [
  {
    grade: 'M20',
    ratio: '1 : 1.5 : 3',
    description: 'Used for general residential construction like floors and footings.'
  },
  {
    grade: 'M25',
    ratio: '1 : 1 : 2',
    description: 'Recommended for RCC construction like beams, slabs, and columns.'
  },
  {
    grade: 'M30',
    ratio: 'Design Mix',
    description: 'Typically used in high-strength infrastructure projects such as roads and bridges.'
  },
  {
    grade: 'M35',
    ratio: 'Design Mix',
    description: 'Ideal for commercial and industrial constructions where durability is key.'
  },
  {
    grade: 'M40',
    ratio: 'Design Mix',
    description: 'Used in heavy-duty construction projects requiring very high strength.'
  },
];

const MixDesigns = () => {
  return (
    <section className="bg-[var(--color-surface)] py-20 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-[var(--color-primary)] mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Concrete Mix Designs
      </motion.h2>

      <motion.p
        className="text-center text-[color:var(--color-text)] max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our expert mix designs are engineered to ensure the best performance for different structural needs.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mixDesigns.map((mix, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-[var(--color-muted)] hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
              Grade {mix.grade}
            </h3>
            <p className="text-sm text-[color:var(--color-text)] mb-1">
              <strong>Ratio:</strong> {mix.ratio}
            </p>
            <p className="text-sm text-[color:var(--color-text-sub)]">
              {mix.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MixDesigns;
