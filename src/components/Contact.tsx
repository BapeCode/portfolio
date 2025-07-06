import { Github, Linkedin, Mail, Pin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact">
      <section id="contact" className="contact-content">
        <div className="contact-container">
          <h1>Contact</h1>
          <p>
            Un projet en tête ? Discutons de la façon dont nous pouvons
            collaborer.
          </p>

          <div className="contact-grid">
            <h3>Restons en contact</h3>
            <p>
              Je suis toujours enthousiaste à l&apos;idée de relever de nouveaux
              défis et de collaborer avec des personnes talentueuses. Que vous
              ayez un projet spécifique en tête ou que vous souhaitiez
              simplement dire bonjour, j&apos;aimerais avoir de vos nouvelles.
            </p>

            <div className="contact-email">
              <div className="contact-email-icon">
                <Mail />
              </div>
              <div className="contact-email-content">
                <p>Email</p>
                <p>pro.mathieuforest@icloud.com</p>
              </div>
            </div>

            <div className="contact-email">
              <div className="contact-email-icon">
                <Pin />
              </div>
              <div className="contact-email-content">
                <p>Localisation</p>
                <p>Lyon, France</p>
              </div>
            </div>

            <h3>Suivez-moi</h3>
            <div className="contact-social">
              <Link href={"https://github.com/BapeCode"}>
                <Github />
                Github
              </Link>

              <Link href={"https://www.linkedin.com/in/mathieu-forest/"}>
                <Linkedin />
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
