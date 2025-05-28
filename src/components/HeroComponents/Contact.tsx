"use client";
import { COBEOptions } from "cobe";
import { Github, Linkedin, MailPlus, PhoneCall, Send } from "lucide-react";
import { Globe } from "../magicui/globe";

const Contact = () => {
  const config: COBEOptions = {
    width: 900,
    height: 900,
    scale: 1,
    devicePixelRatio: 2 / 1,
    phi: 0,
    theta: 0.2,
    onRender: () => {},
    dark: 1,
    diffuse: 0.6,
    mapSamples: 29000,
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
        <div className="relative grid min-h-[84lvh] gap-2 p-2">
          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="text-3xl font-semibold">Get in touch🤔?</div>
            <div className="z-40 flex flex-col gap-1">
              <span className="hidden items-center gap-1 md:inline-flex">
                call me on
                <span className="font-bold">+919330882426</span>
                or just click
                <a
                  href="tel:+9330882426"
                  className="custom-hover rounded-lg px-3 py-2"
                >
                  <PhoneCall size={32} />
                </a>
              </span>

              <span className="hidden items-center gap-1 text-wrap md:inline-flex">
                mail me on
                <span className="font-bold">mrarghyadasdev@gmail.com</span>
                or just click
                <a
                  href="mailto:mrarghyadasdev@gmail.com"
                  className="custom-hover rounded-lg px-3 py-2"
                >
                  <MailPlus size={32} />
                </a>
              </span>

              <div className="mb-2 hidden md:block">My other SNS:</div>
              <div className="text-center md:hidden">Here are some links:</div>
              <div className="flex gap-4 *:rounded-lg *:px-3 *:py-2">
                <a
                  href="tel:+9330882426"
                  className="custom-hover rounded-lg px-3 py-2 md:hidden"
                >
                  <PhoneCall size={32} />
                </a>
                <a
                  href="mailto:mrarghyadasdev@gmail.com"
                  className="custom-hover rounded-lg px-3 py-2 md:hidden"
                >
                  <MailPlus size={32} />
                </a>

                <a
                  href="https://www.linkedin.com/in/arghya-das-2a7253366/"
                  target="_blank"
                  className="custom-hover"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://github.com/DevArghyaDas"
                  target="_blank"
                  className="custom-hover"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://t.me/arghyaDas20"
                  target="_blank"
                  className="custom-hover"
                >
                  <Send size={32} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
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
