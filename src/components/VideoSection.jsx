import React from 'react';

export default function VideoSection() {
    return (
        <section className="bg-primary text-white text-center px-4 py-20 md:py-24">
            <h2 className="text-3xl md:text-5xl font-heading italic mb-6">
                How We Improve Concrete
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
                At <strong>AMS </strong>, we go beyond chemicals — we offer complete concrete solutions.
                Our approach includes technical consultation, custom mix designs, quality control plans, and
                24×7 expert support. Watch how our process transforms concrete performance and helps
                maximize durability and cost-efficiency in every project.
            </p>
            <div className="flex justify-center">
                <iframe
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video
                    title="AMS - Concrete Solutions Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full max-w-5xl aspect-video rounded-2xl shadow-xl"
                ></iframe>
            </div>
        </section>
    );
}
