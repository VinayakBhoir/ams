import React from 'react';
import aboutImage from '../assets/images/about-image.png'; // Your precomposed image

const About = () => {
  return (
    <section className="relative bg-[#FEF1EC] py-16 px-4 md:px-0 overflow-hidden">
      {/* Heading */}
      <h2 className="text-8xl italic font-light text-center text-gray-500 mb-16">
        About <span className="not-italic font-normal">Us</span>
      </h2>

      {/* Image + Overlay Container */}
      <div className="relative max-w-none mx-auto flex items-center justify-center min-h-[600px]">
        {/* Image - Perfectly Centered */}
        <div className="flex justify-center items-center w-full">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full md:w-full lg:w-5/6 xl:w-4/5 h-auto object-contain z-10 max-w-6xl mx-auto"
          />
        </div>

        {/* Overlay Text - Clean Text Only */}
        <div className="absolute left-8 md:left-16 lg:left-24 xl:left-32 top-1/2 -translate-y-1/2 max-w-sm lg:max-w-lg z-20">
          <p className="text-gray-800 text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium tracking-wide">
            We have been <span className="font-bold text-[#E67E50] bg-gradient-to-r from-[#E67E50] to-[#d66a45] bg-clip-text text-transparent">building homes</span> with a lot of
            passion for the <span className="font-bold text-gray-900">last 12 years</span>, with a single aim in mind: delivering homes of the
            <span className="font-bold text-[#E67E50] bg-gradient-to-r from-[#E67E50] to-[#d66a45] bg-clip-text text-transparent"> highest standards</span>.
          </p>
        </div>
      </div>

      {/* Bottom Section with Text and Button */}
      <div className="text-center mt-16 max-w-5xl mx-auto px-8">
        <p className="text-gray-700 text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-10 tracking-wide">
          Nothing great can be build without an amazing team in place. Proud to 
          say that <span className="font-semibold text-gray-800">Varma Corp</span> today is team of <span className="font-semibold text-gray-800">125+</span> committed individuals with 
          a <span className="font-semibold text-gray-800">common mission</span>.
        </p>
        
        {/* Meet our Team Button */}
        <button className="bg-[#E67E50] hover:bg-[#d66a45] text-white text-xl font-semibold px-16 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 tracking-wide">
          Meet our Team
        </button>
      </div>
    </section>
  );
};

export default About;