import { Metadata } from "next";
import BackButton from "@/components/Common/BackButton";

export const metadata: Metadata = {
  title: "DCOP - An on rails police simulator",
  description: "A detailed look at the DCOP project",
};

export default function DCOPPage() {
  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <BackButton href="/" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">DCOP</h1>
        <div className="text-gray-600">
          <time dateTime="2024-02-25">May 22, 2025</time>
        </div>
      </header>

      <div className="prose prose-lg font-mono">
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <p className="lead mb-6 mt-6">
          DCOP is a full motion video on rails shooter game for PC. Created in
          Unity together with John Eriksson. I was responsible for all
          programming and technical implementations.
        </p>
        <p className="lead mb-6 mt-6">
          More info coming soon! Until then check out the trailer or{" "}
          <span>
            <a
              href="https://store.steampowered.com/app/2542320/DCOP/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kwRed hover:underline"
            >
              visit the Steam Page
            </a>
          </span>
        </p>

        <video
          autoPlay={false}
          controls
          poster="/videoThumbs/dcop-thumbnail.jpg"
          className="w-full h-auto"
        >
          <source
            src="https://www.kwmedia.klockworks.xyz/projects/dcop/DCOP%20Game%20Trailer%2001.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </article>
  );
}
