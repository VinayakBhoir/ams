import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    title: "Concrete Philosophy",
    subtitle: "Enhancing Workability Scientifically",
    content: `Cement and fine particles tend to flocculate when mixed with water, trapping water and increasing viscosity.
    Our advanced admixtures release trapped water by dispersing cement particles using highly charged anions,
    forming monolayers that prevent floc formation. This process directly reduces viscosity and significantly
    enhances concrete workability and fluidity — without compromising strength.`,
  },
  {
    title: "Smart Chemistry, Solid Results",
    subtitle: "Precision in Every Pour",
    content: `At INFRABOND, our products are not just mixes — they are engineered solutions.
    Through molecular-level dispersion and fine-tuned setting control, our admixtures ensure consistency,
    strength, and efficiency at every stage of the build. We make concrete work smarter.`,
  },
];

export default function PhilosophySlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right"); // used to animate left/right

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#d6470b] text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#f5cdbf] text-[#1f2937] rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition duration-300 shadow-md z-10"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#f5cdbf] text-[#1f2937] rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition duration-300 shadow-md z-10"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Wrapper */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          key={current} // triggers animation
          className={`grid md:grid-cols-3 gap-12 items-center transform transition-transform duration-500 ease-in-out ${
            direction === "right" ? "translate-x-0 animate-slideInRight" : "translate-x-0 animate-slideInLeft"
          }`}
        >
          {/* Left Title Block */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-2">Our</h2>
            <h3 className="text-3xl md:text-4xl font-serif italic">{slides[current].title}</h3>
          </div>

          {/* Right Text Block */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-xl md:text-2xl italic font-serif mb-4">
              {slides[current].subtitle}
            </h4>
            <p className="text-base md:text-lg leading-relaxed text-white/90 whitespace-pre-line">
              {slides[current].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
