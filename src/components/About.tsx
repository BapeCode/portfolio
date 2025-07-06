import "../app/globals.scss";

export default function About() {
  const skills = [
    {
      name: "Front-End & Back-End",
      description:
        "Je développe des interfaces web modernes et réactives avec React, Next.js, Svelte et TypeScript. Côté back-end, j'utilise Node.js et Python pour créer des APIs sécurisées et évolutives. Ma compréhension de l'algorithmie et du C++ me permet d'optimiser les performances et la logique métier.",
    },
    {
      name: "Database & Storage",
      description:
        "J'architecture des systèmes de données fiables avec MySQL et Prisma, en assurant une bonne structuration, une communication fluide avec le back-end, et une gestion cohérente des données.",
    },
    {
      name: "DevOps & Outils",
      description:
        "J'utilise Docker pour le déploiement en environnement isolé et GitHub pour la gestion de versions et l'intégration continue. Ces outils me permettent d'assurer un workflow fluide, reproductible et collaboratif.",
    },
    {
      name: "Cybersécurité",
      description:
        "Je m'initie au hacking éthique à travers Root Me et Hack The Box, avec un intérêt marqué pour l'OSINT, le reverse engineering, et l'exploitation de failles web. Cette pratique m'aide à intégrer une logique sécurité dans tous mes projets.",
    },
  ];

  return (
    <div className="about">
      <section id="about" className="about-content">
        <div className="about-container">
          <div>
            <h2>Qui suis-je ?</h2>
            <p>
              Salut, je m&apos;appelle Mathieu Forest, développeur web orienté
              Frontend / Backend, avec une passion pour la cybersécurité.
            </p>
            <p>
              Actuellement étudiant à la{" "}
              <strong>Guardia CyberSecurity School</strong> à Lyon, je conçois
              des sites et applications web modernes, intuitifs et performants.
              J&apos;accorde une grande importance à la qualité de
              l\&apos;expérience utilisateur et à la cohérence visuelle.
            </p>
            <p>
              Au-delà du développement web, je m&apos;intéresse aussi au reverse
              engineering, à l&apos;automatisation avec Python, à
              l&apos;infrastructure réseau, notamment à l&apos;OSINT.
            </p>
            <p>
              J&apos;aime apprendre en continu, partager ce que je découvre, et
              contribuer à des projets qui ont du sens. Je suis ouvert aux
              opportunités de collaboration, de stage ou de mission freelance,
              pour construire, progresser et apporter de la valeur.
            </p>
            <p>
              <strong>Disponible pour de nouveaux projets !</strong> Passionné
              par les nouvelles technologies et les défis techniques complexes.
            </p>
          </div>
          <div>
            <h2>Compétences</h2>
            <div className="about-technologies">
              {skills.map((skill) => (
                <div className="about-technology-item" key={skill.name}>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
