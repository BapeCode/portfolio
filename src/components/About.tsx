import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-start justify-start gap-4 py-20 border-b border-border"
    >
      <h1 className="text-4xl font-bold uppercase text-primary-foreground text-center md:text-left w-full">
        👋 À propos de moi
      </h1>

      <p className="text-sm text-secondary text-center md:text-left w-full">
        Je m'appelle Mathieu Forest, j&apos;ai 20 ans et je suis actuellement
        étudiant à la{" "}
        <Link
          href="https://guardia.school/"
          className="text-destructive underline"
        >
          Guardia CyberSecurity School
        </Link>{" "}
        à Lyon. Depuis tout jeune, je suis fasciné par tout ce qui touche à
        l&apos;informatique. Ce qui a commencé par de la curiosité sur "comment
        fonctionne un ordi" est vite devenu une passion pour le développement,
        les réseaux, les systèmes, les outils, et plus largement la logique
        derrière tout ce qu'on utilise au quotidien.
        <br />
        <br />
        Aujourd&apos;hui, je me spécialise dans le développement web et la
        création de systèmes sur mesure, notamment sur FiveM où j'ai conçu un
        framework personnalisé et plusieurs scripts interactifs pensés pour des
        serveurs immersifs. Mais je m&apos;arrête pas là : je m&apos;intéresse
        aussi à la cybersécurité, au reverse engineering, à
        l&apos;automatisation avec Python, au réseau (AD, DNS, DHCP...), et plus
        récemment à l&apos;OSINT.
        <br />
        <br />
        J&apos;aime le code propre, les interfaces claires, le souci du détail,
        et surtout : apprendre en construisant. Pour moi, un bon projet
        c&apos;est pas juste quelque chose qui fonctionne — c&apos;est quelque
        chose qui a du sens, qui est bien pensé, bien structuré et qui peut
        évoluer.
        <br />
        <br />
        En dehors du dev, je suis aussi passionné de jeux vidéo, de football, et
        je ne rate jamais une occasion de voyager pour découvrir de nouveaux
        environnements, nouvelles cultures… et parfois même trouver de
        l&apos;inspiration. Que ce soit pour un projet web, une idée technique,
        un système à construire ou juste une discussion autour de l&apos;IT, je
        suis toujours ouvert aux échanges. Alors n&apos;hésite pas à me
        contacter — on verra ce qu&apos;on peut créer ensemble.
      </p>
    </section>
  );
}
