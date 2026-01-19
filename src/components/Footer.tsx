"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="blue-vignette relative w-full bg-black text-white">
            {/* Main Footer Content */}
            <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/footer-august.png"
                        alt="Get in touch"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-32 md:py-48">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                                Get in touch
                            </h2>
                            <p className="mb-12 text-lg text-white/70 md:text-xl">
                                Ready to create something beautiful together? Let's talk about your next project.
                            </p>

                            {/* Contact Info */}
                            <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
                                <a
                                    href="mailto:hello@augustrenner.com"
                                    className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span>hello@augustrenner.com</span>
                                </a>
                                <div className="h-4 w-px bg-white/30" />
                                <a
                                    href="tel:+1234567890"
                                    className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>+1 (234) 567-890</span>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="mb-12 flex items-center justify-center gap-6">
                                <a
                                    href="#"
                                    className="transition-transform hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a
                                    href="#"
                                    className="transition-transform hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a
                                    href="#"
                                    className="transition-transform hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="relative border-t border-white/10 px-6 py-8">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
                    <p>© 2026 August Renner. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="transition-colors hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
