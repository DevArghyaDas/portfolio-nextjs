"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const ParalaxWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ValVariants: Variants = {
    offscreen: {
      y: 25,
      opacity: 0.3,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div
        variants={ValVariants}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ParalaxWrapper;
