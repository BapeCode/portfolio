"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export default function Heros() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="heros"
      className="md:grid md:grid-cols-2 flex flex-col-reverse gap-4 items-center justify-center h-screen"
    >
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-5xl font-bold uppercase text-primary-foreground text-center md:text-left w-full">
          MATHIEU FOREST
        </h1>
        <p className="text-sm text-foreground text-center md:text-left w-full">
          Developper Web Full-Stack & creator of experience in the plateform RP
          FiveM.
        </p>
        <div className="flex items-center justify-center md:justify-start w-full">
          <a href="#about" onClick={(e) => handleScroll(e)}>
            <Button variant="default">Explorer mon monde</Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end">
        <div className="flex items-center gap-4 bg-card rounded-full p-20 border border-border">
          <img src="/memoji_1.png" alt="Mathieu" className="w-32 h-32" />
        </div>
      </div>

      <div
        className="absolute left-0 bottom-0 w-full h-[78%] pointer-events-none -z-10 grid-background"
        aria-hidden="true"
      />
    </section>
  );
}
