import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function VideoSection() {
  return (
    <motion.section
      className="bg-primary text-white text-center px-4 py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-heading italic mb-6"
        variants={fadeInUp}
      >
        How We Improve Concrete
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12"
        variants={fadeInUp}
      >
        At <strong>AMS</strong>, we go beyond chemicals — we offer complete concrete solutions.
        Our approach includes technical consultation, custom mix designs, quality control plans,
        and 24×7 expert support. Watch how our process transforms concrete performance and helps
        maximize durability and cost-efficiency in every project.
      </motion.p>

      <motion.div
        className="flex justify-center"
        variants={zoomIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/sA-vhNKcEyk?si=n2BEV-60z6Ytfd2j"
          title="AMS - Concrete Solutions Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-5xl aspect-video rounded-2xl shadow-3xl"
        ></iframe>
      </motion.div>
    </motion.section>
  );
}
