"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PhotoViewerProps {
  images: string[];
  unoptimized?: boolean;
}

export default function PhotoViewer({
  images,
  unoptimized = false,
}: PhotoViewerProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getLastItemClasses = (index: number) => {
    const totalItems = images.length;
    const itemsInLastRow = totalItems % (isSmallScreen ? 2 : 3);
    if (index === totalItems - 1) {
      if (itemsInLastRow === 2) return "col-span-2 aspect-[2/1]";
      if (itemsInLastRow === 1 && isSmallScreen)
        return "col-span-2 aspect-[2/1]";
      if (itemsInLastRow === 1 && !isSmallScreen)
        return "col-span-3 aspect-[3/1]";
    }
    return "aspect-square";
  };

  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <div
              className={`overflow-hidden rounded-lg transition-all duration-300 outline outline-1 outline-black hover:outline-gray-500 ${getLastItemClasses(
                index
              )}`}
            >
              <Image
                width={1000}
                height={1000}
                unoptimized={unoptimized}
                src={item}
                alt=""
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
