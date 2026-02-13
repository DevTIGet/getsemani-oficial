import type { Ministry } from "../MinistriesGrid";

interface MinistryCardProps {
  ministry: Ministry;
  isAnimating: boolean;
}

export default function MinistryCard({
  ministry,
  isAnimating,
}: MinistryCardProps) {
  return (
    <div
      className={`relative bg-linear-to-br from-blue-50/80 via-white to-blue-50/50 dark:from-gray-800/90 dark:via-gray-900/95 dark:to-gray-800/80 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
        isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {/* Efeito de brilho decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight">
            {ministry.title}
          </h3>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
          {ministry.description}
        </p>

        {/* Botão Saiba Mais com ícone */}
        <button className="group bg-primary-blue/85 hover:bg-primary-blue dark:bg-primary/85 dark:hover:bg-primary/90 text-white font-semibold px-6 py-2.5 md:px-7 md:py-3 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
          <span className="flex items-center gap-2">
            SAIBA MAIS
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>

        {/* Imagem com overlay e efeito */}
        <div className="relative mt-6 md:mt-8 h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl group/img">
          <img
            src={ministry.image}
            alt={ministry.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
}
