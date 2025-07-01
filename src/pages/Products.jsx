import React from 'react';
import { motion } from 'framer-motion';
import interlocking from '../assets/images/interlocking-paver.jpg';
import redStone from '../assets/images/red-stone-paver.jpg';
import greyStone from '../assets/images/grey-stone-paver.jpg';
import yellowPaver from '../assets/images/yellow-paver.jpg';
import parkingTile from '../assets/images/parking-tiles.jpg';
import PageWrapper from '../components/PageWrapper';
import { Helmet } from 'react-helmet-async';

const products = [
  {
    name: 'Interlocking Paver',
    image: interlocking,
    price: '₹22/sq.ft',
    desc: 'Durable pavers suitable for heavy traffic areas.',
  },
  {
    name: 'Red Stone Paver',
    image: redStone,
    price: '₹24/sq.ft',
    desc: 'Attractive red textured paver block.',
  },
  {
    name: 'Grey Stone Paver',
    image: greyStone,
    price: '₹23/sq.ft',
    desc: 'Classic look with strength and slip-resistance.',
  },
  {
    name: 'Yellow Paver',
    image: yellowPaver,
    price: '₹25/sq.ft',
    desc: 'Premium yellow finish for elegant look.',
  },
  {
    name: 'Parking Tiles',
    image: parkingTile,
    price: '₹30/sq.ft',
    desc: 'Strong tiles designed for vehicle movement.',
  },
];

const Products = () => {
  return (
    <PageWrapper>

      <Helmet>
        <title>Our Products | AMS Paver Blocks & Concrete Tiles</title>
        <meta name="description" content="Check out our wide range of concrete products – interlocking pavers, tiles, and durable blocks for all construction needs." />
      </Helmet>

      <div className="min-h-screen bg-gray-100 py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg text-center text-gray-600 mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We offer a wide range of high-quality concrete products tailored to your construction needs. Choose from our reliable pavers and tiles for durability, design, and strength.
        </motion.p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
                <p className="text-primary font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Products;
