"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax & Fade Effects
    // Direct mapping for instant, natural feel (no spring lag)
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const blur = useTransform(scrollY, [0, 500], ["0px", "10px"]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div ref={containerRef} className="relative h-full w-full overflow-hidden">
            <motion.div
                style={{ y, opacity, filter: blur, scale }}
                className="absolute inset-0 w-full h-full will-change-transform"
            >
                <Image
                    src="/hero.png"
                    alt="Sunfaded Coast"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-serif text-[8vw] md:text-[6vw] font-bold leading-none text-sand-50 tracking-[0.15em] uppercase drop-shadow-lg"
                >
                    SUNFADED
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="font-sans text-sm md:text-base text-sand-100 mt-6 tracking-[0.3em] uppercase opacity-80"
                >
                    Worn By The Elements
                </motion.p>
            </div>
        </div>
    );
}
