import Project from "./Project";
import SectionTitle from "../Common/SectionTitle";
import { projectsData } from "@/data/projectData";

const ProjectList = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle icon="/icons/swoosh.svg" title="Latest projects" />
      <div className="flex flex-col gap-4 justify-center items-center">
        {projectsData.map((projectItem, index) => (
          <Project
            key={"project_" + index}
            image={projectItem.image}
            title={projectItem.title}
            description={projectItem.description}
            software={projectItem.software}
            link={projectItem.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
