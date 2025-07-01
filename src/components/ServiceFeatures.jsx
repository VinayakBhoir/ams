import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaTruckMoving, FaFlask, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "On-Site Consultancy",
    description: "Expert guidance for optimizing concrete mix at your project site.",
    icon: <FaTools className="text-[var(--color-primary)] text-4xl" />,
  },
  {
    title: "Prompt Delivery",
    description: "Timely and efficient delivery of RMC to avoid delays.",
    icon: <FaTruckMoving className="text-[var(--color-accent)] text-4xl" />,
  },
  {
    title: "Mix Design Testing",
    description: "Lab-tested mix designs ensuring strength, durability & compliance.",
    icon: <FaFlask className="text-orange-400 text-4xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous checks throughout the production process.",
    icon: <FaCheckCircle className="text-pink-500 text-4xl" />,
  },
];

const ServiceFeatures = () => {
  return (
    <section className="py-16 bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-[var(--color-secondary)] mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose AMS?
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[var(--color-surface)] rounded-xl p-6 shadow-soft hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-sub)]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
