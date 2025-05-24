"use client";
import Image from "next/image";
import TiltWrapper from "./TiltWrapper";
import Tilty from "react-tilty";

const IndexCard = () => {
  return (
    <div className="scale-75 transform-3d md:scale-90">
      <Tilty>
        <div className="h-full w-full scale-105 rotate-1 bg-[url('/media/arghya-bg.png')] bg-cover">
          <TiltWrapper>
            <Image
              src="/media/arghya-clip.png"
              alt="Image"
              className="h-auto w-auto -translate-x-1 translate-y-5 translate-z-20 scale-[84%] object-cover grayscale-100 hover:grayscale-50"
              width={350}
              height={350}
              priority={true}
            />
          </TiltWrapper>
        </div>
      </Tilty>
    </div>
  );
};

export default IndexCard;
