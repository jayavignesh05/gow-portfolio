"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
    return (
        <section className="bg-white px-6 py-32 md:px-12 md:py-48 mb-20">
            <div className="mx-auto max-w-4xl text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 text-4xl font-medium leading-tight tracking-tight text-black md:text-6xl"
                >
                    Reach out now and let&apos;s discuss bringing your vision to life with photography that truly captures what matters.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95">
                        Get in touch
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
