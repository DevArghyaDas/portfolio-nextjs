"use client";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 30, damping: 10 });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 15,
        originX: 0,
        // backgroundColor: "#22c55e",
      }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    />
  );
};

export default ScrollProgressBar;
