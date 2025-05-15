import { Metadata } from "next";
import MultiPhotoViewer from "@/components/PhotoView/MultiPhotoViewer";
import SinglePhotoViewer from "@/components/PhotoView/SinglePhotoViewer";
import BackButton from "@/components/Common/BackButton";

export const metadata: Metadata = {
  title: "Original Creation - Project",
  description: "A detailed look at the Original Creation project",
};

export default function OriginalCreation() {
  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <BackButton href="/" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Original Creation</h1>
        <div className="text-gray-600">
          <time dateTime="2025-03-25">March 25, 2025</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <p className="lead mb-6 mt-6">
          A showcase of original creative works, exploring the intersection of
          art, technology, and storytelling. This project represents our
          commitment to pushing boundaries and creating unique experiences that
          challenge conventional thinking.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">The Project</h2>
        <p className="mb-6 mt-6">
          This ongoing project serves as a platform for experimental and
          innovative creative works. Each piece is carefully crafted to explore
          new ideas and techniques, pushing the boundaries of what&apos;s
          possible in digital and interactive media.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=Concept+Sketch",
            "https://placehold.co/800x600/333/white?text=Development+Phase",
            "https://placehold.co/800x600/333/white?text=Final+Work",
            "https://placehold.co/800x600/333/white?text=Exhibition",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Creative Process</h2>
        <p className="mb-6 mt-6">
          Our creative process begins with extensive research and ideation,
          followed by iterative development and refinement. Each piece goes
          through multiple stages of evolution, from initial concept to final
          execution, with careful attention to detail and artistic integrity.
        </p>

        <SinglePhotoViewer
          image="https://placehold.co/1200x800/333/white?text=Creative+Process+Timeline"
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">
          Technical Implementation
        </h2>
        <p className="mb-6 mt-6">
          The technical implementation varies depending on the specific piece,
          but we consistently employ cutting-edge technologies and frameworks to
          bring our creative visions to life. This includes custom software
          development, interactive installations, and digital art creation.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=Technical+Setup",
            "https://placehold.co/800x600/333/white?text=Interactive+Elements",
            "https://placehold.co/800x600/333/white?text=User+Experience",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Impact & Reception</h2>
        <p className="mb-6 mt-6">
          Our original creations have been well-received in various exhibitions
          and digital platforms, sparking conversations and inspiring new ideas
          in the creative community. The project continues to evolve as we
          explore new concepts and technologies.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">Tools & Technologies</h2>
        <p className="mb-6 mt-6">
          The project utilizes a diverse range of tools and technologies,
          including creative software suites, programming frameworks, and
          specialized hardware. This technical diversity allows us to create
          unique and engaging experiences that push the boundaries of digital
          art and interactive media.
        </p>
      </div>
    </article>
  );
}
