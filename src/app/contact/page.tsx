"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";

export default function ContactPage() {
    return (
        <main className="min-h-screen w-full bg-white text-black selection:bg-purple-200">
            <Navbar />

            <section className="px-6 py-32 md:px-12 md:py-48">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 text-5xl font-bold tracking-tighter md:text-7xl"
                    >
                        Get in touch.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-16 text-xl text-neutral-500"
                    >
                        Available for freelance projects and collaborations.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto flex max-w-md flex-col gap-6 text-left"
                    >
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-500">Name</label>
                            <input type="text" id="name" className="w-full border-b border-neutral-200 py-3 outline-none transition-colors focus:border-black" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-500">Email</label>
                            <input type="email" id="email" className="w-full border-b border-neutral-200 py-3 outline-none transition-colors focus:border-black" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-500">Message</label>
                            <textarea id="message" rows={4} className="w-full resize-none border-b border-neutral-200 py-3 outline-none transition-colors focus:border-black" placeholder="Tell me about your project..." />
                        </div>

                        <button type="submit" className="mt-8 w-full rounded-full bg-black py-4 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </section>

            <Footer />
            <FloatingNav />
        </main>
    );
}
