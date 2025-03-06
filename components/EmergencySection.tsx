"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from "./useScrollAnimation";

const emergencyVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function EmergencySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={emergencyVariants}
      className="px-0 py-10 text-center"
    >
      <motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
          }}
          className="text-3xl font-extrabold leading-[60px] text-emerald-300 text-opacity-90 max-md:text-2xl max-sm:text-xl max-sm:leading-10"
        >
          In case of emergency, dial 911
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
          }}
          className="text-3xl font-extrabold leading-[60px] text-emerald-300 text-opacity-90 max-md:text-2xl max-sm:text-xl max-sm:leading-10"
        >
          <span>FEMA Disaster Relief Helpline</span>
          <p className="text-stone-400">1-800-621-3362</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
