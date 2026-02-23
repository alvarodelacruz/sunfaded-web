
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
    const { scrollY } = useScroll();

    // Transform color/opacity based on scroll position
    const textColor = useTransform(scrollY, [0, 800], ["#fdfcf8", "#3f2e26"]);
    const whiteLogoOpacity = useTransform(scrollY, [0, 800], [1, 0]);
    const blackLogoOpacity = useTransform(scrollY, [0, 800], [0, 1]);

    const underlineColor = useTransform(scrollY, [0, 800], ["#fdfcf8", "#3f2e26"]);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-6 md:py-8 transition-all duration-300 pointer-events-none"
        >
            <div className="w-[92%] max-w-[1920px] mx-auto grid grid-cols-[1fr_auto_1fr] items-start pt-2 pointer-events-auto">
                {/* Left: Logo */}
                <div className="relative z-50 justify-self-start">
                    <Link href="/" className="active:scale-95 transition-transform opacity-90 hover:opacity-100 no-underline block relative mt-[-4px]">
                        <motion.div style={{ opacity: whiteLogoOpacity }} className="relative flex items-center justify-start pointer-events-none">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo-white.png"
                                alt="SUNFADED"
                                className="h-[40px] md:h-[55px] w-auto object-contain object-left"
                            />
                        </motion.div>
                        <motion.div style={{ opacity: blackLogoOpacity }} className="absolute inset-0 flex items-center justify-start pointer-events-none">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo-black.png"
                                alt="SUNFADED"
                                className="h-[80px] md:h-[95px] w-auto object-contain object-left"
                            />
                        </motion.div>
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
                            className="transition-colors hover:opacity-80 hover:drop-shadow-sm no-underline whitespace-nowrap relative group inline-block pt-1"
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
                <div className="relative z-50 justify-self-end flex items-center text-[10px] md:text-[11px] font-sans tracking-[0.25em] font-medium uppercase gap-6 md:gap-8 pt-1">
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

