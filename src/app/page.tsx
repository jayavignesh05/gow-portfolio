"use client";

import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import Benefits from "@/components/Benefits";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen w-full bg-white text-black">
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Hero />
      <Clients />
      <Philosophy />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
      <FloatingNav />
    </main>
  );
}
