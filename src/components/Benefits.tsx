"use client";

import { motion, Variants } from "framer-motion";

// Animation Variants for the Parent Container (Orchestrator)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card popping up
            delayChildren: 0.2,    // Wait slightly after header appears
        },
    },
};

// Animation Variants for individual Cards
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 }, // Start lower and invisible
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" } // Smooth float up
    },
};


export default function Benefits() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section - Fades in first */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full tracking-wide">
                            Benefits
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        Why work with me?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Great photography is more than a service—it is an experience built
                        on collaboration, trust, and creativity.
                    </motion.p>
                </div>

                {/* Animated Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} // Triggers when 100px of section is visible
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >

                    {/* Card 1: Experience (Tall) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#F3F4F6] rounded-[2rem] p-8 min-h-[480px] flex flex-col justify-between relative group overflow-hidden"
                    >
                        {/* Visual: Floating Polaroids */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-1/2 flex justify-center items-center">
                            <div className="w-40 h-52 bg-white shadow-xl rotate-[-6deg] absolute transition-transform group-hover:rotate-[-12deg] z-10 border-[6px] border-white">
                                <div className="w-full h-4/5 bg-gray-200" />
                            </div>
                            <div className="w-40 h-52 bg-white shadow-xl rotate-[6deg] absolute transition-transform group-hover:rotate-[12deg] z-0 border-[6px] border-white">
                                <div className="w-full h-4/5 bg-gray-300" />
                            </div>
                        </div>

                        {/* Text at Bottom */}
                        <div className="mt-auto z-20">
                            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                Over 10+ years <br /> experience
                            </h3>
                        </div>
                    </motion.div>

                    {/* Card 2: Camera Gear (Tall) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white border border-gray-100 rounded-[2rem] p-8 min-h-[480px] flex flex-col relative overflow-hidden shadow-sm"
                    >
                        {/* Text at Top Left */}
                        <div className="z-20 mb-8">
                            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                Shot with the <br /> best camera gear
                            </h3>
                        </div>

                        {/* Visual: Lens Placeholder */}
                        <div className="flex-1 flex items-end justify-center">
                            <div className="w-56 h-56 bg-gradient-to-b from-gray-800 to-black rounded-full flex items-center justify-center text-white/20 shadow-2xl transform translate-y-10 group-hover:translate-y-6 transition-transform">
                                <span className="text-xs tracking-widest uppercase">Lens</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Editing (Tall, Dark) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-900 rounded-[2rem] min-h-[480px] relative overflow-hidden flex flex-col justify-end p-8 group"
                    >
                        {/* Background Split Image Effect */}
                        <div className="absolute inset-0 flex">
                            <div className="w-1/2 h-full bg-gray-600 opacity-50"></div> {/* Raw Side */}
                            <div className="w-1/2 h-full bg-amber-700 opacity-60"></div> {/* Edited Side */}
                        </div>

                        {/* Split line */}
                        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/30 z-10">
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                            </div>
                        </div>

                        {/* Text at Bottom Left (White) */}
                        <div className="relative z-20">
                            <h3 className="text-4xl font-bold text-white leading-tight">
                                Professional <br /> editing included
                            </h3>
                        </div>
                    </motion.div>

                    {/* Card 4: Seamless (Short) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#F3F4F6] rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between"
                    >
                        {/* Visual: Hands */}
                        <div className="flex gap-4 opacity-40 mb-4">
                            {/* Abstract hand shapes */}
                            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-400 ml-auto"></div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            Seamless client <br /> experience
                        </h3>
                    </motion.div>

                    {/* Card 5: Reviews (Short) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#F3F4F6] rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-end"
                    >
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-5xl font-bold text-gray-900">524</span>
                            <span className="text-gray-500 font-medium">satisfied clients</span>
                        </div>
                        {/* Avatars */}
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-${300 + i * 100}`}></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 6: Turnaround (Short) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#F3F4F6] rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between items-center text-center"
                    >
                        {/* Clock Visual */}
                        <div className="w-32 h-32 rounded-full border-4 border-gray-300 relative mt-2">
                            <div className="absolute top-1/2 left-1/2 w-1 h-12 bg-gray-800 origin-bottom -translate-x-1/2 -translate-y-full rotate-[45deg]"></div>
                            <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-gray-500 origin-bottom -translate-x-1/2 -translate-y-full rotate-[-90deg]"></div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mt-4">
                            7 day turnaround
                        </h3>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}