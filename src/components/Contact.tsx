import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-start justify-start gap-4 py-20 border-b border-border"
    >
      <h1 className="text-4xl font-bold uppercase text-primary-foreground text-center md:text-left w-full">
        ✉️ Disponible pour vos projets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-center w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-md text-primary text-center md:text-left w-full">
            Un projet en tête ? Une question ?
            <br />
            N&apos;hésitez pas à me contacter, je suis ouvert aux
            collaborations, opportunités et échanges autour du développement, de
            la cybersécurité ou de FiveM.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center bg-card rounded-lg p-4 border border-border">
          <p className="text-md font-bold text-secondary">Email</p>
          <p className="text-sm text-primary">pro.mathieuforest@icloud.com</p>
          <br />
          <p className="text-md font-bold text-secondary">Discord</p>
          <p className="text-sm text-primary">http://discord.gg/bape1950</p>
          <br />
          <p className="text-md font-bold text-secondary">Linkedin</p>
          <p className="text-sm text-primary">
            https://www.linkedin.com/in/mathieu-forest/
          </p>
        </div>
      </div>
    </section>
  );
}
