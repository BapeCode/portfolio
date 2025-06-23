import About from "@/components/About";
import Contact from "@/components/Contact";
import Heros from "@/components/Heros";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">
      <Heros />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
