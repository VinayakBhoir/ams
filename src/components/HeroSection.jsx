import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image + quote slides
const slides = [
  {
    image: "/hero/hero-image-2.png",
    quote: "Where Quality Meets Concrete.",
  },
  {
    image: "/hero/hero-image-3.png",
    quote: "Concrete Work, Exceptional Results",
  },
  {
    image: "/hero/hero-image-7.png",
    quote: "Concrete Excellence, Unmatched Performance",
  },
  {
    image: "/hero/hero-image-5.png",
    quote: "Concrete Creations, Lasting Impressions",
  },
  {
    image: "/hero/hero-image-6.png",
    quote: "Concrete Innovations, Endless Possibilities",
  },
  {
    image: "/hero/hero-image-3.png",
    quote: "Concrete Creations, Permanent Sensations",
  },
];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="bg-neutral-light min-h-screen px-4 pb-8 md:px-8 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden shadow-3xl">

        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].image}
              src={slides[current].image}
              alt="Slide"
              className="absolute w-full h-full object-cover object-center"
              initial={{ opacity: 0.3, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* Translucent overlay */}
        <div className="absolute inset-0 bg-neutral-dark/40 backdrop-blur-sm z-10 transition-all duration-1000" />

        {/* Centered Quote Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={slides[current].quote}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="text-white text-2xl md:text-4xl font-heading italic font-semibold leading-snug bg-black/40 px-6 py-5 md:px-10 md:py-6 rounded-xl border border-white/10 shadow-3xl max-w-3xl"
            >
              {slides[current].quote}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
