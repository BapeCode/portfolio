import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between max-w-5xl w-full mx-auto p-4">
      <p className="text-sm text-primary">
        Copiright © 2025. Tous droits réservés.
      </p>
      <div className="flex flex-row items-center gap-4">
        <Link href={"https://www.linkedin.com/in/mathieu-forest/"}>
          <Linkedin className="h-5 w-5 text-primary hover:text-secondary transition-colors" />
        </Link>
        <Link href={"https://www.youtube.com/@bapefivem"}>
          <Youtube className="h-5 w-5 text-primary hover:text-secondary transition-colors" />
        </Link>
        <Link href={"https://www.github.com/BapeCode"}>
          <Github className="h-5 w-5 text-primary hover:text-secondary transition-colors" />
        </Link>
      </div>
    </footer>
  );
}
