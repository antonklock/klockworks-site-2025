import ThreeCircles from "../Common/ThreeCircles";
import Image from "next/image";

interface ProjectContent {
  title: string;
  description: string;
  image: string;
}

interface ProjectContentProps {
  isHovered: boolean;
  isCollapsed: boolean;
  handleRedClick: () => void;
  handleYellowClick: () => void;
  handleGreenClick: () => void;
  projectContent: ProjectContent;
}

const ProjectContent = (props: ProjectContentProps) => {
  const {
    isHovered,
    handleRedClick,
    handleYellowClick,
    handleGreenClick,
    projectContent,
    isCollapsed,
  } = props;
  return (
    <>
      <div className="flex items-center p-2 bg-transparent border-b border-[#aaaaaa] group-hover:bg-kwWhite transition duration-300 ease-in-out">
        <div className="flex space-x-2">
          <ThreeCircles
            isHovered={isHovered}
            onRed={handleRedClick}
            onYellow={handleYellowClick}
            onGreen={handleGreenClick}
          />
        </div>
        <span
          className={`ml-4 font-bold ${
            isHovered ? "text-black" : "text-kwWhite"
          }`}
        >
          {projectContent.title}
        </span>
      </div>

      {!isCollapsed && (
        <>
          <Image
            src={projectContent.image}
            alt={projectContent.title}
            layout="responsive"
            width={500}
            height={500}
            className="object-cover rounded-lg transition duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-75 flex flex-col p-4 transition duration-300 ease-in-out">
            <p className="text-sm text-kwWhite">{projectContent.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectContent;
