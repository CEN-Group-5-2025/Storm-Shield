import React from 'react';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(6, 78, 59, 0.2)",
        y: -5,
      }}
      className="flex-1 p-10 text-center rounded-lg opacity-80"
    >
      <div>
        <img
          src={icon}
          className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.05] min-h-5 min-w-5"
          alt={`${title} icon`}
        />
      </div>
      <h3 className="mx-0 my-5 mr-1 mb-8 text-3xl italic font-extrabold text-stone-400 max-sm:text-2xl">
        {title}
      </h3>
      <p className="text-base text-white">{description}</p>
    </motion.article>
  );
}
