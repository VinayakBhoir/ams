import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="w-full bg-neutral-light px-6 pt-4 pb-1 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative min-h-[96px] md:min-h-[112px]">
        {/* Home Page: Logo aligned left */}
        {isHome ? (
          <Link to="/" className="flex items-center z-10">
            <img
              src={logo}
              alt="Company Logo"
              className="h-24 md:h-28 object-contain transition-all duration-300"
              style={{ maxWidth: "260px" }}
            />
          </Link>
        ) : (
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <Link to="/">
              <img
                src={logo}
                alt="Company Logo"
                className="h-24 md:h-28 object-contain transition-all duration-300"
                style={{ maxWidth: "260px" }}
              />
            </Link>
          </div>
        )}

        {/* Menu button always aligned right */}
        <div className="ml-auto z-10">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
