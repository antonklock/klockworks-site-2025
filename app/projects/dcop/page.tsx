import { Metadata } from "next";
import BackButton from "@/components/Common/BackButton";

export const metadata: Metadata = {
  title: "DCOP - Project",
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
          DCOP is a full motion video on rails shooter game. Created in Unity
          together with John Eriksson. I was responsible for all programming and
          technical implementations.
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

        <video autoPlay={false} controls>
          <source
            src="https://www.dropbox.com/scl/fi/vr1odc63dpfyxpdaqutfy/DCOP-Game-Trailer-01.mp4?rlkey=2y4uvguc4fz2qfy7j8evw4e4s&dl=1"
            type="video/mp4"
          />
        </video>
        {/* <p className="lead mb-6 mt-6">
          A comprehensive project focused on developing and implementing a
          distributed control system for optimizing operational processes. This
          project showcases the integration of advanced control algorithms with
          real-world industrial applications.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">Project Overview</h2>
        <p className="mb-6 mt-6">
          The DCOP (Distributed Control and Optimization Platform) project
          represents a significant advancement in industrial automation and
          control systems. Through the implementation of distributed control
          algorithms and real-time optimization techniques, we&apos;ve developed
          a robust platform capable of handling complex industrial processes
          with improved efficiency and reliability.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=System+Architecture",
            "https://placehold.co/800x600/333/white?text=Control+Interface",
            "https://placehold.co/800x600/333/white?text=Optimization+Results",
            "https://placehold.co/800x600/333/white?text=Implementation+Process",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">
          Technical Implementation
        </h2>
        <p className="mb-6 mt-6">
          The platform was built using a microservices architecture, allowing
          for scalable and maintainable deployment across various industrial
          environments. Key components include real-time data processing,
          distributed optimization algorithms, and a user-friendly interface for
          monitoring and control.
        </p>

        <SinglePhotoViewer
          image="https://placehold.co/1200x800/333/white?text=Technical+Architecture"
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Key Features</h2>
        <p className="mb-6 mt-6">
          The system incorporates several innovative features, including:
          distributed control algorithms, real-time optimization, predictive
          maintenance capabilities, and comprehensive monitoring tools. These
          features work together to provide a complete solution for industrial
          process optimization.
        </p>

        <MultiPhotoViewer
          images={[
            "https://placehold.co/800x600/333/white?text=Control+Panel",
            "https://placehold.co/800x600/333/white?text=Data+Visualization",
            "https://placehold.co/800x600/333/white?text=System+Monitoring",
          ]}
          unoptimized={true}
        />

        <h2 className="font-bold text-4xl mt-8 mb-2">Results & Impact</h2>
        <p className="mb-6 mt-6">
          The implementation of DCOP has resulted in significant improvements in
          operational efficiency, reduced energy consumption, and enhanced
          system reliability. The platform has demonstrated its effectiveness
          across various industrial applications, providing measurable benefits
          to our clients.
        </p>

        <h2 className="font-bold text-4xl mt-8 mb-2">Technologies Used</h2>
        <p className="mb-6 mt-6">
          The project utilized a modern technology stack including Python for
          algorithm development, Docker for containerization, Kubernetes for
          orchestration, and various industrial communication protocols for
          seamless integration with existing systems. The frontend was built
          using React and TypeScript, providing a responsive and intuitive user
          interface.
        </p> */}
      </div>
    </article>
  );
}
