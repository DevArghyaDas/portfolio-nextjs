"use client";
import { COBEOptions } from "cobe";
import { Globe } from "../magicui/globe";

const Contact = () => {
  const config: COBEOptions = {
    width: 900,
    height: 900,
    onRender: () => {},
    devicePixelRatio: 2 / 1,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.6,
    mapSamples: 16000,
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

        <div className="grid min-h-[80lvh] grid-cols-2 place-items-center gap-2">
          <div className="flex flex-col gap-4">
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              repellendus!
            </div>
            <div>
              Omnis placeat dolore vel laborum esse commodi ea fugiat
              perferendis!
            </div>
            <div>
              Veritatis natus assumenda atque, quidem consequatur rerum placeat
              fuga deserunt.
            </div>
          </div>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-40 pt-8 pb-40 md:pb-60">
            <Globe
              className="top-32"
              config={config}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
