import Contact from "@/components/HeroComponents/Contact";
import Projects from "@/components/HeroComponents/Projects";
import Skills from "@/components/HeroComponents/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arghya Das",
  description: "Index Page",
};

const page = () => {
  return (
    <>
      <div>
        {/* <Index /> */}
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default page;
