"use client";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";

const GridForBg = () => {
  return (
    <>
      <div className="bg-background fixed -z-20 flex h-lvh w-full items-center justify-center overflow-hidden rounded-lg border p-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    </>
  );
};

export default GridForBg;
