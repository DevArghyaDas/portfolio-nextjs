import { getAllData } from "@/lib/getRepoData";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";

const AllDataRender = async () => {
  const data = await getAllData();

  if (data === null) {
    console.log("empty data");

    return;
  }

  if (data === undefined) {
    console.log("undefind data");

    return;
  }
  return (
    <>
      {data.map((info) => (
        <div key={info.id}>
          <ProjectCardDesktop info={info} />
          <ProjectCardMobile info={info} />
        </div>
      ))}
    </>
  );
};

export default AllDataRender;
