"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed w-full z-10">
      <nav
        className={`flex items-center justify-center md:justify-between max-w-5xl w-full mx-auto px-4 ${
          scrolled ? "backdrop-blur-2xl bg-background" : ""
        }`}
      >
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo Mathieu Portfolio"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </Link>

        <ul className="items-center gap-4 hidden md:flex">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            About me
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-primary hover:text-primary-foreground transition-colors"
          >
            Contact
          </a>
        </ul>
      </nav>
    </div>
  );
}
