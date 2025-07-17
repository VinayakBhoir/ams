import React from 'react';
import sampleImage from '../assets/images/sample-1.jpeg';

const products = [
  {
    title: 'QC Crote 2001',
    description: 'High-range water reducing super plasticizer for RMC up to M-50 grade.',
    features: '25% water reduction, high cohesion, cost-optimization.',
    image: sampleImage,
  },
  {
    title: 'QC Crote 1000',
    description: 'Water reducing admixture specially designed for site mix concrete.',
    features: '20% water reduction, improves workability, cohesive mix.',
    image: sampleImage,
  },
  {
    title: 'FAST HARD',
    description: 'Accelerating admixture for quick setting of concrete.',
    features: 'Improves flexural strength, reduces setting time, great for paver blocks.',
    image: sampleImage,
  },
  {
    title: 'PAVAR SHINE',
    description: 'Surface finish enhancer for rubber moulding paver blocks.',
    features: 'High gloss finish, enhances aesthetics of blocks.',
    image: sampleImage,
  },
];

const Projects = () => {
  return (
    <div className="bg-[#fde9e1] min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#d6470b] mb-4">
            Our Construction Chemical Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our proven range of performance-grade admixtures and chemical enhancers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-4 px-1">
                <h3 className="text-[#d6470b] text-2xl font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-800 text-base mb-1">{product.description}</p>
                <p className="text-sm text-gray-600 italic">{product.features}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
