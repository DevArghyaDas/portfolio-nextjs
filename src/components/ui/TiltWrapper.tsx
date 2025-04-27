"use client";

import { ReactNode } from "react";
import Tilty from "react-tilty";

const TiltWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Tilty
        className="w-fit"
        glare={true}
        maxGlare={0.4}
        gyroscopeMaxAngleX={5}
        gyroscopeMinAngleX={-5}
        gyroscopeMaxAngleY={5}
        gyroscopeMinAngleY={-5}
      >
        {children}
      </Tilty>
    </>
  );
};

export default TiltWrapper;
