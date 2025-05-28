"use client";

import { Repository } from "@/lib/getRepoData";
import {
  ArrowUpRightFromCircleIcon,
  CodeXml,
  Cog,
  NotebookText,
} from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectCardMobile = ({ info }: { info: Repository }) => {
  const imgDataArrey = ["/media/tbh.jpg", "/media/code2.jpg"];

  return (
    <>
      <div className="relative flex flex-col border md:hidden">
        <div className="w-full overflow-hidden p-2">
          <Swiper
            effect={"creative"}
            grabCursor={true}
            modules={[EffectCreative]}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            className="mySwiper"
          >
            {imgDataArrey.map((i) => (
              <SwiperSlide key={i}>
                <Image
                  src={i}
                  alt=""
                  height={480}
                  width={720}
                  className="aspect-auto bg-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col justify-center gap-6 p-4">
          <div className="inline-flex items-center gap-2 text-2xl capitalize">
            <CodeXml /> {info.name}
          </div>
          <div className="inline-flex items-center gap-2">
            <NotebookText /> {info.description}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Cog />
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
            className="bg-foreground/25 flex items-center justify-center gap-2 rounded-xl p-2"
          >
            View on github <ArrowUpRightFromCircleIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCardMobile;
