import { SlideData } from "@/app/types/carousel";

/**
 * Carousel slides configuration
 * Contains slide data with image, logo, title and slogan
 */
export const CAROUSEL_SLIDES: SlideData[] = [
  {
    imageSlide: "/imagens/slides/teste.jpg",
    logoEvento: "/logos/logo-white.svg",
    titulo: "Encontro de Adoração",
    sloganEvento:
      "Uma noite especial de louvor e adoração para renovar sua fé e fortalecer sua caminhada.",
  },
  {
    imageSlide: "/imagens/slides/teste2.jpg",
    logoEvento: "/logos/logo-white.svg",
    titulo: "Conferência de Jovens",
    sloganEvento:
      "Desperte o propósito que Deus tem para a sua vida nesta conferência transformadora.",
  },
  {
    imageSlide: "/imagens/slides/teste4.png",
    logoEvento: "/logos/logo-white.svg",
    titulo: "Culto de Celebração",
    sloganEvento:
      "Venha celebrar as bênçãos e vitórias que Deus tem derramado sobre nossas vidas.",
  },
  {
    imageSlide: "/imagens/slides/teste3.webp",
    logoEvento: "/imagens/slides/conferencia_get_up_elas_logo.png",
    titulo: "Conferência GETUP Elas",
    sloganEvento:
      "Um evento dedicado às mulheres, para inspirar, fortalecer e empoderar na caminhada de fé.",
  },
  {
    imageSlide: "/imagens/slides/event.jpg",
    logoEvento: "/logos/logo-white.svg",
    titulo: "Evento Especial",
    sloganEvento:
      "Um momento único para toda a família. Traga quem você ama e viva essa experiência.",
  },
];

/**
 * Carousel options configuration
 */
export const CAROUSEL_OPTIONS = {
  loop: true,
} as const;

/**
 * Component configuration constants
 */
export const MOBILE_BREAKPOINT = 768;
export const DEFAULT_AUTOPLAY_DELAY = 105000;

/**
 * Embla carousel options for mobile devices
 */
export const MOBILE_THUMBS_OPTIONS = {
  dragFree: true,
  skipSnaps: true,
  watchDrag: true,
} as const;

/**
 * Embla carousel options for desktop devices
 */
export const DESKTOP_THUMBS_OPTIONS = {
  containScroll: "trimSnaps" as const,
  dragFree: false,
  align: "center" as const,
} as const;
