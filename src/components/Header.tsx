"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Aperture } from "lucide-react";

interface HeaderProps {
  theme?: "light" | "dark";
  className?: string;
}

export function Header({ theme = "light", className }: HeaderProps) {
  const isLight = theme === "light";

  // Colors based on theme
  const textColor = isLight ? "text-white" : "text-neutral-900";
  const subTextColor = isLight ? "text-white/80" : "text-neutral-500";
  const iconColor = isLight ? "opacity-80" : "text-neutral-400"; // SVG handling slightly different in current code, harmonizing
  const buttonBg = isLight ? "bg-white" : "bg-neutral-900";
  const buttonText = isLight ? "text-teal-900" : "text-white";
  const buttonHover = isLight ? "hover:bg-teal-50" : "hover:bg-neutral-800";

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-30 flex justify-between items-center w-full p-6 md:p-10",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Link href="/">
          <h1
            className={cn(
              "text-lg md:text-xl font-bold leading-tight tracking-tight",
              textColor,
            )}
          >
            Gowtham
          </h1>
          <p className={cn("text-xs md:text-sm font-medium", subTextColor)}>
            Photographer
          </p>
        </Link>
      </motion.div>

      {/* Center Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 hidden md:block"
      >
        <Aperture
          size={24}
          className={cn(isLight ? "text-white opacity-80" : "text-neutral-400")}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Link
          href="/contact"
          className={cn(
            "px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-sm transition-colors block",
            buttonBg,
            buttonText,
            buttonHover,
          )}
        >
          Contact
        </Link>
      </motion.div>
    </header>
  );
}
