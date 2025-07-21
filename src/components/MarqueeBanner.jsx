import React from 'react';
import './MarqueeBanner.css'; // Custom animation styles

export default function MarqueeBanner() {
    return (
        <section className="bg-accent border-y-8 border-primary overflow-hidden py-6">
            <div className="marquee flex whitespace-nowrap animate-marquee gap-32">
                {[
                    "Precision in Every Pour.",
                    "Solutions That Strengthen Concrete.",
                    "Quality That Endures Time.",
                    "Concrete Science for Real Strength."
                ].map((text, idx) => (
                    <h2
                        key={idx}
                        className="text-2xl md:text-4xl lg:text-5xl font-heading text-dark flex-shrink-0"
                    >
                        {text.split(' ').map((word, i) => {
                            const highlight = ["Every", "Strengthen", "Endures", "Real"];
                            return (
                                <span
                                    key={i}
                                    className={highlight.includes(word) ? "italic text-primary" : ""}
                                >
                                    {word + " "}
                                </span>
                            );
                        })}
                    </h2>
                ))}
            </div>
        </section>
    );
}
