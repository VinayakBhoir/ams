import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About AMS
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg text-center text-gray-600 mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        AMS (Advanced Material Solutions) is a leading concrete consultancy firm based in Pune, India. Since 2019, we've helped construction professionals achieve greater efficiency, quality, and sustainability through expert guidance and proven solutions.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To deliver reliable and innovative concrete solutions that help clients optimize performance, reduce costs, and build with confidence.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            To become India’s most trusted consultancy in the concrete and construction domain through continuous innovation and customer satisfaction.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/src/assets/images/quality_control.jpg"
            alt="AMS About"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
