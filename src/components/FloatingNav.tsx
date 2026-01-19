"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Assuming lucide-react is installed or I should use SVG directly if not. 
// I'll use SVGs directly to be safe if I can't be sure of icons, but lucide is standard in shadcn usually. 
// I will assume lucide-react is available or standard icons. 
// Actually, to be safe and "inch by inch", I'll use simple SVG icons inline to avoid dependency error if not installed.

const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "/about" },
];

export function FloatingNav() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
        >
            <nav className={cn(
                "flex items-center gap-1 rounded-full p-1.5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500",
                "bg-black/80 supports-[backdrop-filter]:bg-black/60", // Dark transparent black
                isMobile && !isOpen ? "w-auto px-4 py-3" : ""
            )}>

                {/* Mobile Trigger */}
                {isMobile ? (
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-white tracking-widest text-xs">APERTURE</span>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                        >
                            <div className="flex flex-col gap-1.5 w-4">
                                <span className={`h-0.5 w-full bg-white block transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`h-0.5 w-full bg-white block transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`h-0.5 w-full bg-white block transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                ) : (
                    links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                                pathname === link.href || (pathname === '/' && link.href === '/')
                                    ? "text-black"
                                    : "text-white/70 hover:text-white"
                            )}
                        >
                            {(pathname === link.href || (pathname === '/' && link.href === '/')) && (
                                <motion.div
                                    layoutId="bubble"
                                    className="absolute inset-0 z-[-1] rounded-full bg-white"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))
                )}

                {/* Contact Button (Desktop) */}
                {!isMobile && (
                    <Link
                        href="#contact"
                        className="ml-2 rounded-full bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
                    >
                        Contact
                    </Link>
                )}
            </nav>

            {/* Mobile Menu Dropup */}
            {isMobile && isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: -16, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="absolute bottom-full left-0 mb-4 w-48 -translate-x-1/2 rounded-2xl bg-black/90 p-2 backdrop-blur-xl border border-white/10"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                    <div className="flex flex-col gap-1">
                        {links.map(link => (
                            <Link key={link.name} href={link.href} className="block rounded-lg px-4 py-3 text-sm font-medium text-white hover:bg-white/10 text-center">
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact" className="block rounded-lg bg-white px-4 py-3 text-sm font-medium text-black text-center mt-2">
                            Contact
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}


