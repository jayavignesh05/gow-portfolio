"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { Star, ChevronsUpDown, Clock } from "lucide-react";

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
  const lensY = useTransform(gearScroll, [0, 1], [150, -10]);

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
    <section className="relative py-12 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="px-5 py-2 bg-[#F2F4F7] text-gray-800 text-xs md:text-sm font-semibold rounded-full tracking-wide">
              Benefits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-4 md:mb-6 tracking-tight"
          >
            Why work with me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-black/50 text-base md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Great photography is more than a service—it is an experience built
            on collaboration, trust, and creativity.
          </motion.p>
        </div>

        {/* Animated Bento Grid Container */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1: Experience (Tall) */}
            <motion.div
              ref={expRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[350px] md:min-h-[420px] flex flex-col relative overflow-hidden"
            >
              <div className="z-20 mb-auto">
                <h3 className="text-2xl md:text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  Over 10+ years <br /> experience
                </h3>
              </div>
              {/* Visual: Floating Polaroids (SCROLL SCRUB ANIMATION) */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[60%] flex justify-center items-end pb-10">
                <motion.div
                  style={{ rotate: polLeftRot, x: polLeftX }}
                  className="w-32 h-40 md:w-48 md:h-56 bg-white shadow-2xl absolute z-10 p-2 rounded-lg origin-bottom"
                >
                  <div className="w-full h-[80%] bg-gray-200 rounded-sm" />
                </motion.div>
                <motion.div
                  style={{ rotate: polRightRot, x: polRightX }}
                  className="w-32 h-40 md:w-48 md:h-56 bg-white shadow-2xl absolute z-0 p-2 rounded-lg origin-bottom"
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
              className="bg-[#F2F4F7] rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[350px] md:min-h-[420px] flex flex-col relative overflow-hidden"
            >
              <div className="z-20 mb-10">
                <h3 className="text-2xl md:text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  Shot with the <br /> best camera gear
                </h3>
              </div>
              {/* Visual: Lens Floating up (SCROLL SCRUB ANIMATION) */}
              <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <motion.div
                  style={{ y: lensY }}
                  className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] z-10"
                >
                  <Image
                    src="/images/camera.avif"
                    alt="Professional Camera"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 300px"
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
              className="bg-gray-900 rounded-[24px] md:rounded-[32px] min-h-[350px] md:min-h-[420px] relative overflow-hidden flex flex-col justify-end p-6 md:p-10"
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
                  <ChevronsUpDown className="w-4 h-4 text-black" />
                </div>
              </motion.div>

              <div className="relative z-20">
                <h3 className="text-2xl md:text-4xl font-medium text-white leading-[1.1] tracking-tight">
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
              className="bg-[#F2F4F7] rounded-[24px] md:rounded-[32px] min-h-[350px] md:min-h-[420px] flex flex-col justify-end relative overflow-hidden"
            >
              {/* Visual: Hands moving together (SCROLL SCRUB ANIMATION) */}
              <div className="flex gap-4 items-center justify-center ">
                <motion.div
                  style={{ x: handLeftX }}
                  className="relative w-32 h-32 md:w-48 md:h-48"
                >
                  <Image src="/images/leftside.png"
                    alt="Client Left"
                    fill sizes="100vw"
                    className="object-contain "
                  />
                </motion.div>
                <motion.div
                  style={{ x: handRightX }}
                  className="relative w-32 h-32 md:w-48 md:h-48"
                >
                  <Image src="/images/rightside.png"
                    alt="Client Right"
                    fill sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl md:text-4xl font-medium text-black leading-[1.1] tracking-tight p-6 md:p-10">
                Seamless client <br /> experience
              </h3>
            </motion.div>

            {/* Card 5: Tailored to your vision (Wide & Big) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="md:col-span-2 bg-gray-900 rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[350px] md:min-h-[420px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
              <div className="relative z-20 mt-auto">
                <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                  Tailored to <br /> your vision
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Card 6: Reviews */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-[#F2F4F7] rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[200px] md:min-h-[220px] flex flex-col justify-center"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-6 md:h-6 text-[#EC5A29] fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-4xl md:text-6xl font-medium text-black leading-none tracking-tight">
                      524
                    </span>
                    <span className="text-black/50 text-base md:text-lg font-medium">
                      satisfied clients
                    </span>
                  </div>
                </div>
                <div className="flex -space-x-4 ml-auto md:ml-auto self-end md:self-auto">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#F2F4F7] shadow-sm ${
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
              className="bg-[#F2F4F7] rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[220px] flex flex-col-reverse md:flex-row items-center justify-between gap-6"
            >
              <div className="flex flex-col gap-4 self-start md:self-auto">
                <div className="w-6 h-6 md:w-8 md:h-8 opacity-90 text-black">
                  <Clock size={32} />
                </div>
                <h3 className="text-2xl md:text-4xl font-medium text-black leading-[1.1] tracking-tight">
                  7 day <br /> turnaround
                </h3>
              </div>
              {/* Clock Visual (SCROLL SCRUB ANIMATION) */}
              <div className="scale-[0.7] md:scale-100 origin-center md:origin-right w-[200px] h-[200px] rounded-full border-[5px] border-white bg-[#D2D2D2] relative flex items-center justify-center shadow-sm">
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
