"use client";
import { motion, useScroll } from "motion/react";
const ScrollProgressVertical = () => {
  const { scrollYProgress } = useScroll();

  const xNum: number = scrollYProgress.get();
  console.log(xNum);

  return (
    <>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          scaleY: xNum,
          // backgroundColor: "#22c55e",
        }}
        className="h-72 w-[2px] bg-teal-300"
      ></motion.div>
    </>
  );
};

export default ScrollProgressVertical;
