import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutIntro() {
  return (
    <motion.section
      className="bg-neutral-light py-24 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={itemVariants}
      >
        <motion.div
          className="inline-flex items-center justify-center gap-2 mb-4 text-primary uppercase tracking-wide"
          variants={itemVariants}
        >
          <motion.div
            initial={{ rotate: -15, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
          <span className="text-sm font-semibold">Who We Are</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-heading text-neutral-dark leading-tight mb-6"
          variants={itemVariants}
        >
          Elevating Infrastructure with Smart Chemistry
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-neutral leading-relaxed font-light"
          variants={itemVariants}
        >
          <span className="text-primary font-semibold">AMS </span>
          is a certified company, revolutionizing concrete quality in infrastructure projects.
          We specialize in cutting-edge construction chemicals — from high-range water-reducing
          super plasticizers to accelerating and retarding admixtures. Our products enhance
          concrete performance, boost durability, and reduce costs through superior workability
          and mix efficiency.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
