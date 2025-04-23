import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="border-primary grid h-dvh place-content-center border-2">
        {children}
      </section>
    </>
  );
};

export default Section;
