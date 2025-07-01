import React from 'react';
import { motion } from 'framer-motion';
import VideoSection from '../components/VideoSection'; // ✅ Make sure this file exists and exports a valid component
import ServiceFeatures from '../components/ServiceFeatures';
import AnimatedStats from '../components/AnimatedStats';
import TroubleshootingTips from '../components/TroubleshootingTips';
import ConcreteMixDesigns from '../components/ConcreteMixDesigns';
import ProfitStrategies from '../components/ProfitStrategies';
import CustomerFocus from '../components/CustomerFocus';

const services = [
  {
    title: 'Concrete Mix Design',
    description:
      'Custom mix designs to meet specific project needs, ensuring strength, durability, and performance.',
    icon: '🧪',
  },
  {
    title: 'On-Site Consultancy',
    description:
      'Our experts provide direct support at your site to ensure quality and resolve technical challenges.',
    icon: '🏗️',
  },
  {
    title: 'Material Testing',
    description:
      'Comprehensive testing of cement, aggregates, water, and admixtures as per IS standards.',
    icon: '🔬',
  },
  {
    title: 'Troubleshooting & Repairs',
    description:
      'Identify root causes of concrete failures and provide expert repair recommendations.',
    icon: '🛠️',
  },
  {
    title: 'Cost Optimization',
    description:
      'Reduce construction costs without compromising on quality using optimized designs and materials.',
    icon: '📉',
  },
  {
    title: 'Training & Workshops',
    description:
      'We conduct training sessions for your team on concrete technology, quality control, and safety.',
    icon: '🎓',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="max-w-3xl text-lg text-center text-gray-600 mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        AMS offers a full spectrum of concrete-related services to help you build better, faster, and smarter. From testing to consulting, we ensure excellence at every stage of your construction process.
      </motion.p>

      {/* ⬇️ Video Section */}
      <div className="mb-16">
        <VideoSection />
      </div>

      <div className="mb-16">
        <ServiceFeatures />
      </div>

      <div className="mb-16">
        <AnimatedStats />
      </div>

      <div className="mb-16">
        <TroubleshootingTips />
      </div>

      <div className="mb-16">
        <ConcreteMixDesigns />
      </div>

      <div className="mb-16">
        <ProfitStrategies />
      </div>

      <div className="mb-16">
        <CustomerFocus />
      </div>

      {/* ⬇️ Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
