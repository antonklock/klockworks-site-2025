import Project from "./Project";
import SectionTitle from "./SectionTitle";

const casesData = [
  {
    image: "/case/RYG/images/ryg-case-bg.png",
    title: "YBP - INTERACTIVE MUSIC VIDEO",
    description:
      "Interactive music video on the web. Using live aciton video, HLS streams and Pixi.js",
  },
  {
    image: "/case/LHF/images/lhf-case-bg.png",
    title: "ARENA INTRO ANIMATIONS",
    description:
      "Arena animations for when Luleå hockey teams enter the ice. Multi display synching animations",
  },
  {
    image: "/case/OC/images/oc-case-bg.png",
    title: "ORIGINAL CREATION EXPLAINER",
    description:
      "Explainer video for Original Creation. Produced by Klockworks and animated by MoMotion",
  },
  {
    image: "/case/dcop/images/dcop-case-bg.png",
    title: "DCOP - PC GAME",
    description:
      "Full motion video on rails shooter. Created in Unity together with John Eriksson",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <SectionTitle icon="/icons/swoosh.svg" title="WORKS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {casesData.map((caseItem, index) => (
          <Project
            key={index}
            image={caseItem.image}
            title={caseItem.title}
            description={caseItem.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
