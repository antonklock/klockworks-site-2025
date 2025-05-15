"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

interface PhotoViewerProps {
  image: string;
  unoptimized?: boolean;
}
export default function PhotoViewer({
  image,
  unoptimized = false,
}: PhotoViewerProps) {
  return (
    <PhotoProvider>
      <div className="w-full max-w-full mx-auto">
        <PhotoView src={image}>
          <div className="w-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
            <Image
              width={1200}
              height={800}
              src={image}
              alt=""
              className="w-full h-auto object-cover cursor-pointer"
              unoptimized={unoptimized}
            />
          </div>
        </PhotoView>
      </div>
    </PhotoProvider>
  );
}
