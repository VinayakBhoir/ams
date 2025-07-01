import React from "react";
import { motion } from "framer-motion";

const tips = [
  {
    title: "Concrete Cracking",
    description:
      "We help identify causes like shrinkage, poor curing, or mix design errors — and offer preventive strategies.",
  },
  {
    title: "Surface Dusting",
    description:
      "Occurs due to excess water or improper finishing. Our team analyzes the problem and provides durable fixes.",
  },
  {
    title: "Uneven Slabs",
    description:
      "We assess site conditions and provide mix and placement solutions to eliminate leveling issues.",
  },
  {
    title: "Early Strength Issues",
    description:
      "Low early strength can stem from wrong cement type or inadequate curing — we troubleshoot the root cause.",
  },
];

const Troubleshooting = () => {
  return (
    <section className="bg-white py-16 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Troubleshooting & Site Problems
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Troubleshooting;
