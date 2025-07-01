import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'UltraTech', logo: '/clients/ultratech.png' },
  { name: 'ACC', logo: '/clients/acc.png' },
  { name: 'Ambuja', logo: '/clients/ambuja.png' },
  { name: 'JK Cement', logo: '/clients/jkcement.png' },
  { name: 'JSW', logo: '/clients/jsw.png' },
];

const Clients = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Trusted Clients
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 items-center">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            className="w-36 h-20 flex items-center justify-center bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
