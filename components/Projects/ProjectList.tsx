import Project from "./Project";
import SectionTitle from "../Common/SectionTitle";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

// The corrected interface to ensure type compatibility
interface ProjectData {
  _id: string;
  title: string;
  description: string;
  software: string[];
  date: string;
  thumbnail: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  slug: {
    current: string;
    _type: "slug";
  };
}

const projectsQuery = groq`
  *[_type == "project"] | order(date desc){
    _id,
    title,
    description,
    software,
    date,
    thumbnail,
    slug
  }
`;

const ProjectList = async () => {
  const projects: ProjectData[] = await client.fetch(projectsQuery);

  return (
    <div id="projects" className="flex flex-col project-list">
      <SectionTitle icon="/icons/swoosh.svg" title="Latest projects" />
      <div className="flex flex-col gap-4 justify-center items-center">
        {projects.map((projectItem) => (
          <Project key={projectItem._id} project={projectItem} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
