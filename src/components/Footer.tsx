"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="blue-vignette relative w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/footer-gow.jpeg"
            alt="Get in touch"
            fill sizes="100vw"
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-32 md:py-48">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Get in touch
              </h2>
              <p className="mb-12 text-lg text-white/70 md:text-xl">
                Ready to create something beautiful together? Let's talk about
                your next project.
              </p>

              {/* Contact Info */}
              <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
                <a
                  href="mailto:officialgowtham8@gmail.com"
                  className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span>officialgowtham8@gmail.com</span>
                </a>
                <div className="h-4 w-px bg-white/30" />
                <a
                  href="tel:+91 9176354335"
                  className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 91763 54335</span>
                </a>
                <div className="h-4 w-px bg-white/30" />
                <a
                  href="https://www.instagram.com/cinevisionary3?igsh=MTlyZ3lqMGVpdDlt&utm_source=qr"
                  className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@cinevisionary3</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© 2026 Gowtham. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
