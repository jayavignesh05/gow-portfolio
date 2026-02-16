"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Person 1",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Person 2",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Person 3",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export function Clients() {
  return (
    <section className="relative w-full bg-white px-6 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center text-center"
        >
          {/* 1. Avatar Group */}
          <div className="mb-4 flex items-center justify-center -space-x-4">
            {people.map((person) => (
              <div
                key={person.id}
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* 2. Star Rating */}
          <div className="mb-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#F97316] text-[#F97316]" />
            ))}
          </div>

          {/* 3. Text Block Flanked by Wreaths */}
          <div className="relative flex items-center justify-center w-full max-w-4xl px-4 md:px-0">
            {/* Left Wreath Image */}
            <div className="hidden md:block absolute -left-16 -top-12 w-32 h-64 opacity-20 pointer-events-none">
              <Image
                src="/images/leftleaf.avif"
                alt="Left Laurel Leaf"
                fill
                className="object-contain"
              />
            </div>

            {/* Center Content */}
            <div className="max-w-2xl px-4 z-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Trusted by brands & creatives worldwide
              </h2>
              <p className="text-base text-gray-500 md:text-lg">
                Over 100 brands and creatives trust me to capture their stories
                through bold, refined imagery.
              </p>
            </div>

            {/* Right Wreath Image */}
            <div className="hidden md:block absolute -right-16 -top-12 w-32 h-64 opacity-20 pointer-events-none">
              <Image
                src="/images/rightleaf.png"
                alt="Right Laurel Leaf"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
