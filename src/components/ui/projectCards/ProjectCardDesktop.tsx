"use client";

import { Repository } from "@/lib/getRepoData";
import { motion } from "framer-motion";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EncodeDecodeAnimation from "../EncodeDecodeAnimation";
import { useRef } from "react";

const ProjectCardDesktop = ({ info }: { info: Repository }) => {
  const imgDataArrey = ["/media/tbh.jpg", "/media/code2.jpg"];
  const ref = useRef(null);

  return (
    <>
      <div
        className="relative hidden h-[150lvh] grid-cols-2 gap-2 lg:grid"
        ref={ref}
      >
        {/* first-container */}
        <div className="flex h-lvh flex-col items-center justify-center gap-6 p-4">
          <EncodeDecodeAnimation
            className="text-4xl capitalize"
            text={`${info.name}`}
          />

          <div className="text-center text-balance">
            {info.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam labore nostrum deleniti aperiam, laudantium
            dolor.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {info.topics.map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-sky-600/55 px-2 py-1 font-semibold capitalize"
              >
                {i}
              </div>
            ))}
          </div>

          <a
            href={info.html_url}
            target="_blank"
            className="custom-hover inline-flex items-center gap-3 rounded-sm border px-3 py-3"
          >
            View on github <ArrowUpRightFromSquare />
          </a>
        </div>
        {/* second-container */}
        <div className="sticky top-0 flex h-lvh items-center justify-center overflow-hidden border-s text-3xl">
          <motion.div
            initial={{
              translateX: 80,
              opacity: 0.3,
              // scale: 0.7,
            }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              // scale: 1,
            }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{
              type: "tween",
            }}
            className="relative h-auto w-[90%]"
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {imgDataArrey.map((i) => (
                <SwiperSlide
                  key={i}
                  className="outline outline-offset-4"
                >
                  <Image
                    src={i}
                    alt=""
                    height={720}
                    width={1080}
                    className="aspect-auto bg-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardDesktop;
