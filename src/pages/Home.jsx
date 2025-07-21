import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutIntro from "../components/AboutIntro";
import FeaturedProducts from "../components/FeaturedProjects";
import PhilosophySlider from "../components/PhilosophySlider";
import MarqueeBanner from "../components/MarqueeBanner";
import VideoSection from "../components/VideoSection";
import ClientsSection from "../components/ClientsSection";

// Animation config
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <HeroSection
        title="AMS - Build-Unique-Future"
        subtitle="AN ISO 9001-2008 CERTIFIED COMPANY - Construction Chemicals"
        cta="Our Products"
      />
      <AboutIntro />
      <FeaturedProducts />
      {/* <PhilosophySlider /> */}
      <MarqueeBanner />
      <VideoSection />
      <ClientsSection />
    </motion.div>
  );
}
