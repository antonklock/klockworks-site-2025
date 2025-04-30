import Project from "./Project";
import SectionTitle from "../Common/SectionTitle";

const projectsData = [
  {
    image: "/case/RYG/images/ryg-case-bg.png",
    title: "YBP - INTERACTIVE MUSIC VIDEO",
    description:
      "Interactive music video on the web. Using live aciton video, HLS streams and Pixi.js",
    software: ["nextjs", "supabase", "pixijs"],
  },
  {
    image: "/case/LHF/images/lhf-case-bg.png",
    title: "ARENA INTRO ANIMATIONS",
    description:
      "Arena animations for when Luleå hockey teams enter the ice. Multi display synching animations",
    software: ["ae", "blender"],
  },
  {
    image: "/case/OC/images/oc-case-bg.png",
    title: "ORIGINAL CREATION EXPLAINER",
    description:
      "Explainer video for Original Creation. Produced by Klockworks and animated by MoMotion",
    software: [],
  },
  {
    image: "/case/dcop/images/dcop-case-bg.png",
    title: "DCOP - PC GAME",
    description:
      "Full motion video on rails shooter. Created in Unity together with John Eriksson",
    software: ["ae", "premiere", "unity"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col">
      <SectionTitle icon="/icons/swoosh.svg" title="WORKS" />
      <div className="flex flex-col gap-4">
        {projectsData.map((projectItem, index) => (
          <Project
            key={"project_" + index}
            image={projectItem.image}
            title={projectItem.title}
            description={projectItem.description}
            software={projectItem.software}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
