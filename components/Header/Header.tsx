"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import ScrollArrow from "./ScrollArrow";

const Header = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc =
      "https://www.kwmedia.klockworks.xyz/showreel-2025_v4/playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      });
    }
    // For browsers that natively support HLS (like Safari)
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      });
    }
  }, []);

  return (
    <header className="relative flex p-4 h-[100vh]">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <ScrollArrow />
      </div>
    </header>
  );
};

export default Header;
