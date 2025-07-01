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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="relative h-[400px] max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md p-8 bg-white rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].author}
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-md"
            />
            <p className="italic text-gray-600 mb-4">"{testimonials[index].quote}"</p>
            <h4 className="text-xl font-semibold text-gray-800">{testimonials[index].author}</h4>
            <p className="text-sm text-gray-500">{testimonials[index].designation}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
