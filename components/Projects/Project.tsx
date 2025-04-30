"use client";

import Button from "../Common/Button";
import Image from "next/image";
import SoftwareIcons from "./SoftwareIcons";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  software: string[];
}

const Project = ({ image, title, description, software }: ProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-52 items-stretch outline outline-1 outline-gray-800 rounded-lg overflow-hidden">
      {/* Image */}
      <div className="w-full md:w-52 aspect-square relative flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 208px"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-start justify-center p-6 text-white">
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-base mb-2">{description}</p>
        <SoftwareIcons icons={software} />
        <Button variant="secondary" href="">
          View Project
        </Button>
      </div>
    </div>
  );
};

export default Project;
