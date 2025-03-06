"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";
import { fadeIn } from "./animations";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const { ref, isInView } = useScrollAnimation({ once: true, amount: 0.2 });
  return (
    <section className="overflow-hidden relative w-full h-[776px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c321c752732f5c1c2892068719ed53160438066"
        className="object-cover size-full"
        alt="Hurricane aerial view"
      />
      <div className="absolute top-0 left-0 size-full" />
      <motion.div
        ref={ref}
        variants={heroVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute top-2/4 left-2/4 w-full text-center -translate-x-2/4 -translate-y-2/4"
      >
        <motion.h2
          variants={textVariants}
          className="mb-5 text-7xl font-extrabold text-white uppercase max-md:text-5xl max-sm:text-4xl"
        >
          Alerts. Shelter. Support.
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-5xl font-extrabold text-white capitalize max-md:text-3xl max-sm:text-2xl"
        >
          Here for the people of Puerto Rico.
        </motion.p>
      </motion.div>
    </section>
  );
}
