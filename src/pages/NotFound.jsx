import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notFoundImage from "../assets/images/404-image.png"; // Replace with your own graphic if needed

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light text-dark flex flex-col items-center justify-center px-6 md:px-12 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-[120px] font-heading font-bold italic text-primary leading-none">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light text-dark/80 mb-4">
          Page Not Found
        </p>
        <p className="text-md text-dark/60 max-w-xl mx-auto mb-10">
          Oops! The page you’re looking for doesn’t exist or might have been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-dark transition duration-300 font-medium"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Optional image */}
      <motion.img
        src={notFoundImage}
        alt="Not Found"
        className="mt-16 max-w-md w-full object-contain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};

export default NotFound;
