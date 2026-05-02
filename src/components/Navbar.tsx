"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
        >
            <div className="text-sm font-medium tracking-tight">
                GOW PORTFOLIO
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Layers size={24} className="text-black" />
            </div>

            <Link
                href="/contact"
                className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black backdrop-blur-md transition-colors hover:bg-white"
            >
                Get in touch
            </Link>
        </motion.nav>
    );
}
