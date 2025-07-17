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
      {/* Menu Button (inside Header, not fixed on screen) */}
      <button
        onClick={() => setOpen(true)}
        className="text-[#d6470b] text-2xl font-semibold hover:scale-110 transition-all"
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

            {/* Sliding Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[85vw] bg-[#d6470b] z-50 p-10 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              {/* Close Icon */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white hover:rotate-90 transition-all"
              >
                <X size={32} strokeWidth={2.5} />
              </button>

              {/* Side Label (Optional) */}
              <div className="absolute top-1/2 left-6 -translate-y-1/2 -rotate-90 text-white tracking-wider text-xs font-medium uppercase">
                Menu
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 mt-24 pl-8 md:pl-24">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-white text-4xl md:text-5xl font-light tracking-tight transition-all ${
                        isActive ? "font-semibold" : "hover:font-semibold"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Contact Info */}
              <div className="text-white text-sm text-right pr-2 md:pr-10 mb-4">
                <p className="font-bold text-lg">Contact</p>
                <p>info@amsconsulting.in</p>
                <p>hr@amsconsulting.in</p>
                <p>+91 98765 43210</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
