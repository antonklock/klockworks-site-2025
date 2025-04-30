"use client";

import Image from "next/image";
import { RotatingHeadline } from "./RotatingHeadline";
import Button from "../Common/Button";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-16 ">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl gap-6 md:gap-16">
        <Image
          src="/images/anton.jpg"
          alt="About Me"
          className="rounded-lg mb-4"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-4">
          <RotatingHeadline
            textColor="#FFFFFF"
            highlightColor="#CE5025"
            textSize={24}
            rotationSpeedMs={4000}
            typingSpeedMs={40}
          />
          <div className="mt-4 flex gap-2">
            <Button href="mailto:anton@klockworks.se">Say hello!</Button>
            <Button variant="secondary" href="">
              Entire Life story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
