"use client";

import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-text-dark text-center">
        Projet non trouvé
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Désolé, le projet que vous recherchez n&apos;existe pas ou a été
        supprimé.
      </p>
      <div>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground border border-border font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          Retour aux projets
        </Link>
      </div>
    </div>
  );
}
