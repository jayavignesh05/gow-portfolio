"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
    return (
        <section id="portfolio" className="relative bg-white px-6 py-32 md:px-12 md:py-48 mb-32">
            <div className="mx-auto max-w-screen-xl">
                {/* Header */}
                <div className="mb-24 flex items-end justify-between">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-medium tracking-tight text-black md:text-7xl lg:text-8xl"
                    >
                        Selected<br />Work
                    </motion.h2>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 md:block"
                    >
                        02 — Portfolio
                    </motion.span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
                    {/* Item 1 - Large vertical or square */}
                    <PortfolioItem
                        title="Wild Bloom"
                        category="Fashion & Editorial"
                        src="/images/gallery_1.png"
                        className="md:col-span-2"
                        aspect="aspect-[16/9]"
                    />

                    {/* Item 2 */}
                    <PortfolioItem
                        title="Soft Metals"
                        category="Brand & Commercial"
                        src="/images/gallery_2.png"
                    />

                    {/* Item 3 */}
                    <PortfolioItem
                        title="Coastal Slow"
                        category="Portfolio"
                        src="/images/gallery_3.png"
                        delay={0.2}
                    />
                </div>
            </div>
        </section>
    );
}

function PortfolioItem({ title, category, src, className = "", aspect = "aspect-[4/3]", delay = 0 }: { title: string, category: string, src: string, className?: string, aspect?: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col gap-6 ${className}`}
        >
            <div className={`relative w-full overflow-hidden rounded-lg bg-neutral-100 ${aspect}`}>
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Optional overlay on hover if needed, reference usually keeps it clean */}
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-medium text-black md:text-3xl mb-1">{title}</h3>
                    <p className="text-sm text-neutral-500">{category}</p>
                </div>
                <div className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}
