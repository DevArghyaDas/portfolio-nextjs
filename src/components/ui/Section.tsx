import { ReactNode } from "react";

const Section = ({
  children,
  sectionName,
}: {
  children: ReactNode;
  sectionName?: string;
}) => {
  return (
    <>
      <section
        className="border-primary h-dvh border border-dashed"
        id={sectionName}
      >
        <h1 className="p-4 text-2xl capitalize sm:text-3xl lg:text-4xl">
          {sectionName}
        </h1>
        <div className="grid place-content-center">{children}</div>
      </section>
    </>
  );
};

export default Section;
