import About from "@/components/HeroComponents/About";
import Contact from "@/components/HeroComponents/Contact";
import Index from "@/components/HeroComponents/Index";
import Skills from "@/components/HeroComponents/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nextjs Starter Template",
  description: "Hpme page of Nextjs Starter Template",
};

const page = () => {
  return (
    <>
      <div className="">
        <Index />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default page;
