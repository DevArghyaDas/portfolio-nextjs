import IndexCard from "../ui/IndexCard";
import Section from "../ui/Section";

const Index = () => {
  return (
    <>
      <Section sectionName="index">
        <div className="grid grid-cols-1 *:border md:grid-cols-2">
          {/* first container */}
          <div className="flex flex-col justify-center gap-6 px-2 py-4 text-center md:text-start">
            <h1 className="text-2xl tracking-wide md:text-4xl lg:text-5xl">
              Hi,I&apos;m <span className="font-mono">Arghya Das.</span>
            </h1>
            <div className="text-xl">
              Fullstack devoloper | Desinger | Digital Creator
            </div>
            <div className="line-clamp-3 leading-6 tracking-wide text-balance">
              I&apos;m a full-stack web developer and designer who thrives on
              building seamless digital experiences from concept to launch.I
              embrace a design philosophy that prioritizes simplicity and
              user-centricity, ensuring that every interface I craft not only
              looks great but performs flawlessly.
            </div>
            <div className="flex items-center justify-center gap-4 *:rounded-sm *:border *:p-3 md:justify-start">
              <a
                href="#about"
                className="custom-hover"
              >
                See More &rarr;
              </a>
              <a
                href="#contact"
                className="custom-hover"
              >
                Contact Me &rarr;
              </a>
            </div>
          </div>
          {/* second container */}
          <div className="relative grid h-[70dvh] grid-cols-2">
            <div className="relative h-[35dvh] border-r border-b border-dashed border-r-teal-500 border-b-fuchsia-400 font-mono font-bold tracking-widest">
              <span className="absolute top-[20%] -right-10 -rotate-90">
                &larr; y axis &rarr;
              </span>
            </div>
            <div className="h-[35dvh]" />
            <div className="h-[35dvh]" />
            <div className="relative h-[35dvh] border-t border-l border-dashed border-t-fuchsia-400 border-l-teal-500 font-mono font-bold tracking-widest">
              <span className="absolute right-10">&larr; x axis &rarr;</span>
            </div>
            {/* card container */}
            <div className="group absolute grid h-full w-full place-items-center">
              <div className="border object-cover shadow-2xl">
                <IndexCard />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Index;
