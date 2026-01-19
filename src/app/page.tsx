import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Clients } from "@/components/Clients";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black selection:bg-purple-200">
      <Navbar />
      <Hero />
      <Clients />
      <Philosophy />
      <Gallery />
      <Services />
      <Testimonials />
      <Blog />
      <ContactCTA />
      <Footer />
      <FloatingNav />
    </main>
  );
}
