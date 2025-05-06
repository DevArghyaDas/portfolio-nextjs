"use client";
import { motion, useScroll, useSpring } from "framer-motion";

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
      className="z-40 rounded-r-full bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-pink-500"
    />
  );
};

export default ScrollProgressBar;
