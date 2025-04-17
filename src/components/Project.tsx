import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-start justify-start gap-4 py-20 border-b border-border"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold uppercase text-primary-foreground text-center md:text-left w-full">
          🚀 Mes Projets
        </h1>
        <p className="text-sm text-foreground">
          Plonger dans le développement, c&apos;est comme hacker la réalité pour
          la rendre plus simple, plus belle, ou carrément plus fun. Voici
          quelques projets que j&apos;ai réalisés au fil de mon apprentissage et
          de mon temps libre, mêlant web, sécurité, logique et créativité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {getAllProjects().map((item, index) => {
          return (
            <Card key={index} className="border-border border">
              <CardHeader className="flex-grow">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.overview}</CardDescription>
              </CardHeader>
              <CardContent className="gap-1 flex flex-wrap mt-auto justify-center md:justify-start">
                <Link href={`/projects/${item.slug}`}>
                  <Button variant="default">Voir le projet</Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
