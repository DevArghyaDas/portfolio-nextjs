"use client";

import { ReactNode } from "react";
import Tilty from "react-tilty";

const TiltWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Tilty
        className="h-fit w-fit transform-3d"
        glare
        maxGlare={0.4}
        scale={1.04}
        easing="cubic-bezier(.25,.62,.83,.67)"
        speed={600}
      >
        {children}
      </Tilty>
    </>
  );
};

export default TiltWrapper;
