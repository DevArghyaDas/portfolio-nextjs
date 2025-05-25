import { NeonGradientCard } from "../magicui/neon-gradient-card";
import IndexCard from "../ui/IndexCard";

const Index = () => {
  return (
    <>
      <section id="index">
        <div className="grid min-h-[90lvh] grid-cols-1 md:grid-cols-2">
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
          <div className="grid h-full w-full place-items-center content-center">
            <div className="w-[70%] md:w-[350px]">
              <NeonGradientCard
                neonColors={{ firstColor: "#7e22ce", secondColor: "#06b6d4" }}
                borderSize={2}
                borderRadius={5}
              >
                <IndexCard />
              </NeonGradientCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
