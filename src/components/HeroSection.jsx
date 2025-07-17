import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-[#FEE9E4] min-h-screen px-4 pb-4 md:px-8 md:pb-8">
            <div className="rounded-[30px] overflow-hidden relative">
                {/* Background Image */}
                <img
                    src="/hero/hero-image-1.png"
                    alt="INFRABOND Hero"
                    className="w-full h-[75vh] object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-serif tracking-wider mb-2">
                        INFRABOND
                    </h1>
                    <p className="text-xl md:text-2xl italic font-light mb-2">
                        Build ‑ Unique ‑ Future
                    </p>
                    <p className="text-sm md:text-base font-medium">
                        AN ISO 9001:2008 CERTIFIED COMPANY
                    </p>
                    <p className="text-sm md:text-base mt-1">
                        Experts in Construction Chemicals & Concrete Solutions
                    </p>

                    {/* Optional CTA */}
                    <div className="mt-6">
                        <a
                            href="#products"
                            className="inline-block bg-[#d6470b] text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#b23c09] transition"
                        >
                            Explore Our Products
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
