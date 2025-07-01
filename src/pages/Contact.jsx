import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <PageWrapper>

      <Helmet>
        <title>Contact AMS | Let's Build Together</title>
        <meta
          name="description"
          content="Reach out to AMS for expert advice, project discussions, or support. We're here to help you succeed in your concrete needs."
        />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-muted)] py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[var(--color-primary-dark)] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-[var(--color-secondary)] max-w-xl mx-auto mb-12 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Reach out to us for any queries, feedback, or support. We're here to help you with the best concrete solutions.
        </motion.p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="bg-[var(--color-surface)] p-8 rounded-xl shadow-md border border-[var(--color-muted)]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <label className="block text-[var(--color-secondary)] mb-1 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[var(--color-secondary)] mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[var(--color-secondary)] mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[var(--color-primary)] text-white px-6 py-2 rounded hover:bg-[var(--color-primary-dark)] transition-all"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Address</h3>
              <p className="text-[var(--color-secondary)]">📍 AT POST THERGAON, Pune, Maharashtra, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Phone</h3>
              <p className="text-[var(--color-secondary)]">📞 +91-8048372681</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-primary)]">Email</h3>
              <p className="text-[var(--color-secondary)]">✉️ info@AMS.com</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="AMS Location"
                src="https://maps.google.com/maps?q=Thergaon%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
