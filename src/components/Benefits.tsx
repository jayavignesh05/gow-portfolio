"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

export default function Benefits() {
  // Parent Card Entrance Animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // --- Scroll Tracking Refs for Individual Cards ---

  // 1. Experience Card (Polaroids)
  const expRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: expScroll } = useScroll({
    target: expRef,
    offset: ["start 90%", "center center"],
  });
  const polLeftRot = useTransform(expScroll, [0, 1], [-5, -20]);
  const polLeftX = useTransform(expScroll, [0, 1], [0, -24]);
  const polRightRot = useTransform(expScroll, [0, 1], [5, 20]);
  const polRightX = useTransform(expScroll, [0, 1], [0, 24]);

  // 2. Camera Gear Card (Lens)
  const gearRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: gearScroll } = useScroll({
    target: gearRef,
    offset: ["start 90%", "center center"],
  });
  const lensY = useTransform(gearScroll, [0, 1], [100, -10]);

  // 3. Editing Card (Split Line)
  const editRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: editScroll } = useScroll({
    target: editRef,
    offset: ["start 90%", "center center"],
  });
  const lineScale = useTransform(editScroll, [0, 1], [0.9, 1.15]);

  // 4. Seamless Card (Hands)
  const handsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: handsScroll } = useScroll({
    target: handsRef,
    offset: ["start 90%", "center center"],
  });
  const handLeftX = useTransform(handsScroll, [0, 1], [-100, 0]);
  const handRightX = useTransform(handsScroll, [0, 1], [100, 0]);

  // 5. Turnaround Card (Clock)
  const clockRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time ? time.getSeconds() : 0;
  const minutes = time ? time.getMinutes() : 0;
  const hours = time ? time.getHours() : 0;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours + minutes / 60) / 12) * 360;

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <span className="px-5 py-2 bg-[#F2F4F7] text-gray-800 text-sm font-semibold rounded-full tracking-wide">
              Benefits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-6 tracking-tight"
          >
            Why work with me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-black/50 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Great photography is more than a service—it is an experience built
            on collaboration, trust, and creativity.
          </motion.p>
        </div>

        {/* Animated Bento Grid Container */}
        <div className="flex flex-col gap-6">
          {/* Top Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Experience (Tall) */}
            <motion.div
              ref={expRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[32px] p-10 min-h-[420px] flex flex-col relative overflow-hidden"
            >
              <div className="z-20 mb-auto">
                <h3 className="text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  Over 10+ years <br /> experience
                </h3>
              </div>
              {/* Visual: Floating Polaroids (SCROLL SCRUB ANIMATION) */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[60%] flex justify-center items-end pb-10">
                <motion.div
                  style={{ rotate: polLeftRot, x: polLeftX }}
                  className="w-48 h-56 bg-white shadow-2xl absolute z-10 p-2 rounded-lg origin-bottom"
                >
                  <div className="w-full h-[80%] bg-gray-200 rounded-sm" />
                </motion.div>
                <motion.div
                  style={{ rotate: polRightRot, x: polRightX }}
                  className="w-48 h-56 bg-white shadow-2xl absolute z-0 p-2 rounded-lg origin-bottom"
                >
                  <div className="w-full h-[80%] bg-gray-300 rounded-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: Camera Gear (Tall) */}
            <motion.div
              ref={gearRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[32px] p-10 min-h-[420px] flex flex-col relative overflow-hidden"
            >
              <div className="z-20 mb-10">
                <h3 className="text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  Shot with the <br /> best camera gear
                </h3>
              </div>
              {/* Visual: Lens Floating up (SCROLL SCRUB ANIMATION) */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <motion.div
                  style={{ y: lensY }}
                  className="relative w-[300px] h-[300px] z-10"
                >
                  <Image
                    src="/images/camera.avif"
                    alt="Professional Camera"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 200px"
                    priority
                    unoptimized
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Card 3: Editing (Tall) */}
            <motion.div
              ref={editRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-gray-900 rounded-[32px] min-h-[420px] relative overflow-hidden flex flex-col justify-end p-10"
            >
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-gray-600 opacity-40"></div>
                <div className="w-1/2 h-full bg-amber-700 opacity-50"></div>
              </div>

              {/* Split line stretching (SCROLL SCRUB ANIMATION) */}
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute inset-y-0 left-1/2 w-[2px] bg-white/30 z-10 origin-top"
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </motion.div>

              <div className="relative z-20">
                <h3 className="text-4xl font-medium text-white leading-[1.1] tracking-tight">
                  Professional <br /> editing included
                </h3>
              </div>
            </motion.div>
            {/* Card 4: Seamless (Standard) */}
            <motion.div
              ref={handsRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[32px] min-h-[420px] flex flex-col justify-end relative overflow-hidden"
            >
              {/* Visual: Hands moving together (SCROLL SCRUB ANIMATION) */}
              <div className="flex gap-4 items-center justify-center ">
                <motion.div
                  style={{ x: handLeftX }}
                  className="relative w-50 h-50 "
                >
                  <Image
                    src="/images/leftside.png"
                    alt="Client Left"
                    fill
                    className="object-contain "
                  />
                </motion.div>
                <motion.div
                  style={{ x: handRightX }}
                  className="relative w-50 h-50"
                >
                  <Image
                    src="/images/rightside.png"
                    alt="Client Right"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <h3 className="text-4xl font-medium text-black leading-[1.1] tracking-tight p-10">
                Seamless client <br /> experience
              </h3>
            </motion.div>

            {/* Card 5: Tailored to your vision (Wide & Big) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="md:col-span-2 bg-gray-900 rounded-[32px] p-10 min-h-[420px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
              <div className="relative z-20 mt-auto">
                <h3 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                  Tailored to <br /> your vision
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 6: Reviews */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[32px] p-10 min-h-[220px] flex flex-col justify-center"
            >
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-[#EC5A29] fill-current"
                        viewBox="0 0 40 40"
                      >
                        <path d="M 18.097 2.289 C 18.693 0.441 21.307 0.441 21.903 2.289 L 25.136 12.312 C 25.403 13.14 26.174 13.7 27.044 13.698 L 37.575 13.675 C 39.517 13.671 40.325 16.158 38.751 17.296 L 30.218 23.467 C 29.513 23.977 29.219 24.884 29.489 25.71 L 32.765 35.719 C 33.37 37.565 31.254 39.101 29.686 37.957 L 21.179 31.748 C 20.477 31.235 19.523 31.235 18.821 31.748 L 10.314 37.957 C 8.746 39.101 6.63 37.565 7.235 35.719 L 10.511 25.71 C 10.781 24.884 10.487 23.977 9.782 23.467 L 1.249 17.296 C -0.325 16.158 0.483 13.671 2.425 13.675 L 12.956 13.698 C 13.826 13.7 14.597 13.14 14.864 12.312 Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-6xl font-medium text-black leading-none tracking-tight">
                      524
                    </span>
                    <span className="text-black/50 text-lg font-medium">
                      satisfied clients
                    </span>
                  </div>
                </div>
                <div className="flex -space-x-4 ml-auto">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-full border-4 border-[#F2F4F7] shadow-sm ${
                        ["bg-gray-400", "bg-gray-500", "bg-gray-600"][i - 1]
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 7: Turnaround */}
            <motion.div
              ref={clockRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[32px] p-10 min-h-[220px] flex items-center justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="w-8 h-8 opacity-90 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                  >
                    <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm88-24a8,8,0,0,0-8,8V82c-6.35-7.36-12.83-14.45-20.12-21.83a96,96,0,1,0-2,137.7,8,8,0,0,0-11-11.64A80,80,0,1,1,184.54,71.4C192.68,79.64,199.81,87.58,207,96H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  7 day <br /> turnaround
                </h3>
              </div>
              {/* Clock Visual (SCROLL SCRUB ANIMATION) */}
              <div className="w-[200px] h-[200px] rounded-full border-[5px] border-white bg-[#D2D2D2] relative flex items-center justify-center shadow-sm">
                {/* Ticks */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[4px] h-[13.33px] bg-[#8A8A8A] rounded-[4px]"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-68px)`,
                    }}
                  />
                ))}

                {/* Hour Hand (Black) */}
                <motion.div
                  animate={{ rotate: hourDeg }}
                  transition={{ ease: "linear", duration: 0.1 }}
                  className="absolute w-[4px] h-[35%] bg-black rounded-[2px] z-[8] top-[15%] left-1/2 -translate-x-1/2 origin-bottom"
                />

                {/* Minute Hand (Black/Transparent) */}
                <motion.div
                  animate={{ rotate: minuteDeg }}
                  transition={{ ease: "linear", duration: 0.1 }}
                  className="absolute w-[4px] h-[40%] bg-black/48 rounded-[2px] z-[8] top-[10%] left-1/2 -translate-x-1/2 origin-bottom"
                />

                {/* Second Hand (Red) */}
                <motion.div
                  animate={{ rotate: secondDeg }}
                  transition={{ ease: "linear", duration: 0.1 }}
                  className="absolute w-[2px] h-[45%] bg-[#FF0000] rounded-[2px] z-[8] top-[5%] left-1/2 -translate-x-1/2 origin-bottom"
                />

                {/* Center Dot */}
                <div className="absolute w-2 h-2 bg-[#8A8A8A] rounded-full z-10 top-1/2 left-1/2 -translate-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
