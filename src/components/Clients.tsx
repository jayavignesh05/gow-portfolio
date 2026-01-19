"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export function Clients() {
    return (
        <section className="relative w-full bg-white px-6 py-20 md:py-32">
            <div className="mx-auto max-w-6xl">
                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                        Trusted by brands & creatives worldwide
                    </h2>

                    {/* Laurel wreaths - decorative */}
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="text-2xl">🏆</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-black text-black" />
                            ))}
                        </div>
                        <div className="text-2xl">🏆</div>
                    </div>

                    {/* Stats */}
                    <div className="mb-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-black text-black" />
                            <span className="font-medium">5.0 rating</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300" />
                        <div>
                            <span className="font-medium">500+ satisfied clients</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300" />
                        <div>
                            <span className="font-medium">2000+ projects completed</span>
                        </div>
                    </div>

                    {/* Avatar group */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative h-16 w-64">
                            <Image
                                src="/images/avatars-group.png"
                                alt="Satisfied clients"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
