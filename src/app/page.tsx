import About from "@/components/About";
import Contact from "@/components/Contact";
import Heros from "@/components/Heros";
import Projects from "@/components/projects";
import Service from "@/components/service";

export default function Home() {
  return (
    <main>
      <Heros />
      <About />
      <Projects />
      <Service />
      <Contact />
    </main>
  );
}
