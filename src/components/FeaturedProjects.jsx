import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects.json";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedProjects() {
  return (
    <motion.section
      className="bg-neutral-light py-24 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={itemVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-neutral-dark mb-14"
          variants={itemVariants}
        >
          Our Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center transition-transform hover:scale-[1.03] duration-300"
            >
              <div className="w-full h-64 bg-white rounded-2xl shadow-3xl p-6 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-40 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold italic text-neutral mt-4">
                {project.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          variants={itemVariants}
        >
          <Link
            to="/projects"
            className="inline-block bg-primary text-white font-medium text-lg px-6 py-3 rounded-full shadow-lg hover:bg-secondary transition duration-300"
          >
            Explore all our projects
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
