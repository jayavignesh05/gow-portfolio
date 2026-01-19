"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What's your photography style?",
            answer: "I specialize in a cinematic, editorial style that emphasizes natural light, authentic moments, and timeless compositions. My goal is to create images that tell a story and evoke emotion."
        },
        {
            question: "How far in advance should I book?",
            answer: "I recommend booking at least 2-3 months in advance for weddings and major events. For smaller sessions, 2-4 weeks' notice typically works well."
        },
        {
            question: "Do you travel for shoots?",
            answer: "Yes, I'm available for travel worldwide. Travel fees vary depending on location and project scope. Contact me for a custom quote."
        },
        {
            question: "What's the typical turnaround time?",
            answer: "Most projects are delivered within 7 days. Rush delivery options are available for an additional fee if you need your photos sooner."
        },
        {
            question: "Can I request specific shots or styles?",
            answer: "Absolutely! I encourage clients to share their vision, inspiration, and any specific shots they'd like. We'll collaborate to create a tailored shot list that brings your ideas to life."
        }
    ];

    return (
        <section className="relative w-full bg-neutral-50 px-6 py-20 md:py-32">
            <div className="mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                >
                    Frequently asked questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                            className="overflow-hidden rounded-2xl bg-white shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                            >
                                <span className="pr-8 text-lg font-semibold tracking-tight md:text-xl">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-6 w-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="leading-relaxed text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
