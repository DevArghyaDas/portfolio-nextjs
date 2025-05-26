"use client";
import Image from "next/image";

const IndexCard = () => {
  return (
    <Image
      src="/media/mask-official-arghya-ss.png"
      alt="Image"
      className="h-auto w-auto rounded-lg grayscale-0"
      width={720}
      height={1080}
      priority={true}
    />
  );
};

export default IndexCard;
