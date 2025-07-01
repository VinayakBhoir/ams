// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">AMS</Link>

        <div className="hidden md:flex space-x-6 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block">Services</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="block">Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
