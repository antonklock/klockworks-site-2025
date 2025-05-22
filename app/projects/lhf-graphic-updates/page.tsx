import { Metadata } from "next";
import BackButton from "@/components/Common/BackButton";

export const metadata: Metadata = {
  title: "LHF Graphic Updates - Project",
  description: "A detailed look at the LHF Graphic Updates project",
};

export default function LHFGraphicUpdatesPage() {
  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <BackButton href="/" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          Luleå Hockey Intro Animations (2025 Update)
        </h1>
        <div className="text-gray-600">
          <time dateTime="2025-03-15">March 15, 2025</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <h2 className="font-bold text-4xl mt-8 mb-2">TL;DR</h2>
        <p className="lead mb-6 mt-6">
          Annual collaboration with agency{" "}
          <a
            href="https://www.samuraj.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kwRed hover:underline"
          >
            Samuraj
          </a>{" "}
          to update Luleå Hockey&apos;s intro animations across the arena&apos;s
          screens and ice projection. This year&apos;s focus was refining
          existing sequences: goal celebration, TNT song, player introductions,
          and player entry animation. Technical improvements included custom
          scripting and 3D visualization of the arena for seamless screen
          integration.
        </p>
        <h2 className="font-bold text-4xl mt-8 mb-2">Project Overview</h2>
        <p className="mb-6 mt-6">
          This project is part of a yearly collaboration with the creative
          agency{" "}
          <a
            href="https://www.samuraj.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kwRed hover:underline"
          >
            Samuraj
          </a>
          , where we create and maintain intro and in-game animations for Luleå
          Hockey. The animations are played across multiple displays in the
          arena—including a newly installed LED cube—and a large ice projection
          system.
        </p>
        <p className="mb-6 mt-6">
          Unlike previous years where we created a brand new intro, this
          year&apos;s focus was on updating four existing sequences:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>The Goal Sequence</li>
          <li>The TNT Sequence</li>
          <li>Player Entry</li>
          <li>Player Presentations</li>
        </ul>
        <h2 className="font-bold text-4xl mt-8 mb-2">
          Preproduction & Workflow
        </h2>
        <p className="mb-6 mt-6">
          Samuraj typically supplies a concept deck that includes rough sketches
          and early visual assets. Based on that, I develop a rough animation
          outline that locks in pacing and the overall concept.
        </p>
        <p className="mb-6 mt-6">
          To help align screen content and transitions, I&apos;ve also developed
          a custom 3D visualizer of the arena. This tool helps us simulate and
          plan how animations look across the arena&apos;s irregular screen
          setup.
        </p>
        <video autoPlay={false} controls>
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/lhf/3d-arena-visualizer.mov"
            type="video/mp4"
          />
        </video>
        <h2 className="font-bold text-4xl mt-8 mb-2">
          TNT Sequence – &quot;LU-LE-Å&quot;
        </h2>
        <p className="mb-6 mt-6">
          Before the players enter the ice, the crowd sings a version of
          AC/DC&apos;s &quot;TNT&quot;, replacing the letters with
          &quot;LU-LE-Å&quot;. The sequence ends with the arena chanting
          &quot;…watch me explode!&quot;—which of course calls for a giant
          virtual explosion.
        </p>
        <p className="mb-6 mt-6">
          To support this moment, we animated a burning fuse wrapping around the
          mid-cube screens. Due to the cube&apos;s varying sizes and tiled
          layout, this required significant technical tweaking. The result is a
          high-impact sequence that makes full use of the new continuous LED
          cube.
        </p>
        <video autoPlay={false} controls>
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/lhf/TNT-in-arena.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="font-bold text-4xl mt-8 mb-2">
          Goal Sequence – The Flaming Puck
        </h2>
        <p className="mb-6 mt-6">
          When LHF scores, instead of showing text like &quot;GOAL&quot;, the
          team requested a more symbolic animation. We designed a flaming puck
          that descends from the LED cube, crashes into the ice, and triggers a
          fiery explosion across the arena&apos;s lower screens and floor
          projection.
        </p>
        <p className="mb-6 mt-6">
          Since this plays during the match, only lower screens and the ice are
          used—ensuring the sequence is both dramatic and non-intrusive.
        </p>
        <video controls={false} muted autoPlay loop>
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/lhf/PuckSpin.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="font-bold text-4xl mt-8 mb-2">
          Player Entry – Flow of Sparks
        </h2>
        <p className="mb-6 mt-6">
          For the entry animation, the team wanted something subtle but dynamic:
          a flow of glowing sparks emerging from the player entrance and
          traveling across the ice. These sparks bounce off virtual walls to add
          depth and realism to the projection.
        </p>
        <video autoPlay={false} controls>
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/lhf/Player-Entry.mp4"
            type="video/mp4"
          />
        </video>

        <h2 className="font-bold text-4xl mt-8 mb-2">Player Presentations</h2>
        <p className="mb-6 mt-6">
          These are updated each season with new players, names, numbers, and
          images. Thanks to a custom script I&apos;ve built, generating updated
          player presentations is a streamlined process—minimizing manual work
          while maintaining high visual consistency.
        </p>
        <video autoPlay={false} controls>
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/lhf/lineup.mp4"
            type="video/mp4"
          />
        </video>

        <h2 className="font-bold text-4xl mt-8 mb-2">Technical Notes</h2>
        <p className="mb-6 mt-6">
          All videos are rendered in ProRes, then transcoded to HAP for playback
          in the arena. Since neither After Effects nor Adobe Media Encoder
          supports HAP natively, I wrote a custom export script to automate this
          part of the pipeline.
        </p>
      </div>
    </article>
  );
}
