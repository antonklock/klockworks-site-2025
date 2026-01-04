import Project from "./Project";
import SectionTitle from "../Common/SectionTitle";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url";

// The corrected interface to ensure type compatibility
interface ProjectData {
  _id: string;
  title: string;
  description: string | null;
  software: string[] | null;
  date: string;
  priority: number | null;
  thumbnail: SanityImageSource | null;
  slug: {
    current: string;
    _type: "slug";
  };
}

const projectsQuery = groq`
  *[_type == "project"] | order(coalesce(priority, 0) desc, date desc){
    _id,
    title,
    description,
    software,
    date,
    priority,
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
