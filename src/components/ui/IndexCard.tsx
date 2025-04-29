"use client";
import Image from "next/image";

const IndexCard = () => {
  return (
    <div className="relative left-3 h-full w-full scale-75 transform-3d md:scale-90">
      <Image
        src="/media/arghya-clip.png"
        alt="Image"
        className="h-auto w-auto translate-y-4 translate-z-20 rotate-3 object-cover grayscale-100 hover:grayscale-50"
        width={350}
        height={350}
      />
    </div>
  );
};

export default IndexCard;
