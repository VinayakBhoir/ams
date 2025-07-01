import React from "react";
import { motion } from "framer-motion";

const focusPoints = [
  {
    title: "100% Customer Satisfaction",
    description: "We prioritize your needs and ensure seamless project execution from start to finish.",
  },
  {
    title: "Dedicated Support",
    description: "Our team is always available for on-site consultancy, mix troubleshooting, and post-delivery assistance.",
  },
  {
    title: "Feedback Driven Improvements",
    description: "We regularly gather feedback and adapt our services to better align with your expectations.",
  },
  {
    title: "Transparent Communication",
    description: "We keep you informed at every step, minimizing surprises and delays.",
  },
];

const CustomerFocus = () => {
  return (
    <section className="py-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Customer Commitment
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {focusPoints.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFocus;
