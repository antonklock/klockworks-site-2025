"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./BouncingLogo.module.css";

interface Position {
  x: number;
  y: number;
}

interface Velocity {
  x: number;
  y: number;
}

interface BouncingLogoProps {
  initialSpeed?: number;
  maxSpeed?: number;
  acceleration?: number;
  logoSize?: number;
}

const BouncingLogo = ({
  initialSpeed = 2,
  maxSpeed = 5,
  acceleration = 0.1,
  logoSize = 100,
}: BouncingLogoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef<Velocity>({ x: initialSpeed, y: initialSpeed });
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const animate = () => {
      setPosition((prevPos) => {
        const velocity = velocityRef.current;
        let newX = prevPos.x + velocity.x;
        let newY = prevPos.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Apply acceleration
        newVelX = Math.min(
          Math.max(newVelX + acceleration, -maxSpeed),
          maxSpeed
        );
        newVelY = Math.min(
          Math.max(newVelY + acceleration, -maxSpeed),
          maxSpeed
        );

        // Bounce off walls
        if (newX <= 0 || newX >= dimensions.width - logoSize) {
          newVelX = -newVelX;
          newX = newX <= 0 ? 0 : dimensions.width - logoSize;
        }

        if (newY <= 0 || newY >= dimensions.height - logoSize) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : dimensions.height - logoSize;
        }

        // Update velocity ref
        velocityRef.current = { x: newVelX, y: newVelY };

        return { x: newX, y: newY };
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      cancelAnimationFrame(animationId);
    };
  }, [dimensions.width, dimensions.height, acceleration, maxSpeed, logoSize]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.logo}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: `${logoSize}px`,
          height: `${logoSize}px`,
        }}
      >
        <Image
          src="/logos/kw-logo-stacked-white.svg"
          alt="Klockworks Logo"
          width={logoSize}
          height={logoSize}
          priority
        />
      </div>
    </div>
  );
};

export default BouncingLogo;
