import Image from "next/image";
import ThreeCircles from "./ThreeCircles";

interface ProjectContentProps {
  image: string;
  title: string;
  description: string;
  isHovered: boolean;
  isCollapsed: boolean;
  handleRedClick: () => void;
  handleYellowClick: () => void;
  handleGreenClick: () => void;
}

const ProjectContent = ({
  image,
  title,
  description,
  isHovered,
  isCollapsed,
  handleRedClick,
  handleYellowClick,
  handleGreenClick,
}: ProjectContentProps) => {
  return (
    <div
      className="relative flex items-center p-2 bg-transparent border-b border-kwWhite group-hover:bg-kwWhite transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
        {title}
      </span>
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-75 flex flex-col p-4 transition duration-300 ease-in-out">
          <h2 className="text-lg font-bold text-kwWhite">{title}</h2>
          <p className="text-xs text-kwWhite">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
