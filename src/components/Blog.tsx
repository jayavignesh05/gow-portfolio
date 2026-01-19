"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
    {
        title: "Finding Natural Light in Unexpected Places",
        category: "Lighting",
        image: "/images/blog_1.png"
    },
    {
        title: "My Approach to Editing: Creating a Consistent Style",
        category: "Editing",
        image: "/images/blog_2.png"
    },
    {
        title: "Pricing Your Photography: Strategies That Work",
        category: "Business",
        image: "/images/blog_3.png"
    }
];

export function Blog() {
    return (
        <section id="blog" className="bg-white px-6 py-24 md:px-12 md:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-neutral-400">
                            05 — Blog
                        </span>
                        <h2 className="mb-4 text-4xl font-medium tracking-tight text-black md:text-6xl">
                            Behind the lens
                        </h2>
                        <p className="max-w-md text-lg text-neutral-500">
                            Thoughts, insights, and stories from my photography journey. Take a peek into my creative process and recent projects.
                        </p>
                    </div>

                    <a href="#" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95">
                        View all posts
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-pointer"
                        >
                            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-[#F2F4F7]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>
                            <h3 className="mb-2 text-xl font-medium leading-tight text-black transition-colors group-hover:text-neutral-600">
                                {post.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
