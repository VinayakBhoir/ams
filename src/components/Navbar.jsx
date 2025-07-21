import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Team", to: "/team" },
  { name: "Careers", to: "/careers" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-primary text-xl font-medium hover:scale-110 transition-transform"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[85vw] bg-primary z-50 p-10 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              {/* Close Icon */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"
              >
                <X size={32} strokeWidth={2.5} />
              </button>

              {/* Rotated Side Label */}
              <div className="absolute top-1/2 left-6 -translate-y-1/2 -rotate-90 text-white tracking-widest text-xs uppercase font-semibold">
                Menu
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-6 mt-24 pl-8 md:pl-24">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-white text-4xl md:text-5xl font-heading tracking-tight transition-all ${
                        isActive ? "font-bold underline underline-offset-4" : "hover:font-semibold"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Contact Section */}
              <div className="text-white text-sm text-right pr-2 md:pr-10 mb-4 leading-relaxed">
                <p className="font-semibold text-lg mb-1">Contact</p>
                <p className="opacity-90">info@AMS consulting.in</p>
                <p className="opacity-90">hr@AMS consulting.in</p>
                <p className="opacity-90">+91 98765 43210</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
