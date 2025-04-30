"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SoftwareIconProps {
  name: string;
}

const names = {
  nextjs: "Next.js",
  pixijs: "PixiJS",
  ae: "After Effects",
  supabase: "Supabase",
  blender: "Blender",
  unity: "Unity",
  premiere: "Premiere Pro",
};

const SoftwareIcon = ({ name }: SoftwareIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (name in names) {
      setFullName(names[name as keyof typeof names]);
    }
  }, [name]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX + 8,
      y: e.clientY - 40,
    });
  };

  return (
    <button
      className="rounded-full w-8 h-8 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={`/icons/software/${name}.png`}
        alt={name}
        width={32}
        height={32}
        className="object-contain rounded-full"
      />

      {isHovered && (
        <div
          className="fixed z-50 px-3 py-2 text-base bg-black text-white rounded-e-md rounded-tl-md outline outline-1 outline-white pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        >
          {fullName || name}
        </div>
      )}
    </button>
  );
};

export default SoftwareIcon;
