import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const statsData = [
  { label: "Projects Completed", value: 100, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Concrete Mix Designs", value: 50, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
];

const StatBox = ({ label, value, suffix }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500; // in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    controls.start({ opacity: 1, y: 0 });

    return () => clearInterval(timer);
  }, [value, controls]);

  return (
    <motion.div
      className="text-center p-6 bg-white rounded-lg shadow-lg w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-blue-600">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Our Achievements
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {statsData.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
