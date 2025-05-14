"use client";

import Button from "../Common/Button";
import Image from "next/image";
import SoftwareIcons from "./SoftwareIcons";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  software: string[];
  link: string;
}

const Project = ({
  image,
  title,
  description,
  software,
  link,
}: ProjectProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full h-auto md:h-64 md:max-w-[1000px] items-stretch outline outline-1 outline-gray-800 hover:outline-gray-700 rounded-lg overflow-hidden bg-black transition-all duration-300`}
    >
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
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{title}</h2>
        <p className="text-base mb-2">{description}</p>
        <SoftwareIcons icons={software} />
        <Button className="mt-4" variant="secondary" href={link}>
          View Project
        </Button>
      </div>
    </div>
  );
};

export default Project;
