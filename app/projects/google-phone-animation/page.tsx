import { Metadata } from "next";
import BackButton from "@/components/Common/BackButton";

export const metadata: Metadata = {
  title: "LHF Graphic Updates - Project",
  description: "A detailed look at the LHF Graphic Updates project",
};

export default function GooglePhoneAnimationPage() {
  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <BackButton href="/" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          Google Pixel 7 Regiounal Launch Animations
        </h1>
        <div className="text-gray-600">
          <time dateTime="2024-01-15">January 12, 2024</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <h2 className="font-bold text-4xl mt-8 mb-2">TL;DR</h2>
        <p className="lead mb-6 mt-6">
          Google&apos;s Pixel 7 launch animation. Created in Blender. More info
          coming soon.
        </p>
      </div>

      <video autoPlay={false} controls>
        <source
          src="https://www.kwmedia.klockworks.xyz/projects/google/pixel8-anims/google_closeUps_white_01.mp4"
          type="video/mp4"
        />
      </video>
    </article>
  );
}
