import { Metadata } from "next";
import MultiPhotoViewer from "@/components/PhotoView/MultiPhotoViewer";
import SinglePhotoViewer from "@/components/PhotoView/SinglePhotoViewer";
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
        <h1 className="text-4xl font-bold">LHF Graphic Updates</h1>
        <div className="text-gray-600">
          <time dateTime="2025-03-15">March 15, 2025</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <p className="lead mb-6 mt-6">
          A comprehensive graphic design update project for LHF, focusing on
          modernizing their visual identity while maintaining their core brand
          values. This project encompassed everything from logo refinement to
          complete brand guideline development.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">The Project</h2>
        <p className="mb-6 mt-6">
          The project began with an in-depth analysis of LHF&apos;s existing
          brand assets and market positioning. Through collaborative workshops
          and iterative design processes, we developed a refreshed visual
          language that better represents their mission and values while
          appealing to their target audience.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=Before+Design",
            "https://placehold.co/800x600/333/white?text=After+Design",
            "https://placehold.co/800x600/333/white?text=Design+Process",
            "https://placehold.co/800x600/333/white?text=Final+Assets",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Design Process</h2>
        <p className="mb-6 mt-6">
          Our approach involved multiple stages of development, from initial
          concept exploration to final asset delivery. Each phase was carefully
          documented and presented to stakeholders for feedback and refinement.
        </p>

        <SinglePhotoViewer
          image="https://placehold.co/1200x800/333/white?text=Design+Process+Timeline"
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Implementation</h2>
        <p className="mb-6 mt-6">
          The new design system was implemented across various touchpoints,
          including digital platforms, print materials, and physical spaces.
          Special attention was paid to ensuring consistency across all
          applications while maintaining flexibility for future adaptations.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=Digital+Implementation",
            "https://placehold.co/800x600/333/white?text=Print+Materials",
            "https://placehold.co/800x600/333/white?text=Physical+Spaces",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Results & Impact</h2>
        <p className="mb-6 mt-6">
          The updated visual identity has significantly improved brand
          recognition and engagement across all platforms. The new design system
          provides a solid foundation for future growth while maintaining the
          organization&apos;s established reputation and trust with its
          audience.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">Tools & Technologies</h2>
        <p className="mb-6 mt-6">
          The project utilized industry-standard design tools including Adobe
          Creative Suite, Figma for collaborative design work, and various
          prototyping tools for testing and validation. The final deliverables
          included comprehensive brand guidelines and asset libraries for both
          digital and print applications.
        </p>
      </div>
    </article>
  );
}
