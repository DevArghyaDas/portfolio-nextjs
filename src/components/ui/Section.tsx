import { ReactNode } from "react";

const Section = ({
  children,
  sectionName,
  bgUrl,
}: {
  children: ReactNode;
  sectionName?: string;
  bgUrl?: string;
}) => {
  return (
    <>
      <section
        className="border-primary h-dvh snap-center border border-dashed"
        id={sectionName}
      >
        <h1 className="p-4 font-mono text-2xl tracking-wide capitalize sm:text-3xl md:text-center lg:text-4xl">
          {sectionName}
        </h1>

        <div className="grid place-content-center">{children}</div>
      </section>
    </>
  );
};

export default Section;
