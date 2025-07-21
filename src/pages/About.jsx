import React from 'react';
import aboutImage from '../assets/images/about-image.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const companyName = "INFRABOND";

  return (
    <motion.section
      className="relative bg-neutral-light py-20 px-4 md:px-6 xl:px-0 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Heading */}
      <motion.h2
        className="text-6xl md:text-7xl lg:text-8xl italic font-light text-center text-neutral mb-20 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        About <span className="not-italic font-normal text-neutral-dark">Us</span>
      </motion.h2>

      {/* Image and Overlay */}
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-center min-h-[600px]">
        {/* Image */}
        <motion.div
          className="w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full lg:w-5/6 xl:w-[80%] h-auto object-contain z-10"
          />
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          className="absolute left-6 sm:left-12 md:left-20 lg:left-28 top-1/2 -translate-y-1/2 max-w-sm sm:max-w-md lg:max-w-lg z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-neutral-dark text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium tracking-wide">
            We’ve been{" "}
            <span className="font-bold text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              building infrastructure
            </span>{" "}
            with care and commitment for over{" "}
            <span className="font-bold text-neutral-dark">12 years</span>, always focused on delivering{" "}
            <span className="font-bold text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              excellence and value
            </span>.
          </p>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="text-center mt-24 max-w-5xl mx-auto px-4 sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-neutral text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed tracking-wide mb-12">
          Nothing great can be built without an amazing team. Proud to say{" "}
          <span className="font-semibold text-neutral-dark">{companyName}</span> today is a team of{" "}
          <span className="font-semibold text-neutral-dark">125+</span> dedicated individuals sharing a{" "}
          <span className="font-semibold text-neutral-dark">common mission</span>.
        </p>

        <Link to="/team">
          <button className="bg-accent hover:bg-secondary text-white text-lg sm:text-xl font-semibold px-12 sm:px-16 py-4 sm:py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 tracking-wide">
            Meet Our Team
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default About;
