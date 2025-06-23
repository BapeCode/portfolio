import { Brain, Code, Figma, Power } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Clean code",
      description:
        "J’écris du code clair, structuré et facile à maintenir — pour des projets qui durent et évoluent sans friction.",
      icon: Code,
    },
    {
      title: "Design Focus",
      description:
        "Je soigne l’expérience visuelle autant que le code. Mon but : créer des interfaces simples, élégantes et bien intégrées.",
      icon: Figma,
    },
    {
      title: "Performance",
      description:
        "J’optimise chaque projet pour qu’il soit rapide, fluide et agréable à utiliser, sur tous les supports.",
      icon: Power,
    },
    {
      title: "Continuous Learning",
      description:
        "Je reste curieux et à jour sur les technos. Apprendre, tester, progresser — ça fait partie du métier.",
      icon: Brain,
    },
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-8 py-10 px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold uppercase text-white text-center w-full">
        À propos de moi
      </h1>
      <p className="text-lg md:text-xl text-white/80 text-center">
        Je suis passionné par le développement web et la création de logiciels.
        J&apos;ai actuellement 4 ans d&apos;expérience dans la création de
        projet web moderne.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 gap-4">
        <div className="liquid rounded-2xl p-6 flex flex-col items-start w-full gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Ma présentation
          </h1>

          <p className="text-md md:text-lg text-white/80">
            Je m&apos;appelle Mathieu Forest, j&apos;ai 20 ans et j&apos;étudie
            actuellement à la <strong>Guardia CyberSecurity School</strong> à
            Lyon. Depuis petit, l&apos;informatique me passionne — de
            &quot;comment fonctionne un ordi&quot; à la création de systèmes web
            et d&apos;outils personnalisés.
            <br />
            <br />
            Aujourd&apos;hui, je me spécialise dans le développement web.
            J&apos;explore aussi la cybersécurité, le reverse engineering,
            l&apos;automatisation avec Python, les réseaux, et plus récemment
            l&apos;OSINT. J&apos;aime le code propre, les interfaces claires, et
            les projets qui ont du sens. Construire, apprendre, améliorer —
            c&apos;est ce qui me motive. Et quand je ne suis pas devant mon
            éditeur, tu me trouveras sûrement en train de jouer, de regarder un
            match, ou de voyager pour m&apos;inspirer ailleurs.
            <br />
            <br />
            <strong>
              Discutons ! Que ce soit pour un projet ou une idée technique, je
              suis toujours partant.
            </strong>
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {cards.map((item, index) => {
            return (
              <div
                className="border border-primary liquid rounded-2xl p-6 flex items-center gap-4 h-full"
                key={index}
              >
                <div className="p-4 flex items-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <h1 className="text-xl font-bold text-white">{item.title}</h1>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
