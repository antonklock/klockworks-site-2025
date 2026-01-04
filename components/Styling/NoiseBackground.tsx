"use client";

import { useEffect, useRef, useState } from "react";

interface NoiseBackgroundProps {
  className?: string;
}

export default function NoiseBackground({
  className = "",
}: NoiseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasHeight, setCanvasHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 1000
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      // Use the maximum of viewport height and document height to ensure full coverage
      const viewportHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.body.offsetHeight
      );
      setCanvasHeight(Math.max(viewportHeight, documentHeight));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    // Also update when content changes (e.g., images loading, dynamic content)
    const observer = new MutationObserver(updateHeight);
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }
    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvasHeight;
    };

    const img = new Image();
    img.src =
      "https://www.kwmedia.klockworks.xyz/projects/kw-site-2025/images/noise-light-220x220.png";

    img.onload = () => {
      resizeCanvas();
      const pattern = ctx.createPattern(img, "repeat");
      if (!pattern) return;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      const pattern = ctx.createPattern(img, "repeat");
      if (!pattern) return;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [canvasHeight]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <canvas
        ref={canvasRef}
        className={`w-full h-full pointer-events-none ${className}`}
        style={{ display: "block" }}
      />
    </div>
  );
}
