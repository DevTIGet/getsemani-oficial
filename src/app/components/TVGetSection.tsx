import Image from "next/image";
import Link from "next/link";

import { FaPlay } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function TVGetSection() {
  return (
    <section className="w-full py-12 md:py-16 my-8 bg-linear-to-b from-[#cdaa80] via-[#cdaa80] to-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <span className="text-white text-2xl md:text-4xl font-bold tracking-wide">
            TVGet
          </span>
          <Link
            href="#"
            className="text-white text-xs md:text-base font-medium flex items-center gap-1 hover:underline"
          >
            VER TODOS{" "}
            <span className="text-lg">
              <FiArrowUpRight className="text-white font-bold stroke-3" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vídeo principal */}
          <div className="w-full md:w-8/12 flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <img
                src="/imagens/slides/teste.jpg"
                alt="Culto dos Empreendedores"
                className="w-full h-56 md:h-80 object-cover brightness-75 rounded-2xl"
              />

              <FaPlay className="text-white absolute left-6 bottom-6 w-8 md:w-10 h-8 md:h-10 text-2xl hover:animate-pulse cursor-pointer transition" />
            </div>
            <div className="text-white">
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase tracking-wide text-lg md:text-xl drop-shadow">
                  CULTO DOS EMPREENDEDORES
                </span>
                <span className="text-xs md:text-sm text-white">
                  Outubro 29, 2025
                </span>
              </div>
              <span className="block text-sm mb-2">Márcio Micheli</span>
              <p className="text-sm md:text-base opacity-90">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          {/* Vídeos laterais */}
          <div className="flex flex-col gap-4 w-full md:w-4/12">
            {[1, 2].map((i) => (
              <div key={i} className="relative rounded-xl overflow-hidden">
                <img
                  src="/imagens/slides/teste.jpg"
                  alt="Culto dos Empreendedores"
                  className="w-full h-24 md:h-40 object-cover brightness-75"
                />

                <FaPlay className="absolute cursor-pointer left-3 bottom-3 text-white w-6 h-6 flex items-center justify-center text-lg  hover:animate-pulse transition" />

                <span className="absolute left-12 bottom-4 text-white font-bold text-xs md:text-sm drop-shadow">
                  CULTO DOS EMPREENDEDORES
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
