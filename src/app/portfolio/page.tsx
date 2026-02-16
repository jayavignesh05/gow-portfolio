"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

const BlurFadeText = ({
  text,
  className,
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            },
          }}
          transition={{ delay: delayOffset + i * 0.1 }}
          className="inline-block mr-1.5 md:mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header theme="dark" className="relative" />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-12">
        {/* Page Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 mt-12 md:mt-0">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 font-sans mb-6">
            <BlurFadeText text="Browse my work" />
          </h1>
          <p className="text-neutral-500 text-lg md:text-xl max-w-2xl">
            <BlurFadeText
              text="Each project represents a unique perspective and creative journey, capturing moments that tell a story."
              delayOffset={0.4}
            />
          </p>
        </div>

        {/* Vertical List of Projects */}
        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="group block"
            >
              <div className="bg-white rounded-[40px] p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] bg-neutral-100 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay: Plus Icon & Brackets */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>

                  {/* Corner Brackets (Always visible or on hover? Reference usually implies subtle visibility, let's keep them visible but subtle) */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/50 rounded-br-lg" />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 pb-2">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-2 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-neutral-400 font-medium">
                      {project.date}
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center px-6 py-2.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-600">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FloatingNav />
    </main>
  );
}
