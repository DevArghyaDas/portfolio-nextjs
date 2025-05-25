"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 10, damping: 10 });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scaleX,
        position: "fixed",
        top: 50,
        left: 0,
        right: 0,
        height: 20,
        originX: 0,
        // backgroundColor: "#22c55e",
      }}
      className="z-40 bg-linear-to-r/increasing from-teal-400 to-indigo-500"
    />
  );
};

export default ScrollProgressBar;
