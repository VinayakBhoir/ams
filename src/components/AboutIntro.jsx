import { Sparkles } from "lucide-react";

export default function AboutIntro() {
    return (
        <section className="bg-neutral-light py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wide uppercase">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading text-dark mb-6 leading-tight">
                    Elevating Infrastructure with Smart Chemistry
                </h2>
                <p className="text-lg md:text-xl text-dark leading-relaxed font-light">
                    <span className="text-primary font-semibold">AMS </span> is a certified company,
                    revolutionizing concrete quality in infrastructure projects. We specialize in cutting-edge construction chemicals — 
                    from high-range water-reducing super plasticizers to accelerating and retarding admixtures. Our products enhance 
                    concrete performance, boost durability, and reduce costs through superior workability and mix efficiency.
                </p>
            </div>
        </section>
    );
}
