"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Briefcase, BookOpen, User, Mail } from "lucide-react";

export function FloatingNav() {
    const navItems = [
        { name: "Home", icon: Home, href: "/" },
        { name: "Portfolio", icon: Briefcase, href: "#portfolio" },
        { name: "Blog", icon: BookOpen, href: "#blog" },
        { name: "About", icon: User, href: "/about" },
        { name: "Contact", icon: Mail, href: "/contact" }
    ];

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2 }}
            className="frosted-glass fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3 shadow-2xl"
        >
            <ul className="flex items-center gap-2 md:gap-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-black transition-all hover:bg-black hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                                <span className="hidden md:inline">{item.name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </motion.nav>
    );
}
