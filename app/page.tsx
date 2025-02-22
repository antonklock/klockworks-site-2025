import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-16 px-8">
        <Header />
        <Projects />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Klockworks 2025</p>
      </footer>
    </div>
  );
}
