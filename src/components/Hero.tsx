"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center w-full p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
        >
          <h1 className="text-lg md:text-xl font-bold leading-tight tracking-tight">
            August Renner
          </h1>
          <p className="text-xs md:text-sm text-white/80 font-medium">
            Photographer
          </p>
        </motion.div>

        {/* Center Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
          </svg>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          className="bg-white text-teal-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-teal-50 transition-colors"
        >
          Contact
        </motion.button>
      </header>

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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[45vw] max-w-[650px] h-[80vh] z-20 pointer-events-none"
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
