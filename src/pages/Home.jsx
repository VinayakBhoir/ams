import React from 'react';
import { motion } from "framer-motion";
import Testimonials from '../components/Testimonials/Testimonials';
import Clients from '../components/Clients/Clients';
import RMCPlants from '../components/RMC_Plants/RMCPlants';

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to AMS
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your trusted concrete consultancy since 2019. We provide innovative solutions,
          top-quality concrete products, and expert support to help your construction projects succeed.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Testimonials />
      </section>

      {/* Clients */}
        <Clients />

      {/* RMC Plants */}
        <RMCPlants />
    </div>
  );
};

export default Home;
