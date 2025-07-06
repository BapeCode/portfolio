"use client";

import { ArrowDown, Download } from "lucide-react";
import "../app/globals.scss";

export default function Heros() {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="heros">
      <div className="background-animation">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="heros-container">
        <div>
          <h1>Mathieu Forest</h1>
          <p>Développeur FullStack & étudiant en Cybersécurité</p>

          <div className="heros-buttons">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-flex" }}
            >
              <button className="secondary">
                Télécharger mon CV <Download />
              </button>
            </a>
            <button onClick={(e) => handleClick(e)}>
              Plus d&apos;informations
              <ArrowDown />
            </button>
          </div>

          <div className="status">Disponible</div>
        </div>

        <div>
          <div className="heros-profile">
            <img src="/memoji_1.png" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
