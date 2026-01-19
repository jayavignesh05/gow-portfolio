"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.5"]
    });

    const words = "Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out.".split(" ");

    return (
        <section ref={containerRef} className="relative mx-auto max-w-screen-xl px-6 py-32 md:px-12 md:py-48 bg-white text-black">
            <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-24">
                {/* Label */}
                <div className="w-32 shrink-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                        01 — Philosophy
                    </span>
                </div>

                {/* Text Reveal Container */}
                <div className="flex flex-wrap gap-x-[0.35em] gap-y-2 max-w-4xl">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative text-3xl font-medium leading-[1.15] md:text-5xl lg:text-6xl xl:text-[5rem] tracking-tight">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
}
