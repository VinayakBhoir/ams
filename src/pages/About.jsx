import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>About AMS | Trusted Concrete Experts</title>
        <meta name="description" content="Learn more about AMS – our mission, values, and how we provide cutting-edge concrete and RMC solutions across the country." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-muted)] py-24 px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[var(--color-primary)] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About AMS
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg text-center text-[var(--color-secondary)] mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          AMS (Advanced Material Solutions) is a leading concrete consultancy firm based in Pune, India. Since 2019, we've helped construction professionals achieve greater efficiency, quality, and sustainability through expert guidance and proven solutions.
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary-dark)] mb-2">
                Our Mission
              </h3>
              <p className="text-[var(--color-secondary)] text-base leading-relaxed">
                To deliver reliable and innovative concrete solutions that help clients optimize performance, reduce costs, and build with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary-dark)] mb-2">
                Our Vision
              </h3>
              <p className="text-[var(--color-secondary)] text-base leading-relaxed">
                To become India’s most trusted consultancy in the concrete and construction domain through continuous innovation and customer satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="overflow-hidden rounded-2xl border border-[var(--color-muted)] shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/src/assets/images/quality_control.jpg"
              alt="AMS About"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
