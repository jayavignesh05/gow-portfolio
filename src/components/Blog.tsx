"use client";

import { motion } from "framer-motion";
import { Camera, Lightbulb, Palette } from "lucide-react";

export function Blog() {
    const articles = [
        {
            title: "Mastering Natural Light",
            excerpt: "Learn how to use natural light to create stunning, professional-quality photographs.",
            icon: Lightbulb,
            category: "Tips & Techniques"
        },
        {
            title: "The Art of Composition",
            excerpt: "Essential composition techniques that every photographer should know.",
            icon: Camera,
            category: "Photography Basics"
        },
        {
            title: "Color Grading Essentials",
            excerpt: "Transform your photos with professional color grading and editing techniques.",
            icon: Palette,
            category: "Post-Processing"
        }
    ];

    return (
        <section className="relative w-full bg-white px-6 py-20 md:py-32">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                >
                    Behind the lens
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => {
                        const Icon = article.icon;
                        return (
                            <motion.article
                                key={article.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="group cursor-pointer rounded-2xl border border-gray-200 p-8 transition-all hover:border-black hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:scale-110">
                                    <Icon className="h-8 w-8" />
                                </div>

                                {/* Category */}
                                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                                    {article.category}
                                </p>

                                {/* Title */}
                                <h3 className="mb-3 text-2xl font-semibold tracking-tight">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="leading-relaxed text-gray-600">
                                    {article.excerpt}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
