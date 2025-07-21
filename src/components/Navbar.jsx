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

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ☰ Open Button */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="fixed top-6 right-6 z-50 text-primary text-2xl font-medium hover:scale-110 transition-transform"
          aria-label="Open Menu"
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 90 : 0 }}
        >
          ☰
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full md:w-[85vw] bg-primary z-50 p-10 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              {/* ✖ Close Button */}
              <motion.button
                onClick={() => setOpen(false)}
                className="fixed top-6 right-6 text-white hover:rotate-90 transition-transform z-50"
                aria-label="Close Menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.4 }}
              >
                <X size={32} strokeWidth={2.5} />
              </motion.button>

              {/* Rotated Label */}
              <motion.div
                className="absolute top-1/2 left-6 -translate-y-1/2 -rotate-90 text-white tracking-widest text-xs uppercase font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Menu
              </motion.div>

              {/* Nav Links - Animated */}
              <div className="flex flex-col gap-6 mt-24 pl-8 md:pl-24">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={linkVariants}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-white text-4xl md:text-5xl font-heading tracking-tight transition-all ${isActive
                          ? "font-bold underline underline-offset-4"
                          : "hover:font-semibold"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info with Fade Up */}
              <motion.div
                className="text-white text-sm text-right pr-2 md:pr-10 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="font-semibold text-lg mb-1">Contact</p>
                <p className="opacity-90">info@infrabond.in</p>
                <p className="opacity-90">hr@infrabond.in</p>
                <p className="opacity-90">+91 98765 43210</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
