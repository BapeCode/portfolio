"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import "./navigation.style.scss";

export default function NavigationComponent() {
  const nav = [
    {
      name: "Accueil",
      href: "home",
    },
    {
      name: "A propos",
      href: "about",
    },
    {
      name: "Projets",
      href: "projects",
    },
    {
      name: "Services",
      href: "services",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];
  const [open, setOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <section className="navigation">
      <nav className="navigation-icons" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </nav>

      <div className={`navigation-links ${open ? "active" : ""}`}>
        <div className="links-container">
          <div className="links-items">
            {nav.map((link) => (
              <span key={link.name} onClick={(e) => handleClick(e, link.href)}>
                {link.name}
              </span>
            ))}
          </div>

          <div className="links-button">
            <Link href={"https://github.com/BapeCode"}>
              <button>
                <Github />
              </button>
            </Link>
            <Link href={"https://www.linkedin.com/in/mathieu-forest/"}>
              <button>
                <Linkedin />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
