"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const titles = [
  "a filmmaker",
  "an animator",
  "a developer",
  "a game maker",
  "a tryer of things",
  "a creator",
  "a madman",
  "a joker",
  "a regular guy",
  "a nerd",
  "a project manager",
  "a dad",
  "a friend",
  "a pirate",
  "a dreamer",
];

const About = () => {
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <SectionTitle icon="/icons/flower.svg" title="KLOCK" />
      <div className="flex flex-col md:flex-row items-center w-full gap-4">
        <Image
          src="/images/anton.jpg"
          alt="About Me"
          className="rounded-lg mb-4"
          width={400}
          height={400}
        />
        <div>
          <p className="text-lg text-left">
            I&apos;m Anton. I&apos;m
            <span className="text-kwRed"> {title} </span>
            with a passion for all things creative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
