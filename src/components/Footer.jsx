import React from 'react';
import orangeLogo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-light text-dark pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src={orangeLogo}
            alt="AMS Logo"
            className="h-18 mb-4"
          />
          <p className="text-sm text-dark/90">
            AMS is an ISO 9001:2008 certified company, committed to quality concrete solutions.
          </p>
        </div>

        {/* AMS */}
        <div>
          <h3 className="text-primary font-semibold mb-3">AMS</h3>
          <ul className="space-y-2 text-sm text-dark/80">
            <li>About Us</li>
            <li>Team</li>
            <li>Director’s Message</li>
            <li>Certifications</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-primary font-semibold mb-3">Our Products</h3>
          <ul className="space-y-2 text-sm text-dark/80">
            <li>Anti Washout Concrete</li>
            <li>Tremie Concrete</li>
            <li>Heavy Concrete</li>
            <li>Borated Concrete</li>
            <li>Dry Lean Concrete</li>
            <li>Self-Compacting Concrete</li>
            <li>High-Strength Concrete</li>
            <li>High-Performance Durable Concrete</li>
            <li>High Early-Strength Concrete</li>
            <li>Colored Concrete</li>
            <li>Fibre-Reinforced Concrete</li>
            <li>Bucket Concrete</li>
            <li>Pervious Concrete</li>
            <li>Steel Fibre-Reinforced Concrete</li>
            <li>Lightweight Concrete</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-primary font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-dark/80">
            <li>24x7 Operational Service</li>
            <li>Advanced Planning in Sensitive Areas</li>
            <li>Target Closer</li>
            <li>Lower Manpower Requirement for Client</li>
            <li>Higher Safety</li>
            <li>Rates Are Based on Products, Not Market</li>
            <li>Economical</li>
          </ul>
        </div>

        {/* Concrete Knowledge */}
        <div>
          <h3 className="text-primary font-semibold mb-3">Concrete Knowledge</h3>
          <ul className="space-y-2 text-sm text-dark/80">
            <li>Problems & Solutions</li>
            <li>Concrete FAQs & Technical Q&A</li>
            <li>Concrete Testing & Sampling Guide</li>
            <li>Economical Mix Design Strategy</li>
            <li>How Admixtures Work</li>
          </ul>
        </div>
      </div>

      {/* Quick Search */}
      <div className="border-t border-b border-gray-300 mt-10 pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-sm text-gray-600">
          {/* Title */}
          <div className="col-span-2 md:col-span-1 flex items-start">
            <span className="text-[#d6470b] font-semibold text-base">Quick Search</span>
          </div>

          {/* Quick Links */}
          {[
            "2 BHKs in Punawale",
            "4 BHKs in Punawale",
            "3 BHKs in Punawale",
            "Properties in Punawale",
            "Offices in Moshi",
            "Retail Spaces in Moshi",
            "Commercial Properties Moshi",
            "Avana Available Inventory",
            "Resto Space in Moshi",
            "Open Cafe in Moshi",
            "Luxury Projects Pune",
            "Real Estate Jobs in Pune",
          ].map((label, idx) => (
            <a key={idx} href="#" className="hover:underline hover:text-dark transition">
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-300 mt-10 pt-6 pb-4 px-4 max-w-7xl mx-auto text-xs text-dark/70">
        <p className="mb-4">
          <span className="font-semibold">Disclaimer:</span> All technical information provided on this website is for guidance only. Product usage should be verified on-site with actual trials. AMS holds the right to change product specifications without prior notice. All images, logos, and information are copyright of AMS. Any reproduction requires prior written consent.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white text-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="opacity-90">
            <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </p>

          <p className="font-medium opacity-90">© 2024 AMS | Build - Unique - Future</p>

          <p className="opacity-90">
            Website Design by{" "}
            <a
              href="https://compwallah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-light transition"
            >
              compwallah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
