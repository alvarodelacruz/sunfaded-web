"use client";

import { motion } from "framer-motion";

export function AtmosphereWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-sand-50 text-sand-900 selection:bg-sunset-300">
            {/* Noise Overlay */}
            <div className="noise-overlay fixed inset-0 z-50 pointer-events-none opacity-[0.03]" />

            {/* Gradient Orbs */}
            <motion.div
                className="fixed top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-sunset-100/40 rounded-full blur-[120px] pointer-events-none z-0"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-ocean-100/40 rounded-full blur-[100px] pointer-events-none z-0"
                animate={{
                    x: [0, -30, 30, 0],
                    y: [0, 50, -50, 0],
                    scale: [1, 0.9, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
