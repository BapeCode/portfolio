export interface Project {
  id: number;
  slug: string;
  title: string;
  overview: string;
  description: string;
  context: string;
  features: string[];
  technologies: string[];
  skills: string[];
  result: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "development-web",
    title: "Développement Web",
    overview:
      "Conception et développement de sites web modernes, responsives, avec un focus sur la performance, la clarté du code et l’expérience utilisateur.",
    description:
      "Ce projet m’a permis de m’immerger dans l’écosystème web complet, du front-end stylisé avec React & Tailwind jusqu’au back-end solide en Express.js. J’ai appris à bâtir des interfaces ergonomiques et modulaires, tout en assurant un traitement logique et sécurisé des données via API.",
    context:
      "Le web est un espace vaste, rapide, exigeant. L’idée était de développer des applications qui soient esthétiques, rapides, maintenables et surtout facilement réutilisables. Il ne s’agissait pas seulement de faire un joli site, mais de penser expérience utilisateur, structure de code propre, séparation logique des couches, tout en maintenant un haut niveau de lisibilité et de cohérence.",
    features: [
      "Interfaces responsives avec React + TailwindCSS",
      "Back-end REST API avec Node.js/Express",
      "Système d’authentification, rôles utilisateurs",
      "Gestion CRUD, base de données MySQL",
      "Déploiement sur Vercel / Railway",
      "Animations fluides et design moderne, minimaliste",
    ],
    technologies: [
      "HTML, CSS, JavaScript, TypeScript",
      "React, TailwindCSS",
      "Node.js, Express.js",
      "MySQL, Prisma",
      "REST API, Auth",
    ],
    skills: [
      "Meilleure gestion des architectures fullstack (front/back + base de données)",
      "Autonomie sur l’ensemble du cycle projet : maquette → API → déploiement",
      "Optimisation du code propre, modulaire et réutilisable",
      "Sens accru pour l’expérience utilisateur et le responsive design",
      "Approfondissement des standards REST API et de l’authentification sécurisée",
    ],
    result:
      "Des projets web rapides, structurés, évolutifs, qui m’ont permis de maîtriser le cycle complet d’une application et de développer une vraie méthode de travail en solo. Je suis désormais capable de livrer une solution web moderne de A à Z.",
    github: "https://github.com/BapeCode/GCS_FullStack_Project",
  },
  {
    id: 2,
    slug: "reverse-engineering",
    title: "Reverse Engineering – Projet badge RFID",
    overview:
      "Un système liant badge RFID, Arduino et API backend pour identifier des utilisateurs à partir de données physiques.",
    description:
      "L’objectif était de lier le monde physique au digital via une chaîne complète : scan de badge → traitement backend → action frontend.Un vrai travail d’intégration hardware/software, pensé pour être léger, rapide, et adaptable à d'autres usages comme le contrôle d’accès.",
    context:
      "Je voulais sortir de la logique purement logicielle pour manipuler du hardware interactif. Le défi : construire un système temps réel, stable et clair à l’utilisation, tout en gérant la communication série, les modales dynamiques, et la structuration des données utilisateurs.",
    features: [
      "Lecture RFID via Arduino UNO + RC522",
      "Transmission UID → API Express via port série",
      "Interface web live avec modale interactive",
      "Attribution ou modification d’un utilisateur",
      "Historique des scans",
    ],
    technologies: [
      "Arduino (C++)",
      "Node.js, Express.js",
      "JavaScript vanilla",
      "Communication série",
      "API REST",
      "DOM Manipulation, gestion des événements",
    ],
    skills: [
      "Compréhension approfondie de la communication série entre matériel et serveur",
      "Capacité à synchroniser du hardware avec une interface web en temps réel",
      "Renforcement de ma logique API (flux d’événements déclenchés par capteur)",
      "Création d’un projet hybride software/hardware complet",
      "Expérience en débogage hardware et adaptation de code embarqué",
    ],
    result:
      "Un système fluide et modulaire, réutilisable pour des cas comme le pointage, la sécurité, ou des démos tech OSINT / cybersécurité. Un vrai projet transversal qui m’a appris à gérer interface, matériel et logique métier ensemble.",
    github: "https://github.com/BapeCode/GCS-Reverse-Engineering",
  },
  {
    id: 3,
    slug: "algorithmes-et-python",
    title: "Algorithmes & Python",
    overview:
      "Série d’outils créés pour visualiser des algorithmes, renforcer ma logique, et expérimenter les capacités de Python dans des petits projets pratiques.",
    description:
      "Python est parfait pour construire rapidement des idées.Ici, j’ai exploré des algorithmes de tri, de recherche, des jeux interactifs, et même des interfaces simples en Tkinter. Le but était autant de comprendre les structures que de rendre visible ce qui est habituellement abstrait.",
    context:
      "Comprendre un algorithme, c’est bien. Mais le voir fonctionner en temps réel, interagir avec ses étapes, et le coder de zéro sans IDE magique, c’est une autre étape. Je voulais m’exercer à visualiser, structurer, automatiser, et rendre ces outils utiles dans ma pratique quotidienne.",
    features: [
      "Visualisation d’algorithmes (tri à bulles, fusion)",
      "Générateur de mots de passe sécurisé",
      "Tri automatique de fichiers",
      "Mini-jeux (devinette, pendu)",
      "Interfaces graphiques simples avec Tkinter",
    ],
    technologies: [
      "Python",
      "Tkinter, PyQT",
      "Structures de données (listes, dictionnaires)",
      "Algo classiques (tri, recherche)",
      "Gestion de fichiers, boucles, input/output",
    ],
    skills: [
      "Maîtrise des structures de données et algorithmes classiques",
      "Capacité à rendre visuelle une logique algorithmique abstraite",
      "Renforcement de ma rigueur dans la résolution de problèmes",
      "Développement de petits outils utiles et efficaces au quotidien",
      "Autonomie en Python, de la console à l’interface graphique",
    ],
    result:
      "Une compréhension solide des bases Python, des outils que j’utilise encore aujourd’hui, et un vrai gain en logique et rigueur algorithmique. Ça a aussi renforcé ma capacité à résoudre rapidement des problèmes avec des scripts simples et efficaces.",
    github: "https://github.com/BapeCode/GCS_PythonAlgo",
  },
  {
    id: 4,
    slug: "osint-et-cybersecurite",
    title: "OSINT & Cybersécurité",
    overview:
      "Exploration d’outils OSINT pour collecter, croiser et exploiter des données disponibles publiquement dans un cadre de sensibilisation ou d’audit.",
    description:
      "Le but de ce projet était de découvrir les failles humaines ou techniques que n’importe qui peut repérer avec des outils OSINT bien utilisés. C’est un domaine essentiel pour comprendre la sécurité globale d’une entreprise ou d’un utilisateur.",
    context:
      "Je voulais apprendre à rechercher de l’info pertinente en source ouverte : noms de domaine, failles exposées, fuites d’identifiants, traces sur les réseaux… Le défi résidait dans la croisement intelligent des données, leur organisation, et surtout leur interprétation pour un rapport compréhensible.",
    features: [
      "Recherches Google avancées (Dorks)",
      "Scans IP/domains avec theHarvester, Shodan",
      "Visualisations de liens avec Maltego",
      "Collecte + structuration des résultats dans un rapport synthétique",
      "Préparation de scénarios pour démonstrations ou sensibilisation",
    ],
    technologies: [
      "Google Dorks",
      "Maltego",
      "theHarvester",
      "Shodan",
      "Analyse croisée, rédaction synthétique, création de rapports OSINT",
    ],
    skills: [
      "Meilleure compréhension des risques liés à la donnée publique",
      "Acquisition d’une méthodologie OSINT efficace et ciblée",
      "Structuration de rapports d’investigation clairs et pédagogiques",
      "Sensibilisation aux enjeux de cybersécurité passive",
      "Capacité à effectuer une veille technique ciblée et exploitable",
    ],
    result:
      "Un bon aperçu de ce qu’un auditeur cybersécu peut obtenir sans casser une ligne de code. Une compétence utile pour les phases de reconnaissance en pentest, de veille pro ou d’éducation à la cybersécurité.",
  },
  {
    id: 5,
    slug: "network-infrastructure",
    title: "Infrastructure Réseau",
    overview:
      "Conception d’un réseau virtuel complet avec Windows Server, Active Directory, DNS, DHCP, le tout configuré sur des machines virtuelles.",
    description:
      "Ce projet m’a permis de mettre en place une infrastructure réseau simulant un vrai environnement pro. De la création d’un domaine jusqu’à la gestion des utilisateurs avec GPO, j’ai touché à toutes les briques essentielles du réseau Windows.",
    context:
      "Je voulais comprendre comment fonctionne un réseau d’entreprise, comment tout s’organise en interne : qui a accès à quoi, pourquoi, comment, et surtout comment automatiser certaines règles. Le défi : maîtriser des services complexes (AD, DNS, DHCP...) et les faire cohabiter sur des VMs isolées et simulées.",
    features: [
      "Déploiement de VMs Windows Server / Windows 10",
      "Mise en place d’un domaine via Active Directory",
      "Configuration des rôles DNS / DHCP",
      "Création de GPOs pour sécuriser les postes",
      "Ajout de clients au domaine, gestion des droits utilisateurs",
    ],
    technologies: [
      "Windows Server",
      "VMWare / VirtualBox",
      "AD, DNS, DHCP, GPO",
      "Scripts PowerShell",
      "Structure réseau entreprise (LDAP, OU, etc.)",
    ],
    skills: [
      "Compréhension du fonctionnement global d’un réseau Windows",
      "Mise en place de services critiques (AD, DNS, DHCP)",
      "Gestion de la sécurité interne via les GPO",
      "Autonomie dans la configuration et le déploiement de VMs",
      "Préparation aux environnements réseaux réels ou simulés pour tests sécurité",
    ],
    result:
      "Une infrastructure propre, fonctionnelle et documentée, sur laquelle je peux tester de la sécurité, simuler des attaques internes ou tout simplement apprendre à administrer un réseau complet. C’est une base solide pour la cybersécu offensive ou défensive, et un super entraînement pour les rôles de sysadmin ou d’auditeur.",
  },
  {
    id: 6,
    slug: "design-ui-ux",
    title: "UI/UX Design – Initiation & prototypage avec Figma",
    overview:
      "Premiers pas dans le design d’interfaces avec Figma, en créant des maquettes web et des composants UI cohérents, modernes et adaptables à mes projets de développement.",
    description:
      "En tant que développeur, j’ai rapidement compris qu’une bonne interface ne se limite pas à ce que l’on voit, mais à ce que l’on ressent en l’utilisant. J’ai donc commencé à m’initier à l’UI/UX Design pour penser mes projets du point de vue de l’utilisateur, et non plus seulement du code. Je m'exerce à créer des interfaces claires, esthétiques et modulables via Figma, tout en respectant des systèmes de design cohérents.",
    context:
      "Le vrai défi, c’était de sortir de ma vision 'dev pur' pour apprendre à organiser l’espace, structurer l’info, gérer la hiérarchie visuelle et comprendre les comportements utilisateurs Je voulais être capable de prototyper mes idées avant même d’écrire une ligne de code, pour gagner du temps et offrir des expériences plus fluides. Le but était aussi d’apprendre à créer des composants réutilisables, et à gérer un design system minimaliste et fonctionnel.",
    features: [
      "Création de maquettes web (portfolio, dashboard, page projet)",
      "Mise en place de composants UI (cards, boutons, modales, menus)",
      "Utilisation de l’auto-layout, des grilles, des contraintes responsives",
      "Organisation d’un design system léger (typographies, couleurs, espaces)",
      "Prototypage de navigation (liens interactifs, transitions)",
    ],
    technologies: [
      "Figma",
      "Principes de Design UI : alignement, contraste, équilibre, hiérarchie",
      "Bases de UX : parcours utilisateur, logique d’interaction, accessibilité",
      "Construction d’un système de design modulaire",
      "Préparation à l’intégration front-end (Tailwind / React)",
    ],
    skills: [
      "Meilleure capacité à visualiser une interface avant le code",
      "Compréhension des contraintes entre design et dev",
      "Approche plus réfléchie sur la cohérence visuelle et fonctionnelle",
      "Capacité à itérer, prototyper, et tester une idée rapidement",
      "Base solide pour collaborer avec des designers ou créer mes propres UIs",
    ],
    result:
      "Des maquettes propres, intuitives et prêtes à être intégrées dans mes projets réelsJ’ai gagné en cohérence visuelle, en vitesse de développement, et surtout en capacité à penser un projet dans son ensemble : de l’idée à l’interface, jusqu’au code.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );
  if (currentIndex === -1 || currentIndex === projects.length - 1)
    return undefined;
  return projects[currentIndex + 1];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );
  if (currentIndex === -1 || currentIndex === 0) return undefined;
  return projects[currentIndex - 1];
}

export function getAllProjects(): Project[] {
  return projects;
}
