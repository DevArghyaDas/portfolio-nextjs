"use client";
import { COBEOptions } from "cobe";
import { Globe } from "../magicui/globe";
import { Github, Linkedin, MailPlus, PhoneCall } from "lucide-react";

const Contact = () => {
  const config: COBEOptions = {
    width: 1200,
    height: 1200,
    onRender: () => {},
    scale: 1,
    devicePixelRatio: 2 / 1,
    phi: 0,
    theta: 0.2,
    dark: 1,
    diffuse: 0.6,
    mapSamples: 49000,
    mapBrightness: 1,
    baseColor: [0, 3, 3],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [0, 1, 1],
    markers: [{ location: [22.5744, 88.3629], size: 0.15 }],
  };
  return (
    <>
      <section id="contact">
        <h1 className="border-t py-6 text-center text-3xl">Contact</h1>

        <div className="relative grid min-h-[80lvh] grid-cols-1 gap-2">
          <div className="flex flex-col justify-center gap-4">
            <div className="text-3xl font-semibold">Want to contact me?</div>
            <div className="z-40 flex flex-col gap-4 *:*:size-14">
              <a href="tel:+9330882426">
                <PhoneCall />
              </a>
              <a href="mailto:mrarghyadasdev@gmail.com">
                <MailPlus />
              </a>
              <a
                href="https://www.linkedin.com/in/arghya-das-2a7253366/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/DevArghyaDas"
                target="_blank"
              >
                <Github />
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 flex h-[50%] w-full items-center justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
            <Globe
              className="top-24 scale-125 md:top-14"
              config={config}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
