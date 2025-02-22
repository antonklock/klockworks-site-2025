"use client";

import Image from "next/image";
import { useState } from "react";
import ThreeCircles from "./ThreeCircles";

interface CaseProps {
  image: string;
  title: string;
  description: string;
}

const Project = (props: CaseProps) => {
  const { image, title, description } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleRedClick = () => {
    console.log("Red clicked");
  };

  const handleYellowClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleGreenClick = () => {
    console.log("Green clicked");
  };

  return (
    <div
      className={`relative border-0.5 border-[#aaaaaa] rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-101 ${
        isCollapsed ? "h-10" : "h-auto"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isCollapsed && setIsCollapsed(false)}
    >
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
          {title}
        </span>
      </div>
      {!isCollapsed && (
        <>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            className="object-cover rounded-lg transition duration-300 ease-in-out"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-75 flex flex-col p-4 transition duration-300 ease-in-out">
            <p className="text-sm text-kwWhite">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
