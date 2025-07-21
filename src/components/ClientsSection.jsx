import { motion } from "framer-motion";
import clients from "../data/clients.json";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <motion.section
      className="bg-neutral-light py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-semibold text-neutral-dark mb-12"
          variants={item}
        >
          Trusted by Leading Clients
        </motion.h2>

        {/* Logo Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 items-center"
          variants={container}
        >
          {clients.map(({ logo, name }, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                alt={name}
                title={name}
                className="h-16 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
