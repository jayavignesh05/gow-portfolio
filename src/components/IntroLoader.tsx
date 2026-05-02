"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Aperture } from "lucide-react";

// Placeholder images for the 5 intro frames
const introImages = [
  "/images/intro/i1.jpg",
  "/images/intro/i2.jpg",
  "/images/intro/i3.jpeg",
  "/images/intro/i4.jpeg",
  "/images/intro/i5.jpeg",
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  useEffect(() => {
    // Lock scroll on
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
        <Aperture size={40} />
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
              <Image src={src} alt="intro" fill sizes="160px" priority className="object-cover" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
