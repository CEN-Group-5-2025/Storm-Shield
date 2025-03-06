"use client";
import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { SignupModal } from "./SignupModal";
import { useScrollAnimation } from "./useScrollAnimation";

export function VolunteerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="volunteer"
      className="px-0 py-10 pb-20 text-center bg-emerald-950"
    >
      <h2 className="mb-5 text-4xl italic font-extrabold text-stone-400 max-sm:text-3xl">
        Become a Volunteer or Search Volunteers
      </h2>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.05, backgroundColor: "#6ee7b7" }}
        whileTap={{ scale: 0.95 }}
        className="px-20 py-4 text-3xl font-extrabold text-teal-900 cursor-pointer border-[none] rounded-[70px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-sm:px-10 max-sm:py-3 max-sm:text-2xl"
      >
        Sign Up
      </motion.button>
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  );
}
