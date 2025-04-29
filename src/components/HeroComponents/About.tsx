import Section from "../ui/Section";

const About = () => {
  return (
    <>
      <Section sectionName="about">
        <div className="grid grid-cols-2 *:border *:p-2">
          <div className="flex flex-col gap-4 font-mono">
            <div className="text-xl leading-10 tracking-wider text-balance">
              I’m a spirited man in my 20s who finds endless joy in the natural
              world. As a true nature lover, I am constantly awed by the beauty
              of the outdoors and drawn to the charm of animals that remind me
              to appreciate life’s simple wonders. My days are filled with
              energy and excitement, whether I’m playing cricket, football,
              badminton, or enjoying a refreshing swim that revives my spirit.
            </div>
          </div>
          <div className="">cdcdc</div>
        </div>
      </Section>
    </>
  );
};

export default About;
