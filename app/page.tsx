import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-16 px-8">
        <Header />
        <About />
        <Projects />
      </main>
      <footer className="row-start-3 my-12 flex gap-6 flex-wrap items-center justify-center">
        <p>Klockworks 2025</p>
      </footer>
    </div>
  );
}
