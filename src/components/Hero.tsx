"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between text-white">
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.avif"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-5">
        <Image
          src="/images/herocloud.avif"
          alt="Clouds"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* ========================================= */}
      {/* EXACT MAIN PAGE CONTENT (Matches your image) */}
      {/* ========================================= */}

      {/* HEADER: Left Text, Center Icon, Right Button */}
      {/* HEADER: Shared Component */}
      <Header theme="light" />

      {/* BACKGROUND TEXT & CORNER BRACKETS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
          className="relative inline-flex items-center justify-center p-4 md:p-8"
        >
          {/* Brackets framing the text */}
          <svg
            className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 text-white/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 3H3v3" />
          </svg>
          <svg
            className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 text-white/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 3h3v3" />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 text-white/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 21H3v-3" />
          </svg>
          <svg
            className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 text-white/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 21h3v-3" />
          </svg>

          <h1 className="text-[22vw] font-bold tracking-tighter text-[#E0F2F1] leading-none select-none">
            AUGUST
          </h1>
        </motion.div>
      </div>

      {/* PORTRAIT IMAGE */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2.0 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[45vw] max-w-[650px] h-[70vh] md:h-[80vh] z-20 pointer-events-none"
      >
        <div className="relative w-full h-full">
          {/* Replace this src with a transparent PNG of the model, 
            or keep this Unsplash image to see the gradient mask effect! 
          */}
          <Image
            src="/images/heromain.avif"
            alt="Portrait"
            fill
            className="object-cover object-top"
            style={{
              // This creates the white fade effect at the bottom!
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
