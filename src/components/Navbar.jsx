import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className="w-11 h-11 rounded-full bg-[var(--color-primary)] text-white shadow-md hover:scale-105 transition-all"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay with Fade */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[85vw] bg-orange-600 z-50 flex flex-col justify-between p-10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              {/* Close button */}
              <div className="absolute top-5 right-5">
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-black"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-white text-3xl font-light hover:font-semibold transition-all"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Contact Info */}
              <div className="text-white text-sm">
                <p className="font-semibold mb-1">Contact</p>
                <p>info@amsconsulting.in</p>
                <p>+91-9876543210</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
