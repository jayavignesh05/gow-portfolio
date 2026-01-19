"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full bg-white text-black selection:bg-purple-200">
            <Navbar />

            <section className="px-6 py-32 md:px-12 md:py-48">
                <div className="mx-auto max-w-7xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-16 text-5xl font-bold tracking-tighter md:text-8xl"
                    >
                        About Me.
                    </motion.h1>

                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-100">
                                {/* Placeholder for About Image */}
                                <div className="h-full w-full bg-neutral-200" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="mb-6 text-2xl font-medium">Profile</h2>
                            <p className="mb-8 text-lg text-neutral-500">
                                I am a photographer based in Berlin with a passion for capturing the beauty in the ordinary. My work is driven by a desire to tell stories through visual imagery, focusing on light, composition, and emotion.
                            </p>
                            <p className="mb-12 text-lg text-neutral-500">
                                With over 10 years of experience, I have worked with brands and individuals worldwide to create compelling visual narratives that resonate.
                            </p>

                            <h2 className="mb-6 text-2xl font-medium">Experience</h2>
                            <ul className="mb-12 space-y-4 text-neutral-500">
                                <li className="flex justify-between border-b border-neutral-100 pb-2">
                                    <span>Freelance Photographer</span>
                                    <span>2018 — Present</span>
                                </li>
                                <li className="flex justify-between border-b border-neutral-100 pb-2">
                                    <span>Studio Manager</span>
                                    <span>2015 — 2018</span>
                                </li>
                                <li className="flex justify-between border-b border-neutral-100 pb-2">
                                    <span>Assistant Photographer</span>
                                    <span>2013 — 2015</span>
                                </li>
                            </ul>

                            <a href="/contact" className="inline-flex items-center gap-2 text-lg font-medium text-black hover:text-neutral-600">
                                Let&apos;s work together <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingNav />
        </main>
    );
}
