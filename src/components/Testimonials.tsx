"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        rating: 5,
        quote: "You made the entire experience comfortable and fun. The images perfectly capture both my pieces and their story.",
        author: "Sophia Williams",
        role: "Jewelry Designer"
    },
    {
        rating: 5,
        quote: "Our team headshots have never looked this good. Professional yet approachable, with impressive consistency.",
        author: "James Thornton",
        role: "Meridian Tech"
    },
    {
        rating: 5,
        quote: "Your editorial eye is exceptional. You delivered images that told a complete story while staying exactly on brief.",
        author: "Olivia Park",
        role: "Style Quarterly"
    },
    {
        rating: 5,
        quote: "The brand campaign photos exceeded all our expectations. They have completely elevated our online presence.",
        author: "Emma Chen",
        role: "Prisma Design"
    }
];

export function Testimonials() {
    return (
        <section className="bg-white px-6 py-24 md:px-12 md:py-32">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-neutral-400">
                    04 — Kind Words
                </h2>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col justify-between rounded-2xl bg-[#F2F4F7] p-8"
                        >
                            <div className="mb-6 flex gap-1 text-black">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star key={starIndex} size={16} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>

                            <p className="mb-8 text-lg font-medium leading-relaxed text-black">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            <div className="mt-auto">
                                <p className="font-semibold text-black">{testimonial.author}</p>
                                <p className="text-sm text-neutral-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
