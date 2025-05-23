import Header from "@/components/Header/Header";
import ProjectList from "@/components/Projects/ProjectList";
import About from "@/components/About/About";
import RgbStripes from "@/components/Styling/RgbStripes";
export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col items-center px-8">
          <About />
          <RgbStripes rotation={2} />
          <ProjectList />
        </div>
      </main>
      <footer className="row-start-3 my-12 flex gap-6 flex-wrap items-center justify-center">
        <p>Klockworks 2025</p>
      </footer>
    </div>
  );
}
