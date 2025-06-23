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
      className="flex flex-col items-center justify-center gap-8 py-10 px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold uppercase text-white text-center w-full">
        Mes Projects
      </h1>
      <p className="text-lg md:text-xl text-white/80 text-center">
        Voici quelques projets que j'ai réalisés au fil de mon apprentissage et
        de mon temps libre, mêlant web, sécurité, logique et créativité.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {getAllProjects().map((item, index) => {
          return (
            <div
              className="liquid rounded-2xl p-6 flex flex-col justify-between items-center gap-4"
              key={index}
            >
              <h1 className="text-2xl font-bold text-white text-center">
                {item.title}
              </h1>
              <p className="text-sm md:text-md text-white/80 text-center">
                {item.overview}
              </p>
              <div className="flex flex-col items-center w-full gap-1">
                <Link href={`/projects/${item.slug}`} className="w-full">
                  <Button variant="ghost" className="w-full text-white">
                    Voir le projet
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex flex-col gap-2">


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
      </div> */}
    </section>
  );
}
