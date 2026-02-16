"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

interface PreloaderProps {
    finishLoading: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ finishLoading }) => {
    useEffect(() => {
        // Trigger completion after 2.5 seconds (allowing entrance duration + pause)
        const timer = setTimeout(() => {
            finishLoading();
        }, 2500);
        return () => clearTimeout(timer);
    }, [finishLoading]);

    // Polaroid positions (scattered)
    const polaroids = [
        { rotate: -15, x: -120, y: -80, delay: 0.1 },
        { rotate: 10, x: 100, y: -100, delay: 0.2 },
        { rotate: -8, x: -140, y: 80, delay: 0.3 },
        { rotate: 12, x: 120, y: 70, delay: 0.4 },
        { rotate: 4, x: 0, y: -130, delay: 0.15 },
    ];

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
            }}
        >
            {/* Container for Logo + Polaroids to zoom out together */}
            <motion.div
                initial={{ scale: 1, opacity: 1 }}
                exit={{
                    scale: 0.5,
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeInOut" }
                }}
                className="relative flex items-center justify-center"
            >
                {/* Center Logo */}
                <div className="relative z-20 flex h-24 w-24 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-16 w-16 text-black"
                    >
                        <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19H4.5L12 5.5z" />
                    </svg>
                </div>

                {/* Polaroids */}
                {polaroids.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white shadow-xl p-2 w-32 h-40 z-10"
                        style={{ top: "50%", left: "50%", marginTop: -80, marginLeft: -64 }} // Center pivot
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            x: 0,
                            y: 0,
                            rotate: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: p.x,
                            y: p.y,
                            rotate: p.rotate
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "backOut",
                            delay: p.delay
                        }}
                    >
                        <div className="h-28 w-full bg-gray-200" /> {/* Image placeholder */}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
