"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { useScrollAnimation } from "./useScrollAnimation";

// Define the fadeIn animation variant
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function FeaturesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex gap-5 justify-center px-20 py-10 mt-10 max-md:flex-col max-md:p-5"
    >
      <FeatureCard
        icon="https://cdn.builder.io/api/v1/image/assets%2Fa6a25ae631664afab1b9b21a146e9931%2F726f3f2715375d1b3fdd8f2c7ebab621b85ded650f4251991aad666ea7877fc6"
        title="GET HURRICANE ALERTS"
        description="Live updates on weather conditions across Puerto Rico"
      />
      <FeatureCard
        icon="https://cdn.builder.io/api/v1/image/assets%2Fa6a25ae631664afab1b9b21a146e9931%2Fe94eee341f0150e0841ea2f2802a36b0c52587f2181a6b1780bd1486eecb0dfb"
        title="VIEW NEAREST SHELTER"
        description="Locate your closest shelter using our interactive map"
      />
      <FeatureCard
        icon="https://cdn.builder.io/api/v1/image/assets%2Fa6a25ae631664afab1b9b21a146e9931%2F64b8e289131e5e9e7ef6460d3d7c99b80979c03167cde2eb2a4ae0dfae8cfa96"
        title="VOLUNTEER & FIND HELP"
        description="Sign up to be a volunteer or to be matched with volunteers"
      />
    </motion.section>
  );
}
