import HeroSection from "../components/HeroSection";
import AboutIntro from "../components/AboutIntro";
import FeaturedProducts from "../components/FeaturedProducts";
import PhilosophySlider from "../components/PhilosophySlider";
import MarqueeBanner from "../components/MarqueeBanner";
import VideoSection from "../components/VideoSection";
// import ClientsSection from "../components/ClientsSection";
// import ContactSection from "../components/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection
                title="INFRABOND – Build‑Unique‑Future"
                subtitle="AN ISO 9001‑2008 CERTIFIED COMPANY – Construction Chemicals"
                cta="Our Products"
            />
            <AboutIntro />
            <FeaturedProducts />
            <PhilosophySlider />
            <MarqueeBanner />
            <VideoSection />
            {/* <ClientsSection />
            <ContactSection /> */}
        </>
    );
}
