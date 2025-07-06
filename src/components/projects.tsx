import Link from "next/link";
import "../app/globals.scss";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Cyberfolio - Projet Guardia",
      description:
        "Lors de notre projet dans notre école, nous avons pu créer un site web 'cyberfolio' de notre équipe. Le but, découvrir le développement web, et développer un site sécuriser, performant et évolutif. Cela à donc été un projet très ambitieux, qui nous a permis de découvrir le front-end, le back-end et la gestion de bases de données.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      link: "https://github.com/BapeCode/GCS_FullStack_Project",
    },
    {
      name: "Billeterie - OnCity",
      description:
        "Lors de mon stage à OnCity, j'ai pu créer un site web de billetterie, avec une gestion de panier, des produits, avec un panel client, et un système de paiement. Ce projet, combine, performance, sécurité et exclusivité, avec un design intuitif et responsive.",
      technologies: ["Next.js", "Prisma", "Payplug", "ZOD"],
      link: "https://github.com/BapeCode/oncity-billeterie",
    },
    {
      name: "Site web - Module de réservation",
      description:
        "Lors de mon stage à OnCity, j'ai aussi du créer un site web de réservation, avec une page client avec la positibilité à l'utilisateur de choisir l'activité et de voir son historique de réservation. J'ai aussi intégré une page administrateur complet, afin de gérer les réservations, les utilisateurs, les activités, et tant d'autres. Pour des raisons de secret professionnel, j'ai choisi de ne pas publier le code source du site web.",
      technologies: ["Next.js", "Zod", "Prisma", "MySQL"],
    },
    {
      name: "Reverse engineering - Arduino",
      description:
        "Avec mon école, nous avons eu l'occasion de faire un projet sur le reverse engineering, avec comme but, de développer un scanner de badge RFID et un app web relier à ce dernier. On a pu découvrir le développement de l'Arduino en C++ et le développement d'un scanner RFID. Ce projet a permis de découvrir les bases de la programmation, et de comprendre les fonctionnalités de l'Arduino.",
      technologies: ["Arduino", "C++", "Express.js"],
      link: "https://github.com/BapeCode/GCS-Reverse-Engineering",
    },
    {
      name: "Freelance - FiveM",
      description:
        "Depuis 2021, j'ai pu commencer à travailler en freelance sur FiveM, un mod de jeu basé sur GTA-5, qui permet de faire des serveurs RôlePlay. J'ai pu développer des fonctionnalités de base, jusqu'au développement de frameworks, et d'interface utilisateur (UI). J'ai aussi pu développer des plugins, et des scripts pour améliorer l'expérience utilisateur.",
      technologies: ["FiveM", "Lua", "React", "MySQL"],
    },
  ];

  return (
    <div className="projects">
      <section id="projects" className="projects-content">
        <div className="projects-container">
          <h1>Mes projets</h1>

          <div className="projetcs-grid">
            {projects.map((projet) => (
              <div key={projet.name} className="project-items">
                <h1>{projet.name}</h1>
                <p>{projet.description}</p>
                <div className="project-tech">
                  {projet.technologies.map((tech) => (
                    <div key={tech} className="tech-item">
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
                {projet.link ? (
                  <Link href={projet.link}>
                    <Github />
                    Code
                  </Link>
                ) : (
                  <a href="#">Aucun lien</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
