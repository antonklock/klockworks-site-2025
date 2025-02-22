"use client";

import { useState } from "react";
import ProjectContent from "./ProjectContent";
interface CaseProps {
  image: string;
  title: string;
  description: string;
}

const Project = (props: CaseProps) => {
  const { image, title, description } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleRedClick = () => {
    console.log("Red clicked");
  };

  const handleYellowClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleGreenClick = () => {
    console.log("Green clicked");
  };

  const handleProjectClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    } else {
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div
      className={`border-0.5 border-[#aaaaaa] bg-black rounded-lg overflow-hidden group transition duration-300 ease-in-out transform ${
        isFullScreen ? "fixed inset-0 z-50" : "relative hover:scale-101"
      } ${isCollapsed ? "h-10" : "h-auto"}`}
      style={
        isFullScreen
          ? { width: "100vw", height: "100vh", top: 0, left: 0, scale: "95%" }
          : {}
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProjectClick}
    >
      <ProjectContent
        isHovered={isHovered}
        isCollapsed={isCollapsed}
        handleRedClick={handleRedClick}
        handleYellowClick={handleYellowClick}
        handleGreenClick={handleGreenClick}
        projectContent={{ image, title, description }}
      />
    </div>
  );
};

export default Project;
