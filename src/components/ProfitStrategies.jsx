import React from "react";
import { motion } from "framer-motion";

const strategies = [
  {
    title: "Optimized Mix Designs",
    description:
      "We tailor concrete mix ratios to ensure high strength with minimal material waste, reducing overall project costs.",
  },
  {
    title: "On-Time Deliveries",
    description:
      "Our precise logistics and plant coordination minimize downtime, saving money and keeping your schedules on track.",
  },
  {
    title: "Reduced Rework & Waste",
    description:
      "High quality control reduces structural defects, improving longevity and minimizing expensive rework.",
  },
  {
    title: "Customized Consultancy",
    description:
      "Our expert advice ensures efficient usage of raw materials and guides you on cost-effective construction methods.",
  },
];

const ProfitStrategies = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Maximize Your Project Profitability
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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

export default ProfitStrategies;
