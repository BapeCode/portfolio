import { Code, Globe, Users, Zap } from "lucide-react";
import "../app/globals.scss";

export default function Service() {
  const services = [
    {
      name: "Développement web",
      description:
        "Applications web full-stack modernes avec React, Next.js et Node.js, optimisées pour la performance.",
      icon: Code,
    },
    {
      name: "Développement Frontend",
      description:
        "Interfaces utilisateur modernes et responsives avec les dernières technologies web.",
      icon: Globe,
    },
    {
      name: "Optimisation de performance",
      description:
        "Amélioration des performances et de la sécurité de vos applications existantes.",
      icon: Zap,
    },
    {
      name: "Consulting technique",
      description:
        "Conseil en architecture logicielle et accompagnement d'équipes de développement.",
      icon: Users,
    },
  ];

  return (
    <div className="service">
      <section id="services" className="service-content">
        <div className="service-container">
          <h1>Service</h1>
          <p>Solutions complètes alliant développement web et cybersécurité.</p>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-item" key={service.name}>
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
