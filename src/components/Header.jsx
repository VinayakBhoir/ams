import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo-2-10-nobg.png";
import Navbar from "./Navbar";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      className="w-full bg-neutral-light px-6 pt-4 pb-6 relative z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto relative min-h-[120px] md:min-h-[140px] flex items-center">
        {/* Logo on homepage: Left aligned */}
        {isHome ? (
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="w-[260px] md:w-[340px] lg:w-[380px] object-contain transition-all duration-300"
              />
            </Link>
          </motion.div>
        ) : (
          // Logo on other pages: Center aligned using flex
          <motion.div
            className="flex justify-center w-full absolute top-1/2 left-0 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="w-[260px] md:w-[340px] lg:w-[380px] object-contain transition-all duration-300"
              />
            </Link>
          </motion.div>
        )}

        {/* Menu button always aligned right */}
        <div className="ml-auto z-10">
          <Navbar />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
