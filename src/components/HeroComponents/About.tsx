import SliderForAbout from "../ui/swiper/SliderForAbout";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="border-t"
      >
        <h1 className="py-6 text-center text-3xl">About</h1>
        <div className="h-full w-full overflow-hidden rounded-xl border">
          <SliderForAbout />
        </div>
      </section>
    </>
  );
};

export default About;
