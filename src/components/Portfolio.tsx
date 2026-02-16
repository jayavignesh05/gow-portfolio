"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "Wild Bloom",
    category: "Fashion & Editorial",
    date: "2024",
    image: "/images/portfolio-fashion.png",
    description:
      "A deep dive into avant-garde fashion photography in natural settings.",
  },
  {
    title: "Soft Metals",
    category: "Brand & Commercial",
    date: "2024",
    image: "/images/portfolio-editorial.png",
    description:
      "Commercial campaign focusing on metallic textures and soft lighting.",
  },
  {
    title: "Electric Nights",
    category: "Concert & Live Music",
    date: "2023",
    image: "/images/portfolio-concert.png",
    description:
      "Capturing the raw energy of live performances and backstage moments.",
  },
  {
    title: "Urban Stories",
    category: "Fashion & Editorial",
    date: "2023",
    image: "/images/portfolio-fashion.png",
    description: "Street style photography documenting the pulse of the city.",
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-neutral-50 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section - Centered */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="mb-6 inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-900 shadow-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 font-sans mb-6">
            A look through my lens
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl max-w-2xl">
            A collection of my best work across different styles and
            environments. Each project represents a unique perspective and
            creative journey.
          </p>
        </div>

        {/* Standard Grid Layout */}
        <div className="relative">
          {/* Row 1 - Sticky */}
          <div className="sticky top-24 z-0 mb-12 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-8 px-12">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card {...project} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2 - Overlay */}
          <div className="relative z-10 bg-neutral-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-8 px-12">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  date: string;
  category: string;
  image: string;
}

const Card = ({ title, date, category, image }: CardProps) => {
  return (
    <div className="group relative h-[500px] w-full flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:h-[600px]">
      {/* Image Container */}
      <div className="relative h-[80%] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

        {/* Center Plus Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        {/* Corner Brackets Decoration */}
        <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="mt-4 flex h-[20%] items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
          <span className="text-sm text-neutral-500">{date}</span>
        </div>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
          {category}
        </span>
      </div>
    </div>
  );
};
