const clientLogos = [
    { id: 1, src: "/logos/logo1.png", alt: "Client 1" },
    { id: 2, src: "/logos/logo2.png", alt: "Client 2" },
    { id: 3, src: "/logos/logo3.png", alt: "Client 3" },
    { id: 4, src: "/logos/logo4.png", alt: "Client 4" },
    { id: 5, src: "/logos/logo5.png", alt: "Client 5" },
    { id: 6, src: "/logos/logo6.png", alt: "Client 6" },
    // Add more logos as needed
]

export default function ClientsSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Trusted by Leading Clients
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
                    {clientLogos.map((logo) => (
                        <div key={logo.id} className="flex items-center justify-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-16 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
