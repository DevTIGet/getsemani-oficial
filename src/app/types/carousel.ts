import { EmblaOptionsType } from "embla-carousel";

export type CarouselProps = {
  slides: readonly string[] | string[];
  options?: EmblaOptionsType;
  autoplayDelay?: number;
};

export type CarouselSlideProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export type CarouselThumbnailsProps = {
  slides: readonly string[] | string[];
  selectedIndex: number;
  isMobile: boolean;
  onThumbClick: (index: number) => void;
  emblaRef: (node: HTMLDivElement | null) => void;
};
