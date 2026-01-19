"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
    const services = [
        {
            title: "Fashion & Editorial",
            description: "Striking imagery for brands and publications, capturing style and personality.",
            color: "bg-gray-200", // Placeholder color
        },
        {
            title: "Brand & Commercial",
            description: "High-impact photography for businesses, campaigns, and products.",
            color: "bg-blue-100", // Placeholder color
        },
        {
            title: "Portrait & Studio",
            description: "Professional headshots and portraits tailored to reflect your personality and vision.",
            color: "bg-orange-100", // Placeholder color
        },
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                {/* Left Column: Text Content */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full mb-6">
                            Services
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            How can I help?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            From editorial shoots to personal portraits, I bring your vision to life with precision, creativity, and a deep understanding of light and composition.
                        </p>

                        <div className="mb-8">
                            <p className="font-semibold text-gray-900 mb-4">All services include:</p>
                            <ul className="space-y-3">
                                {["Professional Editing", "Edited & Unedited (RAW) Images", "Personal and Commercial Licensing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                View portfolio
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Service Cards */}
                <div className="flex flex-col gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        >
                            {/* Placeholder for Service Image */}
                            <div className={`w-full sm:w-48 h-48 sm:h-32 rounded-xl ${service.color} flex-shrink-0 overflow-hidden relative group-hover:scale-95 transition-transform duration-300`}>
                                {/* You can replace this div with an <Image /> component later */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-50">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center py-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
