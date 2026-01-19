"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex h-screen w-full items-center justify-center bg-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Hero Section
                </h1>
                <p className="mt-6 text-lg text-gray-600 md:text-xl">
                    Welcome to the portfolio.
                </p>
            </motion.div>
        </section>
    );
}
