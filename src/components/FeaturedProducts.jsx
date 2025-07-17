import { Link } from "react-router-dom";

const products = [
    {
        name: "QC Crote 2001",
        description: "High-range water-reducing super plasticizer with 25% water reduction capacity.",
        image: "/products/super-plasticizer-1.jpg",
    },
    {
        name: "QC Crote 1000",
        description: "Site mix water-reducing plasticizer for improved workability and cohesiveness.",
        image: "/products/super-plasticizer-2.jpg",
    },
    {
        name: "FAST HARD",
        description: "Accelerating hardener for faster setting and improved flexural strength.",
        image: "/products/accelerating-chemicals-2.jpg",
    },
    {
        name: "PAVAR SHINE",
        description: "High-gloss coating for rubber-moulded paving blocks, enhancing aesthetics.",
        image: "/products/paver-shine-2.jpg",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-[#ffe9e2] py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-14">
                    Our Products
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center transition-transform hover:scale-105 duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-2xl shadow-lg object-cover w-full h-64 mb-4"
                            />
                            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-700 italic text-base md:text-lg max-w-md mx-auto">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Link
                        to="/products"
                        className="inline-block bg-[#374151] text-white font-medium text-lg px-6 py-3 rounded-full shadow hover:bg-[#d6470b] transition-colors duration-300"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
