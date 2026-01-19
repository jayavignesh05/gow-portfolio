"use client";

import { motion } from "framer-motion";

const clients = [
    "Prisma Design", "Altura Apparel", "Meridian Tech", "Style Quarterly", "Vogue", "Vanity Fair", "Real Estate Dev", "Jewelry Design"
];

export function Clients() {
    return (
        <section className="bg-white py-32 md:py-48 text-black">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <p className="mb-16 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Trusted by market leaders
                </p>

                <div className="grid grid-cols-2 gap-12 sm:gap-16 md:grid-cols-4 md:gap-24 lg:gap-32">
                    {clients.map((client, i) => (
                        <motion.div
                            key={client}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center opacity-40 transition-all duration-500 hover:opacity-100 hover:scale-105"
                        >
                            {/* Placeholder Logotype - In real app, use SVGs */}
                            <span className="text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">{client}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
