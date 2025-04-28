"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Section = ({
  children,
  sectionName,
  bgUrl,
}: {
  children: ReactNode;
  sectionName?: string;
  bgUrl?: string;
}) => {
  return (
    <>
      <section
        className="min-h-dvh border border-dashed"
        id={sectionName}
      >
        <h1 className="p-4 font-mono text-2xl tracking-wide capitalize sm:text-3xl md:text-center lg:text-4xl">
          {sectionName}
        </h1>

        <motion.div
          initial={{
            opacity: 0.6,
            translateY: 30,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          viewport={{ amount: 0.8, once: true }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
        >
          {children}
        </motion.div>
      </section>
    </>
  );
};

export default Section;
