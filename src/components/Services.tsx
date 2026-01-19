"use client";

import { motion } from "framer-motion";

const services = [
    { title: "Fashion & Editorial", description: "Striking imagery for brands, and publications, capturing style and personality." },
    { title: "Brand & Commercial", description: "High-impact photography for businesses, campaigns, and products." },
    { title: "Portrait & Studio", description: "Professional headshots and portraits tailored to reflect your personality and vision." }
];

export function Services() {
    return (
        <section id="services" className="bg-white px-6 py-32 md:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 flex items-end justify-between">
                    <h2 className="text-4xl font-medium tracking-tight text-black md:text-6xl">
                        How can I help
                    </h2>
                    <span className="hidden text-sm font-medium uppercase tracking-widest text-neutral-400 md:block">
                        03 — Services
                    </span>
                </div>

                <div className="flex flex-col border-t border-neutral-200">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group flex cursor-pointer flex-col justify-between gap-4 border-b border-neutral-200 py-12 transition-colors hover:bg-neutral-50 md:flex-row md:items-center"
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-xl text-neutral-400 group-hover:text-black">0{i + 1}</span>
                                <h3 className="text-2xl font-medium text-black md:text-4xl">{service.title}</h3>
                            </div>

                            <div className="flex items-center gap-8">
                                <p className="max-w-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100 md:text-right hidden md:block">
                                    {service.description}
                                </p>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-90">
                                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
