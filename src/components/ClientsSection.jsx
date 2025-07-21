// src/components/ClientsSection.jsx
import React from 'react';
import clients from '../data/clients.json';

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Trusted by Leading Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map(({ logo, name }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={logo}
                alt={name}
                title={name}
                className="h-16 object-contain grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
