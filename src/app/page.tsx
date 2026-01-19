import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import Benefits from "@/components/Benefits";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Hero />
      <Clients />
      <Philosophy />
      <Services />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
      <FloatingNav />
    </main>
  );
}
