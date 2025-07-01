import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "AMS provided exceptional service. The quality of their products is top-notch!",
    author: "John Doe",
    designation: "Project Manager",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "Their expertise in concrete solutions is unmatched. Highly recommend them!",
    author: "Jane Smith",
    designation: "Architect",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    quote: "Professional and reliable team. They exceeded our expectations every time.",
    author: "Michael Brown",
    designation: "Engineer",
    image: "https://i.pravatar.cc/150?img=16",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-[var(--color-muted)] text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="relative max-w-xl mx-auto min-h-[400px] sm:min-h-[420px] px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 bg-[var(--color-surface)] rounded-2xl shadow-soft p-8 text-left"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].author}
                className="w-20 h-20 rounded-full object-cover shadow-lg mb-4 border-4 border-white"
              />
              <p className="italic text-[var(--color-text-sub)] text-lg mb-6 leading-relaxed text-center max-w-md">
                “{testimonials[index].quote}”
              </p>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-[var(--color-text)]">{testimonials[index].author}</h4>
                <p className="text-sm text-[var(--color-accent)] mt-1">{testimonials[index].designation}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
