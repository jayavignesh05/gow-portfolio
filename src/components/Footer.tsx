"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative bg-black py-24 text-white overflow-hidden md:py-32">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12">

                {/* Main CTA */}
                <div className="flex flex-col gap-16 md:flex-row md:justify-between md:items-end mb-32">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl mb-8"
                        >
                            Let&apos;s work<br />together.
                        </motion.h2>
                        <p className="text-xl text-neutral-400">
                            Available for freelance projects and collaborations worldwide.
                        </p>
                    </div>

                    <div>
                        <a
                            href="mailto:hello@example.com"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium transition-colors hover:bg-white hover:text-black"
                        >
                            Get in touch
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path d="M1 15L15 1M15 1H5M15 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-16">
                    <div className="col-span-2 md:col-span-1">
                        <span className="block mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">Socials</span>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <span className="block mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500">Pages</span>
                        <div className="flex flex-col gap-4">
                            <a href="/" className="text-neutral-300 hover:text-white transition-colors">Home</a>
                            <a href="#portfolio" className="text-neutral-300 hover:text-white transition-colors">Work</a>
                            <a href="#about" className="text-neutral-300 hover:text-white transition-colors">About</a>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-2 flex flex-col justify-between items-start md:items-end">
                        <p className="text-sm text-neutral-600">
                            &copy; {new Date().getFullYear()} Aperture Template. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
