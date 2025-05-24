"use client";
import { ReactNode } from "react";
import ParalaxWrapper from "./ParalaxWrapper";

const Section = ({
  children,
  sectionName,
  className,
}: {
  children: ReactNode;
  sectionName?: string;
  className?: string;
}) => {
  return (
    <>
      <section
        className={`max-h-fit min-h-lvh border border-dashed`}
        id={sectionName}
      >
        <h1 className="p-4 text-2xl tracking-wide capitalize sm:text-3xl md:text-center lg:text-4xl">
          {sectionName}
        </h1>

        <ParalaxWrapper className={`relative ${className}`}>
          {children}
        </ParalaxWrapper>
      </section>
    </>
  );
};

export default Section;
