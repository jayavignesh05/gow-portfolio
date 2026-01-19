"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Michael Chen",
            role: "CEO, Tech Startup",
            avatar: "/images/avatar-1.png",
            rating: 5,
            text: "August's ability to capture the essence of our brand was incredible. The photos exceeded all our expectations."
        },
        {
            name: "David Martinez",
            role: "Creative Director",
            avatar: "/images/avatar-2.png",
            rating: 5,
            text: "Professional, creative, and incredibly talented. Working with August was an absolute pleasure from start to finish."
        },
        {
            name: "Robert Johnson",
            role: "Marketing Manager",
            avatar: "/images/avatar-3.png",
            rating: 5,
            text: "The quality of work and attention to detail is unmatched. August truly understands how to tell a story through images."
        }
    ];

    return (
        <section className="relative w-full bg-neutral-50 px-6 py-20 md:py-32">
            <div className="mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                >
                    What my clients say
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="rounded-2xl bg-white p-8 shadow-lg"
                        >
                            {/* Rating */}
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-black text-black" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="mb-6 leading-relaxed text-gray-700">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-black">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
