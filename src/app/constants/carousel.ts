/**
 * Carousel slides configuration
 * Contains the paths to the carousel images
 */
export const CAROUSEL_SLIDES = [
  "/imagens/slides/teste.jpg",
  "/imagens/slides/teste2.jpg",
  "/imagens/slides/teste4.jpg",
  "/imagens/slides/teste3.webp",
  "/imagens/slides/event.jpg",
] as const;

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
