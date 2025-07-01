import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import hero1 from '../assets/images/hero/hero1.jpg';
import hero2 from '../assets/images/hero/hero2.jpg';
import hero3 from '../assets/images/hero/hero3.jpg';

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Hero Background ${index}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Text Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-[var(--color-muted)]">
          Building Trust in Every Pour
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-surface)] mb-8 max-w-2xl mx-auto">
          AMS – Your trusted concrete consultancy since 2019. We deliver precision, quality, and expertise for every construction challenge.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-full transition-all"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border border-[var(--color-muted)] text-[var(--color-muted)] hover:bg-[var(--color-muted)] hover:text-[var(--color-secondary)] px-6 py-3 rounded-full transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
