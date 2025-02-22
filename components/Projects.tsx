import Project from "./Project";

const casesData = [
  {
    image: "/case/RYG/images/ryg-case-bg.png",
    title: "YBP - Interactive music video",
    description:
      "An interactive music video on the web. Using live aciton video, HLS streams and Pixi.js",
  },
  {
    image: "/case/LHF/images/lhf-case-bg.png",
    title: "Arena intro animations",
    description:
      "Arena animations for when Luleå hockey teams enter the ice. Multi display synching animations",
  },
  {
    image: "/case/OC/images/oc-case-bg.png",
    title: "Original Creation explainer",
    description:
      "An explainer video for Original Creation. Produced by Klockworks and animated by MoMotion",
  },
];

const Projects = () => {
  return (
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
  );
};

export default Projects;
