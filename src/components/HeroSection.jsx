import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of image + quote pairs
const slides = [
    {
        image: "/hero/hero-image-2.png",
        quote: "Where Quality Meets Concrete.",
    },
    {
        image: "/hero/hero-image-3.png",
        quote: "Concrete Work, Exceptional Results",
    },
    {
        image: "/hero/hero-image-2.png",
        quote: "Concrete Innovations, Endless Possibilities",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#FEE9E4] min-h-screen px-4 pb-4 md:px-8 md:pb-8">
            <div className="relative w-full h-[75vh] rounded-[30px] overflow-hidden">

                {/* Animated Slide Background */}
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={slides[current].image}
                            src={slides[current].image}
                            alt="Slide"
                            className="absolute w-full h-full object-cover"
                            initial={{ opacity: 0.3, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Smooth translucent overlay to soften transitions */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-1000 z-10" />

                {/* Quote Text */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={slides[current].quote}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="text-center text-white text-2xl md:text-4xl font-semibold italic px-6 py-4 bg-black/50 rounded-xl backdrop-blur-md border border-white/10 shadow-xl"
                        >
                            {slides[current].quote}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
