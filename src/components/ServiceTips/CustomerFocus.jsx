import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaUserCheck, FaClock, FaSmile } from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake size={28} className="text-blue-500" />,
    title: "Strong Partnerships",
    description: "We build long-term client relationships based on trust, support, and collaboration.",
  },
  {
    icon: <FaUserCheck size={28} className="text-green-500" />,
    title: "Client Satisfaction",
    description: "Your needs are our priority — we tailor our solutions to exceed your expectations.",
  },
  {
    icon: <FaClock size={28} className="text-yellow-500" />,
    title: "Timely Support",
    description: "Our team is available and responsive, helping you avoid costly delays or confusion.",
  },
  {
    icon: <FaSmile size={28} className="text-purple-500" />,
    title: "Professional Service",
    description: "Expect courteous, experienced, and knowledgeable support throughout your journey with AMS.",
  },
];

const CustomerFocus = () => {
  return (
    <section className="py-16 bg-white px-4">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Customer-Focused Commitment
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {values.map((value, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md text-center transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{value.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFocus;
