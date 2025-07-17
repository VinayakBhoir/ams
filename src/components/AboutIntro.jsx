import { Sparkles } from "lucide-react";

export default function AboutIntro() {
    return (
        <section className="bg-[#ffe9e2] py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4 text-[#d6470b]">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wide uppercase">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 leading-tight">
                    Elevating Infrastructure with Smart Chemistry
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                    <span className="text-[#d6470b] font-semibold">INFRABOND</span> is an ISO 9001:2008 certified company,
                    revolutionizing concrete quality in infrastructure projects. We specialize in cutting-edge construction chemicals —
                    from high-range water-reducing super plasticizers to accelerating and retarding admixtures. Our products enhance
                    concrete performance, boost durability, and reduce costs through superior workability and mix efficiency.
                </p>
            </div>
        </section>
    );
}
