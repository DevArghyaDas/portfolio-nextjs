"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

const ParalaxWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ amount: 0.8, once: true }}
        transition={{
          type: "tween",
          duration: 0.6,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ParalaxWrapper;
