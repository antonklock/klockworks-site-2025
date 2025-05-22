"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import ScrollArrow from "./ScrollArrow";

const Header = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // const isVerticalScreen = window.innerHeight > window.innerWidth;
    // const videoSrc = !isVerticalScreen
    //   ? "https://www.kwmedia.klockworks.xyz/showreel-2025_v5/showreel-2025_v5_9x16/playlist.m3u8"
    //   : "https://www.kwmedia.klockworks.xyz/showreel-2025_v5/showreel-2025_v5_16x9/playlist.m3u8";
    const videoSrc =
      "https://www.kwmedia.klockworks.xyz/showreel-2025_v5/showreel-2025_v5_16x9/playlist.m3u8";

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <ScrollArrow />
      </div>
    </header>
  );
};

export default Header;
