import React from "react";
import { motion } from "framer-motion";
import orangeLogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-neutral-light text-dark pt-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={orangeLogo} alt="AMS Logo" className="h-[72px] mb-4" />
          <p className="text-sm text-dark/90 leading-relaxed max-w-xs">
            AMS is an ISO 9001:2008 certified company, committed to quality concrete solutions.
          </p>
        </div>

        {/* Footer Columns */}
        {[
          {
            title: "AMS",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Team", href: "/team" },
              { label: "Director’s Message", href: "/about#director-message" },
              { label: "Certifications", href: "/about#certifications" },
              { label: "Contact", href: "/contact" },
              { label: "Careers", href: "/careers" },
            ],
          },
          {
            title: "Our Products",
            items: [
              "Anti Washout Concrete",
              "Tremie Concrete",
              "Heavy Concrete",
              "Borated Concrete",
              "Dry Lean Concrete",
              "Self-Compacting Concrete",
              "High-Strength Concrete",
              "High-Performance Durable Concrete",
              "High Early-Strength Concrete",
              "Colored Concrete",
              "Fibre-Reinforced Concrete",
              "Bucket Concrete",
              "Pervious Concrete",
              "Steel Fibre-Reinforced Concrete",
              "Lightweight Concrete",
            ],
          },
          {
            title: "Services",
            items: [
              "24x7 Operational Service",
              "Advanced Planning in Sensitive Areas",
              "Target Closer",
              "Lower Manpower Requirement for Client",
              "Higher Safety",
              "Rates Are Based on Products, Not Market",
              "Economical",
            ],
          },
          {
            title: "Concrete Knowledge",
            items: [
              "Problems & Solutions",
              "Concrete FAQs & Technical Q&A",
              "Concrete Testing & Sampling Guide",
              "Economical Mix Design Strategy",
              "How Admixtures Work",
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="text-primary font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm text-dark/80">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-dark transition-colors duration-200"
                >
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Quick Search */}
      <div className="border-t border-b border-gray-300 mt-10 pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 text-sm text-neutral">
          <div className="col-span-2 sm:col-span-3 md:col-span-1 font-semibold text-base text-accent">
            Quick Search
          </div>

          {[
            "Self-Compacting Concrete",
            "Anti Washout Concrete",
            "High-Performance Durable Concrete",
            "High Early-Strength Concrete",
            "Fibre-Reinforced Concrete",
            "Lightweight Concrete Applications",
            "24x7 Concrete Delivery Service",
            "Concrete for Sensitive Areas",
            "Borated Concrete for Radiation Shielding",
            "Economical Mix Design Strategy",
            "Concrete Testing & Sampling Guide",
            "How Admixtures Work in Concrete",
          ].map((label, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:underline hover:text-neutral-dark transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>


      {/* Disclaimer */}
      <div className="border-t border-gray-300 mt-10 pt-6 pb-4 px-4 max-w-7xl mx-auto text-xs text-dark/70 leading-relaxed">
        <p className="mb-4">
          <span className="font-semibold">Disclaimer:</span> All technical information provided
          on this website is for guidance only. Product usage should be verified on-site with
          actual trials. AMS holds the right to change product specifications without prior
          notice. All images, logos, and information are copyright of AMS. Any reproduction
          requires prior written consent.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white text-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-x-2">
            <a href="#" className="hover:underline opacity-90">
              Privacy Policy
            </a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:underline opacity-90">
              Terms & Conditions
            </a>
          </div>

          <p className="font-medium opacity-90">
            © {new Date().getFullYear()} AMS &mdash; Build • Unique • Future
          </p>

          <p className="opacity-90">
            Website by{" "}
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
    </motion.footer>
  );
};

export default Footer;
