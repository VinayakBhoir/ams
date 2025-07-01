import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Logo and Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">AMS</h3>
          <p className="text-sm leading-relaxed">
            Your trusted concrete consultancy since 2019. Delivering quality and innovation in construction solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-3">Contact Us</h4>
          <p className="text-sm mb-2">📍 AT POST THERGAON, Pune, Maharashtra, India</p>
          <p className="text-sm mb-2">📞 +91-8048372681</p>
          <p className="text-sm">✉️ info@AMS.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="border-t border-gray-700 text-center py-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} AMS. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
