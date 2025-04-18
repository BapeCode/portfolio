import {
  getProjectBySlug,
  getNextProject,
  getPreviousProject,
} from "@/lib/projects";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjectBySlug(slug);

  if (!projet) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: projet.title,
    description: projet.overview,
  };
}

// For the page component, make it async to match Next.js 15's expectations
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projet = getProjectBySlug(slug);

  if (!projet) {
    notFound();
  }

  const nextProject = getNextProject(projet.slug);
  const prevProject = getPreviousProject(projet.slug);

  return (
    <main className="max-w-5xl mx-auto px-4 overflow-x-hidden">
      {/* Your existing JSX remains the same */}
      <section className="flex flex-col items-start justify-start gap-4 py-20 border-b border-border">
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            href={"/"}
            className="flex flex-row items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <p className="text-sm">Retour aux projets</p>
          </Link>
          {projet.github && (
            <Link
              href={projet.github}
              className="flex flex-row items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Github className="h-4 w-4" />
              <p className="text-sm">Source code</p>
            </Link>
          )}
        </div>

        {/* Rest of your JSX remains unchanged */}
        <div className="flex items-center justify-center w-full">
          <h3 className="text-3xl font-bold text-primary-foreground text-center md:text-left">
            {projet.title}
          </h3>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 py-5 h-full w-full">
          <h1 className="text-2xl font-bold text-primary-foreground">
            Apperçu
          </h1>
          <p className="text-md text-secondary break-words whitespace-pre-wrap w-full">
            {projet.overview}
          </p>

          <br />

          <h1 className="text-2xl font-bold text-primary-foreground">
            Description
          </h1>
          <p className="text-md text-secondary break-words whitespace-pre-wrap w-full">
            {projet.description}
          </p>

          <br />

          <h1 className="text-2xl font-bold text-primary-foreground">
            Contexte
          </h1>
          <p className="text-md text-secondary break-words whitespace-pre-wrap w-full">
            {projet.context}
          </p>

          <br />
          <h1 className="text-2xl font-bold text-primary-foreground">
            Fonctionnalités
          </h1>

          <div className="w-full">
            <ul className="flex flex-wrap gap-3 w-full">
              {projet.features.map((feature, index) => (
                <Badge key={index} className="text-sm text-secondary">
                  {feature}
                </Badge>
              ))}
            </ul>
          </div>

          <br />
          <h1 className="text-2xl font-bold text-primary-foreground">
            Technologies
          </h1>

          <div className="w-full">
            <ul className="flex flex-wrap gap-3 w-full">
              {projet.technologies.map((techno, index) => (
                <Badge key={index} className="text-sm text-secondary">
                  {techno}
                </Badge>
              ))}
            </ul>
          </div>

          <br />
          <h1 className="text-2xl font-bold text-primary-foreground">
            Compétences
          </h1>

          <div className="w-full">
            <ul className="flex flex-wrap gap-3 md:w-full">
              {projet.skills.map((skill, index) => (
                <Badge key={index} className="text-sm text-secondary">
                  {skill}
                </Badge>
              ))}
            </ul>
          </div>

          <br />
          <h1 className="text-2xl font-bold text-primary-foreground">
            Résultat
          </h1>
          <p className="text-md text-secondary break-words whitespace-pre-wrap w-full">
            {projet.result}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex flex-row gap-4 items-center justify-center bg-card rounded-md p-4 border border-border cursor-pointer w-full md:w-auto md:justify-end"
            >
              <ArrowLeft className="h-5 w-5 text-primary   transition-colors ml-0 md:ml-auto" />
              <div className="flex flex-col items-center md:items-start">
                <p className="text-sm text-secondary ">Projet suivant</p>
                <p className="text-md text-primary-foreground font-bold">
                  {prevProject?.title}
                </p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex flex-row gap-4 items-center justify-center bg-card rounded-md p-4 border border-border cursor-pointer w-full md:w-auto md:justify-end"
            >
              <div className="flex flex-col items-center md:items-end">
                <p className="text-sm text-secondary">Projet suivant</p>
                <p className="text-md text-primary-foreground font-bold">
                  {nextProject?.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-colors ml-0 md:ml-auto" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </main>
  );
}
