"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
}

export function AnimatedTitle({ title }: AnimatedTitleProps) {
  return (
    <motion.h1
      className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mt-2"
      initial="hidden"
      animate="visible"
    >
      {title.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-4 md:mr-6"
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(10px)",
              y: 20,
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            },
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.20,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
