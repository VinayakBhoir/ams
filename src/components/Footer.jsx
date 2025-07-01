import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpg"; // ✅ Import logo image

const Footer = () => {
  return (
    <footer className="bg-[var(--color-secondary)] text-gray-200 pt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          {/* ✅ Logo */}
          <img
            src={logo}
            alt="AMS Logo"
            className="h-16 w-auto mb-3 object-contain"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Your trusted concrete consultancy since 2019. Delivering quality and
            innovation in construction solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Products", to: "/products" },
              { label: "Contact Us", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-[var(--color-primary)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Contact Us
          </h4>
          <div className="text-sm space-y-2 leading-relaxed text-gray-300">
            <p>📍 AT POST THERGAON, Pune, Maharashtra, India</p>
            <p>📞 +91-8048372681</p>
            <p>✉️ info@AMS.com</p>
          </div>
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
