"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
interface PhotoViewerProps {
  images: string[];
}

export default function PhotoViewer({ images }: PhotoViewerProps) {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <div className="aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
              <Image
                width={1000}
                height={1000}
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
