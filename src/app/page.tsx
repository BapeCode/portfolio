import About from "@/components/about";
import Contact from "@/components/contact";
import Heros from "@/components/heros";
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
