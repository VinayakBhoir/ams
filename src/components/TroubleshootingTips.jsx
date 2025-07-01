import React from "react";
import { motion } from "framer-motion";

const tips = [
  {
    issue: "Cracks in Concrete",
    solution: "Ensure proper water-cement ratio and curing time to prevent shrinkage cracks.",
  },
  {
    issue: "Low Strength",
    solution: "Use correct mix design and verify raw material quality.",
  },
  {
    issue: "Surface Scaling",
    solution: "Avoid over-finishing, use air-entrained concrete, and protect against freeze-thaw.",
  },
  {
    issue: "Segregation",
    solution: "Maintain consistent mix proportions and minimize excessive vibration.",
  },
];

const TroubleshootingTips = () => {
  return (
    <section className="bg-[var(--color-surface)] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Concrete Troubleshooting Tips
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[var(--color-background)] border border-[var(--color-muted)] rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                {tip.issue}
              </h4>
              <p className="text-[var(--color-text)]">{tip.solution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TroubleshootingTips;
