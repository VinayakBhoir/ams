import React from "react";
import logo from "../assets/images/logo.jpg"; // Update path if needed

const Header = () => {
  return (
    <div className="w-full py-6 flex justify-center items-center">
      <img
        src={logo}
        alt="Company Logo"
        className="h-28 md:h-36 object-contain transition-all duration-300"
        style={{ maxWidth: "70%" }} // prevent overflow on large screens
      />
    </div>
  );
};

export default Header;
