import { motion } from "framer-motion";

const mixDesigns = [
  {
    type: "M20 (1:1.5:3)",
    description: "Standard concrete mix for residential and light commercial applications.",
  },
  {
    type: "M25 (1:1:2)",
    description: "Recommended for reinforced concrete structures like slabs, beams, and footings.",
  },
  {
    type: "M30 (Design Mix)",
    description: "Used in high-rise buildings, bridges, and heavy-duty floors with custom ratios.",
  },
  {
    type: "Self-Compacting Concrete",
    description: "Flows under its own weight; ideal for complex formwork and densely reinforced areas.",
  },
];

const ConcreteMixDesigns = () => {
  return (
    <section className="py-20 px-6 bg-[var(--color-muted)]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-extrabold text-center text-[var(--color-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Concrete Mix Designs We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {mixDesigns.map((mix, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-surface)] p-6 rounded-xl shadow-soft border border-[var(--color-muted)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                {mix.type}
              </h3>
              <p className="text-[var(--color-text)] leading-relaxed">
                {mix.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcreteMixDesigns;
