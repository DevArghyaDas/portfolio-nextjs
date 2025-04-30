import Section from "../ui/Section";
import SliderForAbout from "../ui/swiper/SliderForAbout";

const About = () => {
  return (
    <>
      <Section sectionName="about">
        <div className="h-full w-full border p-2">
          <SliderForAbout />
        </div>
      </Section>
    </>
  );
};

export default About;
