"use client";

import { useState } from "react";

import { projects } from "@/data/projects";
import ExportedImage from "next-image-export-optimizer";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { Header } from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState<"Photos" | "Videos">("Photos");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photoProjects = projects.filter((p) => !p.video);
  const videoProjects = projects.filter((p) => !!p.video);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header theme="dark" className="relative" />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-12">
        {/* Page Title */}
        <div className="flex flex-col items-center text-center mb-12 mt-12 md:mt-0">
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

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-full shadow-sm border border-neutral-100">
            <button
              onClick={() => setActiveTab("Photos")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "Photos"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Photography
            </button>
            <button
              onClick={() => setActiveTab("Videos")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "Videos"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Videography
            </button>
          </div>
        </div>

        {/* Content Section */}
        {activeTab === "Photos" ? (
          /* Vertical List of Photo Projects */
          <div className="flex flex-col gap-16 md:gap-32">
            {photoProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group block"
              >
                <div className="bg-white rounded-[40px] p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] bg-neutral-100 mb-6">
                    <ExportedImage src={project.image}
                      alt={project.title}
                      fill sizes="100vw"
                      priority={project.id === "Shore-Meets-the-Soul"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay: Plus Icon & Brackets */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Plus className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Corner Brackets */}
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
        ) : (
          /* Video Projects - Different Cinematic Grid Design */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-black rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer"
                onClick={() => setSelectedVideo(project.video!)}
              >
                {/* Cinematic Video Container */}
                <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden">
                  <video 
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white transition-colors duration-500">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1 group-hover:border-l-black transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                {/* Dark Cinematic Content Block */}
                <div className="p-5 md:p-6 bg-black z-10 flex flex-col justify-between items-start">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(project.video!)}
                    className="inline-flex items-center text-xs font-medium text-white/70 hover:text-white transition-colors mt-auto"
                  >
                    Watch Video →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <FloatingNav />

      {/* Video Modal Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-white/20 transition-all rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
