import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaRupeeSign, FaTools, FaRecycle } from "react-icons/fa";

const strategies = [
  {
    icon: <FaChartLine size={30} className="text-blue-600" />,
    title: "Optimized Mix Designs",
    description:
      "Tailored mixes to minimize cost and maximize strength without compromising performance.",
  },
  {
    icon: <FaRupeeSign size={30} className="text-green-600" />,
    title: "Material Savings",
    description:
      "Reduce cement content, reuse aggregates, and select cost-effective additives based on project scale.",
  },
  {
    icon: <FaTools size={30} className="text-yellow-500" />,
    title: "Equipment Efficiency",
    description:
      "Recommendations on batching and pumping systems to reduce fuel and time costs.",
  },
  {
    icon: <FaRecycle size={30} className="text-purple-500" />,
    title: "Waste Reduction",
    description:
      "Advice on minimizing on-site concrete wastage through proper planning and execution.",
  },
];

const ProfitStrategies = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Profitability Strategies & Cost Savings
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {strategies.map((strategy, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{strategy.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{strategy.title}</h3>
            <p className="text-gray-600 text-sm">{strategy.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfitStrategies;
