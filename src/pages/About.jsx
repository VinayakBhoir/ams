import React from "react";
import sampleImage from '../assets/images/sample-2.jpeg';

const About = () => {
  return (
    <div className="bg-[#fff1ec] text-gray-800">
      {/* Hero Banner */}
      <section className="relative bg-[#fce2d8] py-28 px-6 md:px-16 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif italic text-[#d6470b] mb-6 leading-tight">
            Building Bonds <br className="hidden md:block" /> Beyond Concrete
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            INFRABOND is more than a construction chemical brand — we are innovators, collaborators, and quality-obsessed experts shaping the future of modern infrastructure through science-backed solutions.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#d6470b] mb-6">
              The Science of Strength
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded with the vision to revolutionize the construction chemical industry,
              INFRABOND delivers a diverse portfolio — from high-range water reducers and bonding agents
              to concrete hardeners and admixtures designed for India’s most demanding construction needs.
              <br /><br />
              Our R&D-driven processes ensure every formulation meets rigorous standards of performance,
              workability, and long-term durability.
            </p>
          </div>
          <div>
            <img
              src={sampleImage}
              alt="INFRABOND Research Lab"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#fae3d8] py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#d6470b] mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower builders and engineers with reliable, sustainable, and high-performing
              construction chemical solutions that enhance every stage of construction — from pour to finish.
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#d6470b] mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the benchmark in construction chemistry across India,
              known for integrity, technical innovation, and consistent excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#d6470b] mb-12">
            What Drives Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation",
                content: "We invest in cutting-edge R&D and next-gen additives to improve performance and reduce lifecycle costs.",
              },
              {
                title: "Quality",
                content: "Each batch undergoes rigorous testing to meet global construction standards — ensuring durability and consistency.",
              },
              {
                title: "Sustainability",
                content: "We promote green construction by optimizing water use, reducing material waste, and improving efficiency.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#fff8f6] rounded-3xl shadow-md p-8">
                <h4 className="text-2xl font-semibold text-[#d6470b] mb-3">{value.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  {value.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#d6470b] py-20 text-white text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-serif italic mb-4">
          Trusted by Builders, Engineered for Excellence
        </h2>
        <p className="max-w-3xl mx-auto text-lg font-light">
          From residential towers to industrial flooring — INFRABOND's concrete solutions are engineered to perform and built to last.
        </p>
      </section>
    </div>
  );
};

export default About;
