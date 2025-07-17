import React from 'react';
import orangeLogo from '../assets/images/orange-logo-nobg.png';

const Footer = () => {
  return (
    <footer className="bg-[#f7f6f5] text-gray-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src={orangeLogo}
            alt="INFRABOND Logo"
            className="h-18 mb-4"
          />
          <p className="text-sm text-gray-700">
            INFRABOND is an ISO 9001:2008 certified company, committed to quality concrete solutions.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-[#d6470b] font-semibold mb-3">Our Products</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>QC Crote 2001 (Superplasticizer)</li>
            <li>QC Crote 1000 (Water Reducer)</li>
            <li>FAST HARD (Accelerator)</li>
            <li>PAVAR SHINE (Paver Polish)</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#d6470b] font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Concrete Mix Design</li>
            <li>RMC Quality Control</li>
            <li>Site Testing & Support</li>
            <li>Consulting for Cost Optimization</li>
          </ul>
        </div>

        {/* INFRABOND */}
        <div>
          <h3 className="text-[#d6470b] font-semibold mb-3">INFRABOND</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Us</li>
            <li>Team</li>
            <li>Director’s Message</li>
            <li>Certifications</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Concrete Knowledge */}
        <div>
          <h3 className="text-[#d6470b] font-semibold mb-3">Concrete Knowledge</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Problems in RMC & Solutions</li>
            <li>Concrete FAQs & Technical Q&A</li>
            <li>Concrete Testing & Sampling Guide</li>
            <li>Economical Mix Design Strategy</li>
            <li>How Admixtures Work</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-300 mt-10 pt-6 pb-4 px-4 max-w-7xl mx-auto text-xs text-gray-600">
        <p className="mb-4">
          <span className="font-semibold">Disclaimer:</span> All technical information provided on this website is for guidance only. Product usage should be verified on-site with actual trials. INFRABOND holds the right to change product specifications without prior notice. All images, logos, and information are copyright of INFRABOND. Any reproduction requires prior written consent.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#d6470b] text-white text-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="opacity-90">
            <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </p>

          <p className="font-medium opacity-90">© 2024 INFRABOND | Build - Unique - Future</p>

          <p className="opacity-90">
            Website Design by{" "}
            <a
              href="https://compwallah.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 transition"
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
