import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/videos/video2.mp4'; // Importing directly to avoid path issues

const VideoSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src={video1}
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Innovation in Concrete Solutions
        </motion.h2>

        <motion.p
          className="text-white text-sm md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          From precision mix design to flawless delivery — we ensure your construction projects exceed expectations.
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
