"use client";

import { motion } from "framer-motion";

const PRODUCTS = [
    { id: 1, name: "Dune Tee", color: "Sand" },
    { id: 2, name: "Ocean Wash", color: "Faded Blue" },
    { id: 3, name: "Sunset Clay", color: "Burnt Orange" },
];

export function ProductShowcase() {
    return (
        <section className="min-h-screen bg-sand-200 py-24 flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="font-serif text-4xl md:text-6xl text-sand-900 mb-4">The Collection</h2>
                <div className="h-px w-full bg-sand-900/20" />
            </div>

            {/* Horizontal Scroll Area */}
            <div className="flex gap-8 px-6 md:px-12 overflow-x-auto pb-12 snap-x">
                {PRODUCTS.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="min-w-[80vw] md:min-w-[400px] h-[500px] bg-sand-100 rounded-sm relative group cursor-pointer snap-center shadow-lg"
                    >
                        {/* Mockup Placeholder */}
                        <div className="absolute inset-4 border border-sand-900/10 flex items-center justify-center bg-sand-50">
                            <span className="font-serif text-sand-300 text-6xl opacity-20">{product.id}</span>
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-serif text-2xl text-sand-900">{product.name}</h3>
                            <p className="font-sans text-xs tracking-widest text-sand-600 uppercase">{product.color}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
