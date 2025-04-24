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
        className="border-primary grid h-dvh place-content-center border-2"
        id={sectionName}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
