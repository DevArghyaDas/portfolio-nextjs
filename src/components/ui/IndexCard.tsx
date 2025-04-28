import Image from "next/image";

const IndexCard = () => {
  return (
    <Image
      src="/media/masked-picture.png"
      alt="Image"
      className="relative bottom-10 left-5 h-auto w-auto translate-z-[70px] scale-90 rounded-md object-cover grayscale-100 md:scale-90"
      height={300}
      width={300}
    />
  );
};

export default IndexCard;
