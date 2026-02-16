"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Placeholder images for the 5 intro frames
const introImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80",
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = "hidden";

    // Unlock scroll on unmount (or when component is removed)
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1.0, delay: 2.2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-[#F4F4F5] flex items-center justify-center pointer-events-auto"
    >
      {/* Central Aperture Icon (Spins in, spins & shrinks out) */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0], // Grows to 1, holds, shrinks back to 0
          rotate: [-180, 0, 0, 180], // Spins in, holds, spins out
        }}
        transition={{
          duration: 2.5, // Matches the image animation roughly
          times: [0, 0.3, 0.6, 1], // Timing to match the hold phase
          ease: "easeInOut",
        }}
        className="absolute z-10 text-black mb-10"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
        </svg>
      </motion.div>

      {introImages.map((src, i) => {
        let xHold, yHold, rot;

        switch (i) {
          case 0:
            xHold = -180;
            yHold = -120;
            rot = -15;
            break;
          case 1:
            xHold = 180;
            yHold = -140;
            rot = 15;
            break;
          case 2:
            xHold = 140;
            yHold = 160;
            rot = -10;
            break;
          case 3:
            xHold = -140;
            yHold = 160;
            rot = 10;
            break;
          case 4:
            xHold = 0;
            yHold = -220;
            rot = 5;
            break;
          default:
            xHold = 0;
            yHold = 0;
            rot = 0;
        }

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0,
              rotate: 0,
              filter: "blur(0px)",
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 1.3],
              x: [0, xHold, xHold, xHold * 6],
              y: [0, yHold, yHold, yHold * 6],
              rotate: [0, rot, rot, rot + (rot > 0 ? 15 : -15)],
              filter: ["blur(0px)", "blur(0px)", "blur(0px)", "blur(10px)"], // Added Blur on exit
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.25, 0.4, 1],
              ease: [[0.16, 1, 0.3, 1], "linear", [0.25, 0.1, 0.25, 1]],
            }}
            className="absolute w-[160px] h-[200px] bg-white border-[6px] border-white shadow-xl origin-center rounded-sm"
            style={{ zIndex: 10 + i }}
          >
            <div className="relative w-full h-[85%] bg-gray-200 overflow-hidden">
              <Image src={src} alt="intro" fill className="object-cover" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
