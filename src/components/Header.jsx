import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="w-full py-4 px-6 flex justify-start items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Company Logo"
          className="h-16 md:h-20 object-contain transition-all duration-300"
          style={{ maxWidth: "180px" }}
        />
      </Link>
    </div>
  );
};

export default Header;
