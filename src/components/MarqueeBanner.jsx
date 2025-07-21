import React from "react";
import { motion } from "framer-motion";
import "./MarqueeBanner.css"; // Includes your marquee keyframes

export default function MarqueeBanner() {
  const phrases = [
    "Where Quality Meets Concrete.",
    "Concrete Work, Exceptional Results",
    "Concrete Excellence, Unmatched Performance",
    "Concrete Creations, Lasting Impressions",
    "Concrete Innovations, Endless Possibilities",
    "Concrete Creations, Permanent Sensations",
  ];

  return (
    <motion.section
      className="bg-accent border-y-8 border-primary overflow-hidden py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative overflow-hidden">
        <div className="marquee flex whitespace-nowrap gap-32 will-change-transform hover:[animation-play-state:paused]">
          {[...phrases, ...phrases].map((text, idx) => (
            <h2
              key={idx}
              className="text-2xl md:text-4xl lg:text-5xl font-heading text-dark flex-shrink-0"
              aria-hidden={idx >= phrases.length} // Hide duplicated text from screen readers
            >
              {text.split(" ").map((word, i) => {
                const highlight = ["Every", "Strengthen", "Endures", "Real"];
                return (
                  <span
                    key={i}
                    className={highlight.includes(word) ? "italic text-primary" : ""}
                  >
                    {word + " "}
                  </span>
                );
              })}
            </h2>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
