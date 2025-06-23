import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-8 py-10 px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold uppercase text-white text-center w-full">
        Disponible pour vos projets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-center w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-xl text-white font-bold md:text-left w-full">
            Un projet en tête ? Une question ?
          </h1>
          <p className="text-md text-white md:text-left w-full">
            N&apos;hésitez pas à me contacter, je suis ouvert aux
            collaborations, opportunités et échanges autour du développement, de
            la cybersécurité.
          </p>
        </div>

        <div className="liquid rounded-2xl p-6 flex flex-col items-start w-full gap-4">
          <div className="hover:liquid rounded-2xl flex items-center w-full gap-4">
            <div className="flex items-center p-4 rounded-full bg-primary/50 backdrop-blur-2xl border border-[#ffffff4d]">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-white/80">Email</p>
              <p className="text-md text-white">pro.mathieuforest@icloud.com</p>
            </div>
          </div>

          <div className="hover:liquid rounded-2xl flex items-center w-full gap-4">
            <div className="flex items-center p-4 rounded-full bg-primary/50 backdrop-blur-2xl border border-[#ffffff4d]">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-white/80">Location</p>
              <p className="text-md text-white">Lyon, France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
