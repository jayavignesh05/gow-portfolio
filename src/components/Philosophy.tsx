"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Images configuration
    const images = [
        {
            src: "/images/philosophy_white_shirt_1768816370348.png",
            alt: "White shirt portrait",
            position: "left-[5%] top-[15%]",
            size: "w-64 md:w-80 aspect-[3/4]",
            parallaxSpeed: 1, 
        },
        {
            src: "/images/philosophy_blue_flowers_1768816430152.png",
            alt: "Blue flowers portrait",
            position: "right-[10%] top-[25%]",
            size: "w-72 md:w-96 aspect-[4/5]",
            parallaxSpeed: 0.8,
        },
        {
            src: "/images/philosophy_earrings_1768816406554.png",
            alt: "Gold earrings",
            position: "left-[15%] top-[40%]",
            size: "w-60 md:w-72 aspect-square",
            parallaxSpeed: 1.1,
        },
        {
            src: "/images/philosophy_desk_scene_1768816459266.png",
            alt: "Desk with hat",
            position: "right-[20%] top-[55%]",
            size: "w-72 md:w-80 aspect-[4/3]",
            parallaxSpeed: 0.9,
        },
        {
            src: "/images/philosophy_freckled_portrait_1768816491303.png",
            alt: "Freckled portrait",
            position: "left-[10%] top-[70%]",
            size: "w-80 md:w-96 aspect-[3/4]",
            parallaxSpeed: 1.2,
        },
        {
            src: "/images/philosophy_dark_portrait_1768816518969.png",
            alt: "Dark moody portrait",
            position: "right-[5%] top-[85%]",
            size: "w-64 md:w-80 aspect-[3/4]",
            parallaxSpeed: 1,
        },
    ];

    const line1 = "Every photograph should make an impact.";
    const line2 = "I capture moments that blend artistry, storytelling,";
    const line3 = "and emotion to create visuals that stand out.";

    const wordStyle = "text-xl md:text-xl lg:text-[44px] font-semibold tracking-tight text-gray-900 leading-[1.15] inline-block mr-2";

    return (
        <section ref={containerRef} className="relative h-[350vh] bg-white w-full">
            
            {/* Sticky Text Container */}
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden z-10">
                <div className="text-center px-4 max-w-6xl flex flex-col items-center gap-6 md:gap-8">
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm md:text-base font-medium text-gray-500 mb-2 uppercase tracking-widest"
                    >
                        Philosophy
                    </motion.p>

                    <div className="flex flex-wrap justify-center max-w-5xl">
                        {/* Line 1 - Finishes by 0.15 progress */}
                        {line1.split(" ").map((word, i) => {
                            const start = 0 + (i / line1.split(" ").length) * 0.1; 
                            const end = start + 0.1;
                            return <Word key={`l1-${i}`} progress={scrollYProgress} range={[start, end]} className={wordStyle}>{word}</Word>
                        })}
                        
                        <div className="w-full h-2 md:h-4" /> 

                        {/* Line 2 & 3 - Starts a bit later */}
                        {line2.split(" ").map((word, i) => {
                            const start = 0.2 + (i / line2.split(" ").length) * 0.1;
                            const end = start + 0.1;
                            return <Word key={`l2-${i}`} progress={scrollYProgress} range={[start, end]} className={wordStyle}>{word}</Word>
                        })}

                        <div className="w-full h-2 md:h-4" />

                        {line3.split(" ").map((word, i) => {
                            const start = 0.35 + (i / line3.split(" ").length) * 0.1;
                            const end = start + 0.1;
                            return <Word key={`l3-${i}`} progress={scrollYProgress} range={[start, end]} className={wordStyle}>{word}</Word>
                        })}
                    </div>
                </div>
            </div>

            {/* Scrolling Images Layer */}
            <div className="absolute inset-0 z-20 pointer-events-none w-full h-full">
                {images.map((img, index) => (
                    <ParallaxImage
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        position={img.position}
                        size={img.size}
                        speed={img.parallaxSpeed}
                        parentScrollProgress={scrollYProgress}  
                    />
                ))}
            </div>
        </section>
    );
}

const Word = ({ children, progress, range, className }: { children: string, progress: MotionValue<number>, range: [number, number], className: string }) => {
    const opacity = useTransform(progress, range, [0, 1]); 
    const blur = useTransform(progress, range, [10, 0]);
    
    return (
        <motion.span style={{ opacity, filter: useTransform(blur, (b) => `blur(${b}px)`) }} className={className}>
            {children}
        </motion.span>
    )
}

function ParallaxImage({
    src,
    alt,
    position,
    size,
    speed,
    parentScrollProgress,
}: {
    src: string;
    alt: string;
    position: string;
    size: string;
    speed: number;
    parentScrollProgress: MotionValue<number>;
}) {

    
    const y = useTransform(
        parentScrollProgress, 
        [0, 0.2, 1], 
        ["150vh", "150vh", `-${150 * speed}vh`] 
    );
    
    const opacity = useTransform(parentScrollProgress, [0, 0.18, 0.25], [0, 0, 1]);

    return (
        <motion.div
            style={{ y, opacity }}
            className={`absolute ${position} ${size} rounded-2xl overflow-hidden shadow-2xl`}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </motion.div>
    );
}