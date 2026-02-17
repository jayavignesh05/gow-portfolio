"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";

export function Hero() {
  // 1. Create a reference to the hero section to track scroll
  const containerRef = useRef(null);

  // 2. Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Maps 0 to 1 as you scroll past the hero
  });

  // 3. Create smooth transformations based on scroll progress
  // Background moves down slightly slower than the scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Text scales up massively, moves down, and fades out
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Portrait scales up slightly and moves up slightly for depth
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col justify-between text-white bg-teal-600"
    >
      {/* BACKGROUND LAYERS with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <Image
          src="/images/herobg.avif"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-[5] w-full h-full"
      >
        <Image
          src="/images/herocloud.avif"
          alt="Clouds"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* HEADER */}
      <div className="relative z-50">
        <Header theme="light" />
      </div>

      {/* BACKGROUND TEXT & CORNER BRACKETS */}
      <div className="absolute inset-0 flex items-start pt-[22vh] md:pt-0 md:items-center justify-center pointer-events-none z-10 w-full h-full md:pb-[40vh]">
        <motion.div
          // Keep the initial load animation, but add the scroll transforms to the style prop
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            scale: textScale,
            y: textY,
            opacity: textOpacity,
          }}
          className="relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 origin-center"
        >
          {/* Brackets */}
          <div className="absolute top-0 left-0 w-5 h-5 md:w-6 md:h-6 border-t-2 border-l-2 border-white/80" />
          <div className="absolute top-0 right-0 w-5 h-5 md:w-6 md:h-6 border-t-2 border-r-2 border-white/80" />
          <div className="absolute bottom-0 left-0 w-5 h-5 md:w-6 md:h-6 border-b-2 border-l-2 border-white/80" />
          <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 border-b-2 border-r-2 border-white/80" />

          <h1 className="text-[15vw] md:text-[12vw] font-bold tracking-[-0.06em] leading-none text-white select-none text-center uppercase">
            Gowtham
          </h1>
        </motion.div>
      </div>

      {/* PORTRAIT IMAGE */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        style={{
          scale: portraitScale,
          y: portraitY,
          transformOrigin: "bottom center",
        }}
        /* CHANGES MADE: 
           1. Changed 'bottom-0' to negative values like '-bottom-[8vh] md:-bottom-[12vh]' to pull the image down.
           2. Slightly increased the width (w-[100vw], etc.) and height to compensate for pulling it down, so the face is still clearly visible.
        */
        className="absolute -bottom-[15vh] md:-bottom-[20vh] left-1/2 -translate-x-1/2 w-[100vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] h-[75vh] md:h-[95vh] z-20 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/heromain.avif"
            alt="Portrait"
            fill
            className="object-contain object-bottom"
            style={{
              /* CHANGES MADE:
                 Adjusted the mask so the fade starts earlier (65%) and goes fully transparent by 95%.
                 This perfectly blends the cut edge into the background.
              */
              maskImage:
                "linear-gradient(to bottom, black 65%, transparent 95%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 65%, transparent 95%)",
            }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
