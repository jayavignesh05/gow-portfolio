"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
    const projects = [
        {
            title: "Wild Bloom",
            category: "Fashion & Editorial",
            image: "/images/portfolio-fashion.png"
        },
        {
            title: "Soft Metals",
            category: "Brand & Commercial",
            image: "/images/portfolio-editorial.png"
        },
        {
            title: "Electric Nights",
            category: "Concert & Live Music",
            image: "/images/portfolio-concert.png"
        },
        {
            title: "Urban Stories",
            category: "Fashion & Editorial",
            image: "/images/portfolio-fashion.png"
        },
        {
            title: "Golden Hour",
            category: "Couples & Weddings",
            image: "/images/portfolio-editorial.png"
        },
        {
            title: "Stage Presence",
            category: "Concert & Live Music",
            image: "/images/portfolio-concert.png"
        }
    ];

    return (
        <section className="relative w-full bg-white px-6 py-20 md:py-32">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                >
                    A look through my lens
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="group cursor-pointer overflow-hidden rounded-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p className="mb-1 text-xs uppercase tracking-wider text-white/80">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
