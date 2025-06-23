"use client";

import { ArrowDown } from "lucide-react";
import { socialNetworks } from "@/lib/social-network";
import Link from "next/link";

export default function Heros() {
  return (
    <section
      id="heros"
      className="flex flex-col items-center justify-start md:justify-center py-8 md:py-0 h-screen gap-4"
    >
      <div className="rounded-full p-10 liquid">
        <img
          src="/memoji_1.png"
          alt="Profile"
          className="w-20 h-20 md:w-30 md:h-30"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:gap-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Mathieu FOREST
        </h1>
        <p className="text-xl md:text-2xl text-white/60 mb-4 font-light text-center">
          Développeur Full Stack & Etudient en CyberSecurity
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed text-center">
          J&apos;aime construire des expériences digitales avec des technologies
          modernes. J&apos;aime écrire du code propre, intuitif et innovant.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {socialNetworks.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className="flex items-center liquid p-4 rounded-full hover:scale-110 duration-300 transition-all"
            >
              <item.icon className="h-6 w-6 text-white" />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 animate-jump text-white/50 mt-8 hover:text-white transition-all duration-300 ease-in-out">
        <p className="text-lg md:text-lg font-light">Explore my work</p>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  );
}
