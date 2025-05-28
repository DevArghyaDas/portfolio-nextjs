import AllDataRender from "../ui/projectCards/AllDataRender";

const Projects = async () => {
  return (
    <>
      <section
        id="projects"
        className="relative"
      >
        <h1 className="border-t py-6 text-center text-3xl">Projects</h1>

        <AllDataRender />
      </section>
    </>
  );
};

export default Projects;
