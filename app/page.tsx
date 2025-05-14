import Header from "@/components/Header/Header";
import ProjectList from "@/components/Projects/ProjectList";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-16">
        <Header />
        <div className="px-8">
          <About />
          <ProjectList />
        </div>
      </main>
      <footer className="row-start-3 my-12 flex gap-6 flex-wrap items-center justify-center">
        <p>Klockworks 2025</p>
      </footer>
    </div>
  );
}
