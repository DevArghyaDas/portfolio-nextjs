"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import dataForSlider from "@/lib/dataForSlider";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import { Navigation, Pagination, Parallax } from "swiper/modules";

const SliderForAbout = () => {
  const [visible, setVisible] = useState(false);
  const pagination = {
    clickable: true,
    bulletClass:
      "border border-dashed cursor-pointer border-foreground rounded-none px-3 m-2",
    bulletActiveClass: "bg-foreground text-background",
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={pagination}
        navigation={{
          enabled: true,
        }}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Parallax background element */}
        <div
          slot="container-start"
          className="parallax-bg before:to-background relative before:absolute before:h-full before:w-[150%] before:bg-gradient-to-r before:from-slate-500/20 before:from-10% before:to-65% before:backdrop-blur-xs before:content-[''] not-dark:before:from-slate-500/55"
          data-swiper-parallax="-23%"
          style={{
            backgroundImage: "url('media/coading.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {dataForSlider.map((info) => (
          <SwiperSlide key={info.id}>
            <div className="flex max-h-fit min-h-[80dvh] w-full flex-col justify-center gap-4 p-2 md:p-4">
              <h2
                className="text-2xl"
                data-swiper-parallax="-400"
              >
                {info.id}.
              </h2>
              <h1
                className="text-4xl"
                data-swiper-parallax="-300"
              >
                {info.question}
              </h1>
              <div
                className={`font-mono leading-9 text-balance md:text-lg lg:text-xl ${visible ? "" : "line-clamp-[14]"}`}
                data-swiper-parallax="-200"
                onClick={() => setVisible(!visible)}
              >
                {info.answer}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderForAbout;
