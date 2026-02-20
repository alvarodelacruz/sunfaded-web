
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
    const { scrollY } = useScroll();

    // Transform color based on scroll position (white -> dark brown)
    // Assuming hero is ~100vh, switch color as we pass it
    const textColor = useTransform(scrollY, [0, 800], ["#fdfcf8", "#3f2e26"]);

    // Also animate the underline helper color
    const underlineColor = useTransform(scrollY, [0, 800], ["#fdfcf8", "#3f2e26"]);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-6 md:py-8 transition-all duration-300 pointer-events-none"
        >
            <div className="w-[92%] max-w-[1920px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center pointer-events-auto">
                {/* Left: Logo - Small & Elegant */}
                <div className="relative z-50 justify-self-start">
                    <Link href="/" className="active:scale-95 transition-transform no-underline block">
                        <motion.h1 style={{ color: textColor }} className="font-serif text-xs md:text-sm font-bold tracking-[0.15em] uppercase drop-shadow-md whitespace-nowrap">SUNFADED</motion.h1>
                    </Link>
                </div>

                {/* Center: Nav Links */}
                <nav
                    className="justify-self-center flex items-center text-xs md:text-sm font-sans tracking-[0.25em] font-medium uppercase"
                    style={{ gap: '3rem' }}
                >
                    {["Shop", "Collections", "About Us"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                            className="transition-colors hover:opacity-80 hover:drop-shadow-sm no-underline whitespace-nowrap relative group inline-block"
                        >
                            <motion.span style={{ color: textColor }}>{item}</motion.span>
                            {/* Hover line at the top */}
                            <motion.span
                                style={{ backgroundColor: underlineColor }}
                                className="absolute -top-1 left-0 right-0 h-[1px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                            />
                        </Link>
                    ))}
                </nav>

                {/* Right: Actions */}
                <div className="relative z-50 justify-self-end flex items-center text-[10px] md:text-[11px] font-sans tracking-[0.25em] font-medium uppercase gap-6 md:gap-8">
                    <button className="bg-transparent border-none outline-none flex items-center gap-2 cursor-pointer">
                        <motion.span style={{ color: textColor }}>Cart (0)</motion.span>
                    </button>
                    <button className="bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity">
                        {/* Pass color explicitly to icon via style */}
                        <motion.div style={{ color: textColor }}>
                            <Menu className="w-5 h-5 md:w-6 md:h-6" color="currentColor" />
                        </motion.div>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

