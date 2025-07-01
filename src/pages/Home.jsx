import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import Clients from '../components/Clients/Clients';
import RMCPlants from '../components/RMC_Plants/RMCPlants';
import Testimonials from '../components/Testimonials/Testimonials';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>AMS | Concrete Consultancy & RMC Solutions</title>
        <meta
          name="description"
          content="AMS provides expert concrete solutions, RMC services, and consultancy since 2019. Discover quality, innovation, and excellence."
        />
        <meta
          name="keywords"
          content="AMS, concrete, RMC, consultancy, construction, paver blocks"
        />
      </Helmet>

      {/* Hero Slider Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="bg-[var(--color-background)] text-center py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to AMS
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[var(--color-secondary)] leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your trusted concrete consultancy since 2019. We provide innovative solutions,
            top-quality concrete products, and expert support to help your construction projects succeed.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="/services" className="btn-primary shadow-md hover:shadow-lg">
              Our Services
            </a>
            <a href="/contact" className="btn-outline border-[1.5px] text-[var(--color-secondary)] hover:bg-[var(--color-background)] shadow-md hover:shadow-lg">
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <Achievements />

      {/* Trusted Clients Section */}
      <Clients />

      {/* RMC Plants Section */}
      <RMCPlants />

      {/* Testimonials Section */}
      <section className="py-16 bg-[var(--color-surface)]">
        <Testimonials />
      </section>
    </PageWrapper>
  );
};

export default Home;
