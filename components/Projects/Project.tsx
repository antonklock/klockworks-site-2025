"use client";

import Button from "../Common/Button";
import Image from "next/image";
import SoftwareIcons from "./SoftwareIcons";
import { urlFor } from "@/lib/sanity";

interface ProjectProps {
  project: {
    _id: string;
    title: string;
    description: string;
    software: string[];
    date: string;
    thumbnail: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    slug: {
      current: string;
      _type: "slug";
    };
  };
}

const Project = ({ project }: ProjectProps) => {
  const imageUrl = urlFor(project.thumbnail).width(512).height(512).url();
  const projectLink = `/projects/${project.slug.current}`;

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`flex flex-col md:flex-row w-full h-auto md:h-64 md:max-w-[1000px] items-stretch outline outline-1 outline-gray-800 hover:outline-gray-700 rounded-lg overflow-hidden bg-black transition-all duration-300`}
    >
      {/* Image */}
      <div className="w-full md:w-52 aspect-square relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1500px) 100vw, 1000px"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-start justify-center p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h2>
        <div className="text-gray-400 text-sm mb-2">
          {formatDate(project.date)}
        </div>
        <p className="text-base mb-2">{project.description}</p>
        <SoftwareIcons icons={project.software} />
        <Button className="mt-4" variant="secondary" href={projectLink}>
          View Project
        </Button>
      </div>
    </div>
  );
};

export default Project;
