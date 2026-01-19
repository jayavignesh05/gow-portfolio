"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png" // Placeholder, user will swap
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60 md:text-sm"
                >
                    Photographer
                </motion.p>

                {/* Massive Heading */}
                <motion.h1
                    style={{ y, opacity }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="font-inter text-[18vw] font-bold leading-[0.85] tracking-tighter text-white mix-blend-overlay md:text-[14vw]"
                >
                    AUGUST
                </motion.h1>

                {/* Optional Second Line / Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="absolute bottom-12 left-6 md:left-12"
                >
                    <p className="max-w-xs text-sm leading-relaxed text-white/70 md:text-base">
                        Capturing the essence of moments through light and shadow.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
