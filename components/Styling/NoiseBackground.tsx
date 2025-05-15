"use client";

import { useEffect, useRef, useState } from "react";

interface NoiseBackgroundProps {
  className?: string;
}

export default function NoiseBackground({
  className = "",
}: NoiseBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight + 100);
    };

    // Initial height
    updateHeight();

    // Create a ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.documentElement);

    // Also update on window resize
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = pageHeight;
    };

    // Load and draw the noise texture
    const img = new Image();
    img.src =
      "https://www.kwmedia.klockworks.xyz/projects/kw-site-2025/images/noise-light-220x220.png";

    img.onload = () => {
      resizeCanvas();

      // Create a pattern from the image
      const pattern = ctx.createPattern(img, "repeat");
      if (!pattern) return;

      // Fill the canvas with the pattern
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a black overlay with 0.5 opacity
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Handle window resize
    window.addEventListener("resize", () => {
      resizeCanvas();
      const pattern = ctx.createPattern(img, "repeat");
      if (!pattern) return;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reapply the black overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [pageHeight]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-[${pageHeight}px] pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}
