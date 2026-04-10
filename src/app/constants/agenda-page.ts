export type AgendaCarouselSlide = {
  image: string;
  logo: string;
  title: string;
  subtitle: string;
};

export type AgendaPopularEvent = {
  image: string;
  date: string;
  title: string;
  description: string;
  href: string;
};

export const AGENDA_CAROUSEL_SLIDES: AgendaCarouselSlide[] = [
  {
    image: "/imagens/slides/teste.jpg",
    logo: "/logos/logo-white.svg",
    title: "CULTO DOS EMPREENDEDORES",
    subtitle:
      "Outubro 29, 2025 • Uma noite para conectar fé, trabalho e propósito.",
  },
  {
    image: "/imagens/slides/teste2.jpg",
    logo: "/logos/logo-white.svg",
    title: "CONFERÊNCIA DE JOVENS",
    subtitle:
      "Novembro 10, 2025 • Um encontro de avivamento para a nova geração.",
  },
  {
    image: "/imagens/slides/teste4.png",
    logo: "/logos/logo-white.svg",
    title: "CULTO DE CELEBRAÇÃO",
    subtitle:
      "Dezembro 5, 2025 • Celebre as vitórias e milagres com toda a igreja.",
  },
  {
    image: "/imagens/slides/teste3.webp",
    logo: "/imagens/slides/conferencia_get_up_elas_logo.png",
    title: "CONFERÊNCIA GETUP ELAS",
    subtitle:
      "Um evento especial para mulheres com conteúdo, adoração e comunhão.",
  },
  {
    image: "/imagens/slides/event.jpg",
    logo: "/logos/logo-white.svg",
    title: "EVENTO ESPECIAL GETSEMANI",
    subtitle:
      "Um dia para toda a família participar de uma experiência transformadora.",
  },
];

export const AGENDA_CAROUSEL_OPTIONS = {
  loop: true,
  align: "start",
} as const;

export const AGENDA_CAROUSEL_MOBILE_THUMBS_OPTIONS = {
  dragFree: true,
  skipSnaps: true,
  watchDrag: true,
} as const;

export const AGENDA_CAROUSEL_DESKTOP_THUMBS_OPTIONS = {
  containScroll: "trimSnaps" as const,
  dragFree: false,
  align: "center" as const,
} as const;

export const AGENDA_CAROUSEL_AUTOPLAY_DELAY = 10000; // 10 seconds

export const AGENDA_POPULAR_EVENTS: AgendaPopularEvent[] = [
  {
    image: "/imagens/slides/teste.jpg",
    date: "18 de Abril de 2026 • 19h30",
    title: "VIGÍLIA DE ADORAÇÃO",
    description:
      "Uma noite de oração, louvor e busca pela presença de Deus para toda a igreja.",
    href: "#",
  },
  {
    image: "/imagens/slides/teste2.jpg",
    date: "25 de Abril de 2026 • 20h",
    title: "CONFERÊNCIA DE JOVENS - CHAMADOS",
    description:
      "Palavra, comunhão e avivamento para fortalecer a nova geração em Cristo.",
    href: "#",
  },
  {
    image: "/imagens/slides/teste4.png",
    date: "03 de Maio de 2026 • 9h e 19h",
    title: "DOMINGO DA FAMÍLIA",
    description:
      "Cultos especiais com ministração para casais, pais, filhos e toda a comunidade.",
    href: "#",
  },
  {
    image: "/imagens/slides/rede-social.png",
    date: "10 de Maio de 2026 • 15h",
    title: "ENCONTRO DE MULHERES - ELAS EM FÉ",
    description:
      "Tarde de encorajamento, oração e ensino bíblico para mulheres de todas as idades.",
    href: "#",
  },
  {
    image: "/imagens/slides/event.jpg",
    date: "17 de Maio de 2026 • 18h",
    title: "CULTO MISSIONÁRIO",
    description:
      "Compartilhando testemunhos e visão missionária para alcançar vidas em nossa cidade.",
    href: "#",
  },
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    date: "24 de Maio de 2026 • 8h30",
    title: "ESCOLA BÍBLICA DE LIDERANÇA",
    description:
      "Treinamento prático e bíblico para líderes de células, ministérios e voluntários.",
    href: "#",
  },
  {
    image: "/imagens/slides/teste.jpg",
    date: "31 de Maio de 2026 • 19h",
    title: "NOITE DE CLAMOR E INTERCESSÃO",
    description:
      "Um tempo de oração congregacional por famílias, cidade e avanço do Reino.",
    href: "#",
  },
  {
    image: "/imagens/slides/teste2.jpg",
    date: "07 de Junho de 2026 • 17h",
    title: "CULTO DE CELEBRAÇÃO COM BATISMOS",
    description:
      "Celebraremos novas vidas em Cristo com louvor, palavra e comunhão.",
    href: "#",
  },
  {
    image: "/imagens/slides/event.jpg",
    date: "14 de Junho de 2026 • 14h",
    title: "ENCONTRO DE CASAIS - ALIANÇA",
    description:
      "Uma tarde especial de ensino bíblico e fortalecimento dos relacionamentos.",
    href: "#",
  },
  {
    image: "/imagens/slides/teste4.png",
    date: "21 de Junho de 2026 • 10h",
    title: "AÇÃO SOCIAL GETSEMANI",
    description:
      "Atendimento comunitário, oração e cuidado com famílias da nossa região.",
    href: "#",
  },
];
